/**
 * Created by Administrator on 15-10-21.
 */
(function($){
    $.fn.canvasPlugin = function(opt){
           var user = {
               id:this.attr('id'),
               data:opt.data,
               width:opt.width,
               height:opt.height,
               size:opt.size
           };
        var circle = new Circle(user);
        circle.draw();


    }
})(jQuery);