requirejs.config({

    baseUrl: '',

    paths: {
        'angular': '../node_modules/angular/angular.min'
    },
    
    shim: {
    	'angular': 'angular'
    }

});

require(['angular'], function() {
	angular.module('snView', []);
});