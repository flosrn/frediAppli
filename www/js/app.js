// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-modal-select'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: false,
    templateUrl: 'templates/menu.html',
    controller: 'FrediCtrl'
  })

  .state('app.bordereau', {
    url: '/bordereau',
    views: {
      'menuContent': {
        templateUrl: 'templates/bordereau.html',
		controller: 'FrediCtrl'
      }
    }
  })
  
  .state('app.detailNoteDeFrais', {
    url: '/detailNoteDeFrais',
    views: {
      'menuContent': {
        templateUrl: 'templates/detailNoteDeFrais.html',
		controller: 'FrediCtrl'
      }
    }
  })
	
	.state('app.modifierNoteDeFrais', {
      url: '/modifierNoteDeFrais',
      views: {
        'menuContent': {
          templateUrl: 'templates/modifierNoteDeFrais.html',
		  controller: 'FrediCtrl'
        }
      }
    })

    .state('app.acceuil', {
      url: '/acceuil',
      views: {
        'menuContent': {
          templateUrl: 'templates/acceuil.html',
		  controller: 'FrediCtrl'
        }
      }
    })
	
	.state('app.ajouterNoteDeFrais', {
      url: '/ajouterNoteDeFrais',
      views: {
        'menuContent': {
          templateUrl: 'templates/ajouterNoteDeFrais.html',
		  controller: 'FrediCtrl'
        }
      }
    })
	
	.state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
		  controller : 'FrediCtrl'
        }
      }
    })
	
	.state('app.licence', {
      url: '/licence',
      views: {
        'menuContent': {
          templateUrl: 'templates/licence.html',
      controller: 'FrediCtrl'
        }
      }
    })

    .state('app.detailLicence', {
      url: '/detailLicence',
      views: {
        'menuContent': {
          templateUrl: 'templates/detailLicence.html',
      controller: 'FrediCtrl'
        }
      }
    })
	
	.state('app.modifierLicence', {
      url: '/modifierLicence',
      views: {
        'menuContent': {
          templateUrl: 'templates/modifierLicence.html',
		controller: 'FrediCtrl'
        }
      }
    })
	
	.state('app.ajouterLicence', {
        url: '/ajouterLicence',
        views: {
          'menuContent': {
            templateUrl: 'templates/ajouterLicence.html',
        controller: 'FrediCtrl'
          }
        }
      })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
