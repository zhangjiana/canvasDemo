drawCircle("cvs01",[0.5,0.3,0.2],["#ff0000","#00ff00","#0000ff"],["a","b","c"]);

function draw(){
	var cvs=document.getElementById("cvs01");
	var c=cvs.getContext("2d");
}

function drawCircle(canvasId, data_arr, color_arr, text_arr) {
    var pi2 = Math.PI*2;

    var canvas =document.getElementById(canvasId); 
	canvas.width=600;
	canvas.height=600; 
    var c =canvas.getContext("2d");
    c.font ="12px Times New Roman";
    var startAgl = 0;
    var agl;
    for(var i=0; i< data_arr.length; i++){ 
        //绘制饼图
        agl = data_arr[i] * pi2 + startAgl;
		
		
        c.beginPath();
		
		c.strokeStyle="#000000";
        c.fillStyle=color_arr[i];
        c.moveTo(200,200);
        c.arc(200, 200, 100, startAgl, agl, false);
        c.lineTo(200,200);
		c.closePath();
        c.stroke();
		c.fill();
        startAgl = agl;
        //绘制图例
		
        c.fillRect(360, 50+18*i,16,16);
		
        c.fillStyle="#000000";
        c.fillText(text_arr[i], 380, 62+18*i );    
		//c.rotate(20*i*Math.PI/180);
    }
}