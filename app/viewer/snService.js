define('snService', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('sn-service', [])
	    .service('snDataService', snService);
	
	snService.$inject = ['$q', '$http'];

	function snService($q, $http) {
		var self = this;

		self.snapList = [
            {
            	path: 'resources/gallery/Koala.jpg',
            	cls: '',
            },
            {
            	path: 'resources/gallery/Chrysanthemum.jpg',
            	cls: '',
            },
        	{
            	path: 'resources/gallery/Desert.jpg',
            	cls: '',
            },
        	{
            	path: 'resources/gallery/Penguins.jpg',
            	cls: '',
            },
        	{
            	path: 'resources/gallery/Tulips.jpg',
            	cls: '',
            },
        	{
            	path: 'resources/gallery/Lighthouse.jpg',
            	cls: ''
            }
        ];

		function init() {
			
		}
	}
});