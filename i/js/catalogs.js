Catalogs = function() {
    this.container = $(".genres");
    this._initHandler();
}

Catalogs.prototype = {
    updateCatalogs: function(xml) {
        catalogs = xml.find("catalog");
        content = "";
        catalogs.each(function(){
            catalog = new Catalog($(this));
            content += catalog.render();
        });
        content+="<div class='clearfix'></div>";
        this.container.html(content);
    },
    _initHandler: function() {
        var that = this;
        document.addEventListener('catalogList', function(ev) {
            that.updateCatalogs(ev.detail);
        });
        $("#home").click(function() {
            that.container.show();
            RemoteEvent.create("showstyles");
        });
        $(".content__inner").on("click",".styles_card",function() {
            var args = new Array();
            args["id"] = $(this).data("id");
            args["offset"] = 0;
            args["limit"] = 20;
            RemoteEvent.create("notify", {
                type:"getList",
                args:args
            });
        });
    }
}