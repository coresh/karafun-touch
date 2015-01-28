Catalog = function(xml) {
    this._caption = "";
    this._id = 0;
    this._parse(xml);
    this._initHandler();
}

Catalog.prototype = {
    render: function() {
        html = this._getHtml();
        return html;
    },
    _initHandler: function() {
        var that = this;
        $("body").on("click","#"+this._id,function() {
            var ev = new CustomEvent("notify_with_args", {
                detail:{
                    type:"getList",
                    args:"id='"+that._id+"' offset='0' limit='10'"
                }
            });
            document.dispatchEvent(ev);
        });
    },
    _parse: function(catalog) {
        this._caption = catalog.text();
        this._id = catalog.attr("id");
    },
    _getHtml: function() {
        return '<div class="column half">\n\
<a class="link--card" href="#">\n\
<div class="styles_card" id="'+this._id+'">\n\
<div class="styles_card__icon"><img src="i/img/genre_2.png"></div>\n\
<div class="styles_card__left"><span class="styles_card__title">'+this._caption+'</span></div>\n\
<div class="clearfix"></div>\n\
</div>\n\
</a>\n\
</div>';
    }
    
  
}