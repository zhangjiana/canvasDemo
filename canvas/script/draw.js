/*创建饼图对象
参数：{
	id:canvas元素的ID
	data:一个数组[{numb:绘制比例，color:绘制颜色，text：文字描述}]
	width:画布宽度
	height:画布高度
	size:饼图直径
}
*/
function Pan(opt){
	this.config={
		id:null,
		data:null,
		width:300,
		height:300,
		size:100
	}
	this.cvsEl=null;
	this.c2d=null;
	/*用户参数赋值*/
	for(var i in opt){
		this.config[i]=opt[i];
	}
	/*调用初始化函数*/
	this.init();
}

Pan.prototype={
	init:function(){
		var that=this;
		this.cvsEl=document.getElementById(that.config.id);
		this.c2d=this.cvsEl.getContext("2d");
		this.cvsEl.width=that.config.width;
		this.cvsEl.height=that.config.height;
	},
	/*绘图方法*/
	draw:function(){
		var that=this;
		/*定义中心点*/
		var center={
				x:that.config.width/2,
				y:that.config.height/2
		};
		/*计算半径*/
		var r=that.config.size/2;
		/*设置起始角度*/
		var sAngle=0;
		/*循环用户参数*/
		for(var i=0;i<that.config.data.length;i++){
			/*计算用户角度*/
			var eAngle=that.config.data[i].numb*2*Math.PI;
			/*创建路径*/
			that.c2d.beginPath();
			/*绘制起始路径，连接圆心*/
			that.c2d.moveTo(center.x,center.y);
			/*绘制圆形*/
			that.c2d.arc(center.x,center.y,r,sAngle,eAngle+sAngle);
			/*绘制结束路径，再次连接圆心*/
			that.c2d.lineTo(center.x,center.y);
			/*填充用户颜色*/
			that.c2d.fillStyle=that.config.data[i].color;
			/*累加角度*/
			sAngle+=eAngle;
			/*绘制矩形*/
			that.c2d.fillRect(20,20*i,15,15);
			/*填充路径*/
			that.c2d.fill();
			/*设置字体*/
			that.c2d.font="15px Arial";
			/*绘制字体*/
			that.c2d.fillText(that.config.data[i].text,40,20*i+15);
		}
	}
}
