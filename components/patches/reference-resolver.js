(function($) {
    'use strict';

    function refResolver() {
	var self = this;
    }

    refResolver.prototype.resolveReferences = function(json) {
        return new Promise(function(resolve, reject) {resolve(json);});
    };

    window.refResolver = refResolver;

    $(document).ready(function () {
        window.refResolver = new refResolver();
    });
})(jQuery);