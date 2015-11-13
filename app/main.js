requirejs.config({

    baseUrl: '',

    paths: {
        angular: '../node_modules/angular/angular.min',
        snCtrl: 'viewer/snController',
        snDir: 'viewer/snDirective',
        snService: 'viewer/snService',
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    },

    //deps: ['./bootstrap']

});

require(['angular', 'snCtrl', 'snDir', 'snService'], function() {
	'use strict';

	angular
	    .module('snView', [
			'sn-ctrl',
			'sn-widget',
			'sn-service'
        ]);
});