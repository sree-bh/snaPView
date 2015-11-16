define('snCtrl', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-ctrl', [])
	    .controller('snController', snCtrl);

	snCtrl.$inject = ['snDataService', '$interval', '$timeout'];

	function snCtrl(snDataService, $interval, $timeout) {
		var self = this;

		//Properties
		self.snapList = snDataService.snapList;

		// Methods
	}
});