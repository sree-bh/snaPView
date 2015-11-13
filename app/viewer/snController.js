define('snCtrl', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-ctrl', [])
	    .controller('snController', snCtrl);

	snCtrl.$inject = ['snDataService', '$interval', '$timeout'];

	function snCtrl(snDataService, $interval, $timeout) {
		var self = this,
		    ssInterval;

		//Properties
		self.snapList = snDataService.snapList;
		self.name = 'simple snap viewer';
		self.currentIdx = 0;
		self.nextIdx = 1;
		self.action = 'Play';

		// Methods
		self.slideShow = slideShow;
		
		function slideShow() {
			if (!!ssInterval) {
				$interval.cancel(ssInterval);
				ssInterval = null;
				self.action = 'Play';

				return;
			}

			self.action = 'Pause';
			fnslideShow();
			ssInterval = $interval(fnslideShow, 4000);
		}
		
		function fnslideShow() {
			
			if (self.animationProgress) {
				return;
			}

			self.nextIdx = self.currentIdx + 1;
			self.animationProgress = true;
			
			if (self.currentIdx === self.snapList.length - 1) {
				ng.forEach(self.snapList, function(item, idx) {
					item.cls = '';
				});
				
				self.nextIdx = 0;
			}
			
			self.snapList[self.currentIdx].cls = 'shown left';
			self.snapList[self.nextIdx].cls = 'next';
			$timeout(function () {
				self.snapList[self.currentIdx].cls = 'left';
				self.snapList[self.nextIdx].cls = 'shown';
				self.animationProgress = false;
				self.currentIdx = self.nextIdx;
			}, 3500);
		}
	}
});