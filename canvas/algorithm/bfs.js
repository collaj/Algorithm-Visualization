var BFS = function () {
    Algorithm.call(this);

    this.name = "bfs";
    this.edgeArray = [];
};

extend(Algorithm, BFS);



BFS.prototype.draw = function (canvas) {
    Algorithm.prototype.draw.call(this, canvas);

    var thisLoop = new Date;
    var fps = 1000 / (thisLoop - this.lastLoop);
    this.lastLoop = thisLoop;
    var x = document.getElementById("fps");
    x.innerHTML = "FPS: " + Math.ceil(fps);


    for (var i = 0; i < this.objects.length; i++) {
        var element = this.objects[i];
        element.draw(canvas);
    }

};

BFS.prototype.load = function () {

    this.activateMouse();


   
       
    var coor1 = new Coordinate2D(700, 100);
    var node1 = new Circle(coor1, 50, new Color(86, 245, 229), new Text("0"));
    this.addObjects(node1);

    var coor2 = new Coordinate2D(800, 300);
    var node2 = new Circle(coor2, 50, new Color(86, 245, 229), new Text("1"));
    this.addObjects(node2);

    var coor3 = new Coordinate2D(1000, 450);
    var node3 = new Circle(coor3, 50, new Color(86, 245, 229), new Text("2"));
    this.addObjects(node3);

    var coor4 = new Coordinate2D(650, 300);
    var node4 = new Circle(coor4, 50, new Color(86, 245, 229), new Text("3"));
    this.addObjects(node4);

    var coor5 = new Coordinate2D(1000, 340);
    var node5 = new Circle(coor5, 50, new Color(86, 245, 229), new Text("4"));
    this.addObjects(node5);

    var coor = new Coordinate2D(900, 590);
    var node6 = new Circle(coor, 50, new Color(86, 245, 229), new Text("5"));
    this.addObjects(node6);

    //building empty 2d array to access an array of the edges drwan on the screen

    for (var i = 0; i < 6; i++) {
        var innerArray = [];
        for (var j = 0; j < 6; j++) {
            innerArray.push("");
        }
        this.edgeArray.push(innerArray);

    }


    var edge = new Edge(this.objects[0], this.objects[1], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[0][1] = edge; 
    this.edgeArray[1][0] = edge;
    var edge = new Edge(this.objects[2], this.objects[3], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[2][3] = edge;
    this.edgeArray[3][2] = edge;
    var edge = new Edge(this.objects[4], this.objects[5], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[4][5] = edge;
    this.edgeArray[5][4] = edge;
    var edge = new Edge(this.objects[0], this.objects[2], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[0][2] = edge;
    this.edgeArray[2][0] = edge;
    var edge = new Edge(this.objects[4], this.objects[1], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[4][1] = edge;
    this.edgeArray[1][4] = edge;
    var edge = new Edge(this.objects[5], this.objects[2], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[5][2] = edge;
    this.edgeArray[2][5] = edge;
    var edge = new Edge(this.objects[0], this.objects[3], new Color(250, 250, 250));
    this.addEdges(edge);
    this.edgeArray[0][3] = edge;
    this.edgeArray[3][0] = edge;
    

    


    Engine.start();


};

BFS.prototype.bfs = function (start) {

    //first
    //reset the colors
    for (var i = 0; i < 6; i++) {
        var col = new Color(86, 245, 229);
        var colorAnimation = new ColorAnimation(Engine.now, 0, this.objects[i], col);
        this.animations.addAnimation(colorAnimation);

    }
    for (var i = 0; i < 6; i++) {
        var col = new Color(250, 250, 250);
        var colorAnimation = new ColorAnimation(Engine.now, 0, this.edges[i], col);
        this.animations.addAnimation(colorAnimation);

    }

    
    var visit = []
    for (var i = 0; i < this.objects.length; i++) {
        visit.push(false);
    }

    //init queue
    var queue = new Queue();

    //create adjacency list
    var adj = [];
    var node1 = new Node(0, new Node(1, new Node(2, new Node(3, null))));
    adj.push(node1);
    var node2 = new Node(1, new Node(0, new Node(4, null)));
    adj.push(node2);
    var node3 = new Node(2, new Node(3, new Node(0, new Node(5, null))));
    adj.push(node3);
    var node4 = new Node(3, new Node(2, new Node(0, null)));
    adj.push(node4);
    var node5 = new Node(4, new Node(5, new Node(1, null)));
    adj.push(node5);
    var node6 = new Node(5, new Node(4, new Node(2, null)));
    adj.push(node6);

    visit[start] = true;
    queue.enqueue(start);

    var startTime = Engine.now;


    while (!queue.isEmpty()) {

        var current = queue.dequeue();
        var trav = adj[current];

        var col = new Color(100, 0, 0);
        var colorAnimation = new ColorAnimation(startTime, 1000, this.objects[trav.vertex], col);
        this.animations.addAnimation(colorAnimation);
        startTime = startTime + 1000;

        while (trav != null) {

            var v = trav.vertex;
            if (!visit[v]) {

                visit[v] = true;
                queue.enqueue(v);

                //vertex from current to v
                var edge = this.edgeArray[current][v];
                var col = new Color(100, 0, 0);
                var colorAnimation = new ColorAnimation(startTime, 500, edge, col);
                this.animations.addAnimation(colorAnimation);
                startTime = startTime + 500;

            }
            trav = trav.next;

        }


    }

   


};

//EVENT LISTENERS
$(".start_bfs").click(function () {
   // alert($("#bfs_start_vertex").val());
    Engine.algorithm.bfs(parseInt($("#bfs_start_vertex").val()));
});