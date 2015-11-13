define('snDir', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-widget', [])
	    .directive('snapViewer', ['$timeout', snViewer]);

	function snViewer($timeout) {
		var directive = {
	        link: link,
	        template: '<div style="background-image: url({{item.path}});" class="slide"></div>',
	        restrict: 'EC'
	    };

		return directive;

	    function link(scope, el, attrs) {
	    	var snapList = scope.$parent.snapCtrl.snapList;

	    	scope.$parent.animationProgress = false;

	    	if (scope.$first) {
	    		snapList[scope.$index].cls = 'shown';
	    	}

	    	el.bind('click', function() {
	    		var nextIdx = scope.$index + 1;

	    		if (scope.$parent.animationProgress) {
	    			return;
	    		}

	    		scope.$parent.animationProgress = true;

	    		if (scope.$last) {
	    			ng.forEach(snapList, function(item, idx) {
    					item.cls = '';
	    			});

	    			nextIdx = 0;
		    	}

	    		snapList[scope.$index].cls = 'shown left';
	    		snapList[nextIdx].cls = 'next';
	    		$timeout(function () {
	    			snapList[scope.$index].cls = 'left';
	    			snapList[nextIdx].cls = 'shown';
	    			scope.$parent.animationProgress = false;
	    		}, 3500);

	    		scope.$apply();
	    	});
	    }
	}
});