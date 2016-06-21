/**
 * Created by Administrator on 15-10-21.
 */

var WIDTH = 1100;
var HEIGHT = 768;
var RADIUS = 8;
var Margin_Top = 60;
var Margin_Left = 30;

var curTime = new Date(2015,10,21,21,12,12);



window.onload = function(){
    var oCanvas = document.getElementById('canvas');
    var con = oCanvas.getContext('2d');
    oCanvas.width = WIDTH;
    oCanvas.height = HEIGHT;
    render(con);
};


function render(con){
    var hour = 12;
    var min = 36;
    var sec = 32;


    renderDigit(Margin_Left,Margin_Top,parseInt(hour/10),con);
    renderDigit(Margin_Left+15*(RADIUS+1),Margin_Top,parseInt(hour%10),con);
    renderDigit(Margin_Left+30*(RADIUS+1),Margin_Top,10,con);
    renderDigit(Margin_Left+45*(RADIUS+1),Margin_Top,parseInt(min/10),con);
    renderDigit(Margin_Left+60*(RADIUS+1),Margin_Top,parseInt(min%10),con);
    renderDigit(Margin_Left+75*(RADIUS+1),Margin_Top,10,con);
    renderDigit(Margin_Left+90*(RADIUS+1),Margin_Top,parseInt(sec/10),con);
    renderDigit(Margin_Left+105*(RADIUS+1),Margin_Top,parseInt(sec%10),con);


}
function renderDigit(x,y,num,con){
    con.fillStyle = 'red';
    console.log(digit[0][1][2]);
    for(var i = 0;i < digit[num].length; i++){
        for(var j = 0; j <digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                con.beginPath();
                con.arc(x+j*2*(RADIUS+1)+RADIUS+1,y+i*2*(RADIUS+1)+RADIUS+1,RADIUS,0,2*Math.PI);
                con.closePath();
                con.fill();
            }

        }
    }



}