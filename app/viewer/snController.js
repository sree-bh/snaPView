define('snCtrl', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-ctrl', [])
	    .controller('snController', snCtrl);

	snCtrl.$inject = ['snDataService'];

	function snCtrl(snDataService) {
		var self = this,
		    ssInterval;

		//Properties
		self.snapList = snDataService.snapList;
		self.name = 'simple snap viewer';

		// Methods
		self.slideShow = slideShow;
		
		function slideShow() {
//			ssInterval = $interval(fucntion () {
//				
//			}, 1000);
		}
	}
});