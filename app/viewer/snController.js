define('snCtrl', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-ctrl', [])
	    .controller('snController', snCtrl);

	snCtrl.$inject = ['snDataService', '$interval', '$timeout'];

	function snCtrl(snDataService, $interval, $timeout) {
		var self = this,
		    lastSnap,
		    ssInterval;

		//Properties
		self.snapList = snDataService.snapList;
		self.name = 'simple snap viewer';
		self.action = 'Play';

		// Methods
		self.slideShow = slideShow;
		self.next = next;
		self.prev = prev;

		init();

		function init() {
			lastSnap = self.snapList.length - 1;
			self.snapList[lastSnap].cls = 'left';
			self.snapList[0].cls = 'shown';
			self.snapList[1].cls = 'next';
			self.currentIdx = 0;
			self.nextIdx = 1;
			self.prevIdx = lastSnap;
		}

		function pause() {
			if (!!ssInterval) {
				$interval.cancel(ssInterval);
				ssInterval = null;
				self.action = 'Play';

				return true;
			}
		}

		function slideShow() {
			if (pause()) {
				return;
			}

			self.action = 'Pause';
			ssInterval = $interval(fnslideShow, 5000);
		}
		
		function fnslideShow(stopSS, isPrev) {

			if (stopSS === true) {
				pause();
			}

			if (self.animationProgress) {
				return;
			}

			self.animationProgress = true;

			if (isPrev) {
				$timeout(function () {
					self.snapList[self.prevIdx].cls = 'animate shown';
					self.snapList[self.currentIdx].cls = 'next';
					self.snapList[self.nextIdx].cls = '';
					self.nextIdx = self.currentIdx;
					self.currentIdx = self.prevIdx;
					self.prevIdx = self.currentIdx === 0 ? lastSnap: self.prevIdx-1;
				}, 1);
			} else {
				$timeout(function () {
					self.snapList[self.prevIdx].cls = '';
					self.snapList[self.currentIdx].cls = 'animate shown left';
					self.prevIdx = self.currentIdx;
					self.currentIdx = self.nextIdx;
					self.nextIdx = self.currentIdx === lastSnap ? 0: self.nextIdx + 1;
				}, 1);
			}
			
			$timeout(function () {
				self.snapList[self.prevIdx].cls = 'left';
				self.snapList[self.currentIdx].cls = 'shown';
				self.snapList[self.nextIdx].cls = 'next';
				self.animationProgress = false;
			}, 1500);
		}

		function next() {
			fnslideShow(true);
		}

		function prev() {
			fnslideShow(true, true);
		}
	}
});