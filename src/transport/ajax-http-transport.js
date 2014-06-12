(function(){
var root = this;
var F = root.F;
var qutils = F.util.query;

var AjaxHTTP= function (config) {

    var defaults = {
        url: '',

        contentType: 'application/json',
        headers: {},
        statusCode: {
            404: $.noop
        },
    };

    //TODO: Add config service to switch between locations by url
    var options = $.extend({}, defaults, config);

    var connect = function (method, params, ajaxOptions) {
        params = ($.isPlainObject(params) || $.isArray(params)) ? JSON.stringify(params) : params;
        var connOptions = $.extend(true, {}, options, ajaxOptions, {
            type: method,
            data: params
        });
        return  $.ajax(connOptions);
    };

    return {
        /** All method paths will be relative to this **/
        basePath: '',

        statusHandlers: {

        },

        get:function (params, ajaxOptions) {
            params = qutils.toQueryFormat(params);
            return connect.call(this, 'GET', params, ajaxOptions);
        },
        post: function () {
            return connect.apply(this, ['post'].concat([].slice.call(arguments)));
        },
        patch: function () {
            return connect.apply(this, ['patch'].concat([].slice.call(arguments)));
        },
        put: function () {
            return connect.apply(this, ['put'].concat([].slice.call(arguments)));
        },
        delete: function () {
            return connect.apply(this, ['delete'].concat([].slice.call(arguments)));
        },
        head: function () {
            return connect.apply(this, ['head'].concat([].slice.call(arguments)));
        },
        options: function () {
            return connect.apply(this, ['options'].concat([].slice.call(arguments)));
        }
    };
};

if (typeof exports !== 'undefined') {
    module.exports = AjaxHTTP;
}
else {
    if (!root.F) { root.F = {};}
    if (!root.F.transport) { root.F.transport = {};}
    root.F.transport.Ajax = AjaxHTTP;
}

}).call(this);