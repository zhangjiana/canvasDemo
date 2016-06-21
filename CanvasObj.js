/**
 * Created by Administrator on 15-10-21.
 */


function Circle(opt){
    this.config = {
        id:null,
        width:300,
        height:300,
        size:100,
        data:null
    };
    this.cvsEl = null;
    this.cvs2D = null;

 $.extend(this.config,opt);
 this.init();
 }
 Circle.prototype = {
     init:function(){
            var that = this;
            that.cvsEl = document.getElementById(that.config.id);
            that.cvs2D = that.cvsEl.getContext('2d');
            that.cvsEl.width = that.config.width;
            that.cvsEl.height = that.config.height;
     },
     draw:function(){

         var that = this;

            var center = {
                x:that.config.width/2,
                y:that.config.height/2
            };
            var r = that.config.size/2;
            var sAngle = 0;

            var i = 0;
            var a = 1;
            var j = 1;
         var timer = setInterval(function(){

             j++;
             a = j/1000;
             var endAngle ;


             if(i = 0){
                 endAngle = (a)*2*Math.PI;
             }else{
                 endAngle = (a+that.data[i].num)*2*Math.PI;
             }


            console.log(endAngle);

             that.cvs2D.beginPath();
             that.cvs2D.moveTo(center.x,center.y);
             that.cvs2D.arc(center.x,center.y,r,sAngle,endAngle);
             that.cvs2D.fillStyle = that.config.data[i].color;
             that.cvs2D.fill();
             that.cvs2D.closePath();

            if(endAngle == that.data[i].num*2*Math.PI){
                clearInterval(timer);
            }
             i++;

         },20);







        /* for( var i = 0 ; i<that.config.data.length;i++) {
                    that.cvs2D.beginPath();
                    that.cvs2D.moveTo(center.x, center.y);

                    var eAngle = that.config.data[i].num * 2 * Math.PI;
                    that.cvs2D.arc(center.x, center.y, r, sAngle, eAngle + sAngle);
                    that.cvs2D.lineTo(center.x, center.y);
                    that.cvs2D.fillStyle = that.config.data[i].color;
                    that.cvs2D.fillRect(20, 20 * i, 15, 15);
                    that.cvs2D.fillText(that.config.data[i].text, 40, 20 * i + 15);
                    that.cvs2D.fill();
                    that.cvs2D.closePath();
                    sAngle += eAngle;

                }*/



     }
};

