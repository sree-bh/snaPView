define('snDir', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-widget', [])
	    .directive('snapViewer', ['$timeout', snViewer]);

	function snViewer($timeout) {
		var directive = {
	        link: link,
	        template: '<div style="background-image: url({{item.path}});" class="slide"></div>',
	        restrict: 'EAC'
	    };

		return directive;

	    function link(scope, el, attrs) {
	    }
	}
});