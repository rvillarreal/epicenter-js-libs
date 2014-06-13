/**
 * Utilities for working with query strings
*/
var query= function () {

    return {
        /**
         * Converts to matrix format
         * @param  {Object} qs Object to convert to query string
         * @return {String}    Matrix-format query parameters
         */
        toMatrixFormat: function(qs) {
            var returnArray = [];
            $.each(qs, function(key, value) {
                returnArray.push(key + '=' + value);
            });

            var mtrx = ';' + returnArray.join(';');
            return mtrx;
        },

        toQueryFormat: function(qs) {
            var returnArray = [];
            $.each(qs, function(key, value) {
                if ($.isArray(value)) {
                    value = value.join(',');
                }
                returnArray.push(key + '=' + value);
            });

            var mtrx = returnArray.join('&');
            return mtrx;
        }
        //TODO: test string, null, invalids

    };
}();

if (!window.F) window.F = {};
if (!window.F.util) window.F.util = {};
F.util.query = query;
