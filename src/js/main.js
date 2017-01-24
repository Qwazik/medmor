$(function(){
    /*-------------------------------------------------*/
    /*    social widgets
    /*-------------------------------------------------*/
    // vk
    VK.Widgets.Group("vk_groups", {mode: 0, width: $('#vk_groups').parent().width(), height: "338"}, 53358380);
    // ok
    !function (d, id, did, st) {
      var js = d.createElement("script");
      js.src = "https://connect.ok.ru/connect.js";
      js.onload = js.onreadystatechange = function () {
      if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
        if (!this.executed) {
          this.executed = true;
          setTimeout(function () {
            OK.CONNECT.insertGroupWidget(id,did,st);
          }, 0);
        }
      }}
      d.documentElement.appendChild(js);
    }(document,"ok_group_widget","56747025563697",'{"width":'+$('#ok_group_widget').parent().width()+',"height":338}');

    /*-------------------------------------------------*/
    /*    equal height
    /*-------------------------------------------------*/
    



    equalHeight('.js-equal-height', '.col-lg-4 .info-block');
});

$(window).resize(function(){
    equalHeight('.js-equal-height', '.col-lg-4 .info-block');
});

function equalHeight(wrap, element){
    $(wrap).each(function(){
        var maxHeight = [],
            className = element;
        $(this).find(className).each(function(){
            $(this).height('auto');
        });
        $(this).find(className).each(function(){
            maxHeight.push($(this).height());
        });
        maxHeight = Math.max.apply(null, maxHeight);
        $(this).find(className).each(function(){
            $(this).height(maxHeight);
        });
    });
}