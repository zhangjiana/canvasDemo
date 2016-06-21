/*
参考手册：http://www.w3school.com.cn/tags/html_ref_canvas.asp
基本教程：http://www.runoob.com/html/html5-canvas.html

c.getContext("2d") 创建2D画布
c.fillStyle="#FF0000";  设置绘制属性
c.strokeStyle="#000000"路径颜色
c.fillRect(0,0,300,300);  绘制矩形，参数为（X,Y,width,height）
c.moveTo(x,y) 绘制路径起始位置
c.lineTo(x,y) 绘制线条路径结束为止
c.stroke() 绘制线条
c.fill() 绘制填充图形路径
c.font= 设置字体属性
c.fillText("Hello World",10,50); 绘制字体，参数（文字，x,y）
c.strokeText("Hello World",10,50); 绘制字体线条
c.arc(x,y,r,sAngle,eAngle,counterclockwise); 绘制原型，参数（X,Y,半径，起始角度，绘制角度，绘制方向）
c.beginPath();开启新路径
c.closePath();闭合当前路径
c.clearRect(x,y,w,h);清除内容

c.drawImage(img,x,y,width,height);
*/