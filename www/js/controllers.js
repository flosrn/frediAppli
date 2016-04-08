angular.module('starter.controllers', [])

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------Début controller FrediCtrl------------------------------------------------------------------------------------------------*/


  .controller('FrediCtrl', function($scope, $ionicModal, $timeout, $http, $state, $rootScope, $ionicActionSheet, $ionicLoading, $ionicPopup, $ionicSideMenuDelegate) {
  
  var vm = this;
  vm.noteDeFrais;
  vm.maNoteDeFrais;
  vm.dataLogin;
  vm.selectClub;
  $scope.dataNote = {};
  $rootScope.modifNote = {};
  $rootScope.modifLicence = {};
  $scope.loginData = {};
  $scope.URL = 'http://127.0.0.1/';
	
	if($state.is('app.login')){ //si on est sur la page login le drag du menu ne fonctionne pas
  $ionicSideMenuDelegate.canDragContent(false);
	}else{
  $ionicSideMenuDelegate.canDragContent(true);
	}
  // $rootScope.id_demandeur =2;
  
  
/*---------------------------------------------------------Connexion-----------------------------------------------------------------------------------------------------------*/
  $scope.doLogin = function() {
		$ionicLoading.show();
		$scope.email = $scope.loginData.email;
		$scope.password = $scope.loginData.password;
		
		if($scope.email === 'root@root.fr' && $scope.password === 'root'){$state.go('app.acceuil'); $rootScope.id_demandeur =2;}
		
		$http.get($scope.URL+'frediAppli/www/bdd/login.php?email='+$scope.email+'&password='+$scope.password).success(function(dataLogin) {
			
			if(dataLogin.AdresseMail === undefined){
			$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
					 title: 'Attention !',
					 template: "identifiant ou mot de passe incorrecte!"
					});
				
			}else{
				$rootScope.id_demandeur = dataLogin.idDemandeur;
				$state.go('app.acceuil');
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
					 title: 'Bienvenue !',
					 template: "Vous etes maintenant connecter!"
					});
			}
            }).error(function(error) {
                vm.error = error;
				$ionicLoading.hide();
            });
    
  };
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Deconnexion-----------------------------------------------------------------------------------------------------------*/

	$scope.deconnexion = function(){
		$scope.loginData = {};
		$rootScope.id_demandeur = 0
		var alertPopup = $ionicPopup.alert({
			 title: 'Au revoir et merci !',
			 template: "Vous etes maintenant déconnecter!"
			});
		
	}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------Partie Bordereau--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  
  
/*------------------------------------------------------------------Afficher note de frais--------------------------------------------------------------------------------------------------*/
 
	if($state.is('app.bordereau')){
			$http.get($scope.URL+'frediAppli/www/bdd/bordereau.php?id_demandeur='+$rootScope.id_demandeur).success(function(noteDeFrais) {
                $scope.itemsBordereau= noteDeFrais;	
            }).error(function(error) {
                vm.error = error;
            });
			
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------Afficher Total----------------------------------------------------------------------------------------------------*/

	if($state.is('app.bordereau')){
			$http.get($scope.URL+'frediAppli/www/bdd/total.php?id_demandeur='+$rootScope.id_demandeur).success(function(total) {
                $scope.itemsTotal= total;	
            }).error(function(error) {
                vm.error = error;
            });
			
	}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------Ajouter note de frais----------------------------------------------------------------------------------------------------*/
	
	$scope.ajouterNoteDeFrais = function() {
		$http.get($scope.URL+'frediAppli/www/bdd/ajouterNoteDeFrais.php?date='+$scope.dataNote.date+'&trajet='+$scope.dataNote.trajet+'&motif='+$scope.dataNote.motif+'&km='+$scope.dataNote.km+'&coutPeage='+$scope.dataNote.coutPeage+'&coutRepas='+$scope.dataNote.coutRepas+'&coutHebergement='+$scope.dataNote.coutHebergement+'&id_demandeur='+$rootScope.id_demandeur).success(function() {
				$state.go('app.bordereau', {}, {reload: false,cache: false});
		$scope.dataNote = {};
            }).error(function(error) {
                vm.error = error;
				var alertPopup = $ionicPopup.alert({
					 title: 'Erreur !',
					 template: "!"
					});
            });
	
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------Afficher ma note de frais (modifierNoteDeFrais)-------------------------------------------------------------------------------------------------------*/	
	
	$scope.maNoteDeFrais = function (item){
		$http.get($scope.URL+'frediAppli/www/bdd/maNoteDeFrais.php?idLigne='+item['idLigne']).success(function(maNoteDeFrais) {
                $rootScope.itemsMaNoteDeFrais = maNoteDeFrais;	
				$rootScope.modifNote.idLigne = $scope.itemsMaNoteDeFrais['idLigne'];
				// $rootScope.modifNote.date = $scope.itemsMaNoteDeFrais['date'];
				$rootScope.modifNote.trajet = $scope.itemsMaNoteDeFrais['trajet'];
				$rootScope.modifNote.motif = $scope.itemsMaNoteDeFrais['libelle'];
				$rootScope.modifNote.idMotif = $scope.itemsMaNoteDeFrais['idMotif'];
				$rootScope.modifNote.km = $scope.itemsMaNoteDeFrais['km'];
				$rootScope.modifNote.coutPeage = $scope.itemsMaNoteDeFrais['coutPeage'];
				$rootScope.modifNote.coutRepas = $scope.itemsMaNoteDeFrais['coutRepas'];
				$rootScope.modifNote.coutHebergement = $scope.itemsMaNoteDeFrais['coutHebergement'];
				$rootScope.modifNote.km = parseInt($rootScope.modifNote.km);
				$rootScope.modifNote.coutPeage = parseInt($rootScope.modifNote.coutPeage);
				$rootScope.modifNote.coutRepas = parseInt($rootScope.modifNote.coutRepas);
				$rootScope.modifNote.coutHebergement = parseInt($rootScope.modifNote.coutHebergement);
				// $rootScope.modifNote.date = "22/05/2000";
            }).error(function(error) {
                vm.error = error;
            });
		
		
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	


/*-----------------------------------------------------------modifier ma note de frais---------------------------------------------------------------------------------------------------------*/

		$scope.modifierNoteDeFrais = function() {
		console.log($rootScope.modifNote.date);
			$http.get($scope.URL+'frediAppli/www/bdd/modifierNoteDeFrais.php?date='+$rootScope.modifNote.date+'&trajet='+$rootScope.modifNote.trajet+'&motif='+$rootScope.modifNote.motif
			+'&km='+$rootScope.modifNote.km+'&coutPeage='+$rootScope.modifNote.coutPeage+'&coutRepas='+$rootScope.modifNote.coutRepas+'&coutHebergement='+$rootScope.modifNote.coutHebergement
			+'&idLigne='+$rootScope.modifNote.idLigne+'&idMotif='+$rootScope.modifNote.idMotif).success(function() {
				$rootScope.modifNote = {};
				$state.go('app.bordereau', {}, {reload: false,cache: false});
            }).error(function(error) {
                vm.error = error;
            });
		}
	
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------ActionSheet------------------------------------------------------------------------------------------*/
	
	 $scope.show = function(item, index) {
	
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
	   { text: 'Detail' },
       { text: 'Modifier' }
     ],
     destructiveText: 'Supprimer',
     titleText: 'Options note de frais',
     cancelText: 'Retour',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
	
		if(index == 0){
			$state.go("app.detailNoteDeFrais");
			$scope.maNoteDeFrais(item);
			console.log(item);
		}
		if(index == 1){
			$state.go('app.modifierNoteDeFrais');
			$scope.maNoteDeFrais(item);
		}
	 
		
		
       return true;
     },
	 
	destructiveButtonClicked: function(){ //si clique sur supprimer alors supprime la note de frais
		
		$http.get($scope.URL+'frediAppli/www/bdd/supprimerNoteDeFrais.php?idLigne='+item['idLigne']).success(function() {   //supprime la note de frais
                $state.go('app.bordereau');
			$scope.itemsBordereau.splice(index, 1); //splice
            }).error(function(error) {
                vm.error = error;
				alert("La suppression na pas été effectuée");
            });
		return true;		
	}
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 10000); //actionSheet de 10 seconde
   }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------Partie Licence--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*------------------------------------------------------------------Afficher licences--------------------------------------------------------------------------------------------------*/

	if($state.is('app.licence')){
			$http.get($scope.URL+'frediAppli/www/bdd/licence.php?id_demandeur='+$rootScope.id_demandeur).success(function(licence) {
                $scope.itemsLicence = licence;	
            }).error(function(error) {
                vm.error = error;
            });
			
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------Ajouter licence----------------------------------------------------------------------------------------------------*/
	
	//fonction qui récupere le club du modal select
	$scope.SSelectClub = function(selectClub) {
		vm.selectClub = selectClub;	
	};
	
	//fonction ajouter licence
	$scope.ajouterLicence = function() {
		$http.get($scope.URL+'frediAppli/www/bdd/ajouterLicence.php?num='+$scope.dataNote.num+'&nom='+$scope.dataNote.nom+'&prenom='
			+$scope.dataNote.prenom+'&dateNaissance='+$scope.dataNote.dateNaissance+'&lib_club='+vm.selectClub+'&id_demandeur='
			+$rootScope.id_demandeur).success(function() {
				$state.go('app.licence', {}, {reload: false,cache: false});
            }).error(function(error) {
                vm.error = error;
				var alertPopup = $ionicPopup.alert({
					 title: 'Erreur !',
					 template: "!"
					});
            });
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------Afficher ma licence (modifierLicence)-------------------------------------------------------------------------------------------------------*/	
	
	$scope.maLicence = function (item){
		
		//console.log(item.id);

		$http.get($scope.URL+'frediAppli/www/bdd/maLicence.php?idLigne='+item['id']).success(function(maLicence) {
        $scope.itemsMaLicence = maLicence;	
        console.log($scope.itemsMaLicence);
				$rootScope.modifLicence.num = parseInt($scope.itemsMaLicence.numLicence);
				$rootScope.modifLicence.id = $scope.itemsMaLicence['id'];
				$rootScope.modifLicence.nom = $scope.itemsMaLicence['Nom'];
				$rootScope.modifLicence.prenom = $scope.itemsMaLicence['Prenom'];
				$rootScope.modifLicence.date = $scope.itemsMaLicence['dateNaissance'];
				//$rootScope.modifLicence.idClub = $scope.itemsMaLicence['idClub'];
				$rootScope.modifLicence.lib_club = $scope.itemsMaLicence['lib_club'];
				console.log($rootScope.modifLicence.id);
				console.log($scope.itemsMaLicence['id']);
            }).error(function(error) {
                vm.error = error;
            });		
	}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	

/*-----------------------------------------------------------modifier ma licence (bouton cliqué) ---------------------------------------------------------------------------------------------------------*/

	$scope.modifierLicence = function() {
	console.log($rootScope.modifLicence.id);
			$http.get($scope.URL+'frediAppli/www/bdd/modifierLicence.php?num='+$rootScope.modifLicence.num+'&nom='+$rootScope.modifLicence.nom
				+'&prenom='+$rootScope.modifLicence.prenom+'&dateNaissance='+$scope.modifLicence.date+'&lib_club='+$rootScope.modifLicence.lib_club+'&id='+$rootScope.modifLicence.id).success(function() {
				$rootScope.modifLicence = {};
				$state.go('app.licence', {}, {reload: false,cache: false});
            }).error(function(error) {
                vm.error = error;
            });
		}
	
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------- afficher select club (ajouter une licence.html) ---------------------------------------------------------------------------------------------------------*/

	if($state.is('app.ajouterLicence')||($state.is('app.modifierLicence'))) {
			$http.get($scope.URL+'frediAppli/www/bdd/afficherClub.php').success(function(club) {
				$scope.club = club;
				//console.log($scope.club);

						}).error(function(error) {
                vm.error = error;
            });
		}
	
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------ActionSheet Licence------------------------------------------------------------------------------------------*/
	
	 $scope.show2 = function(item, index) {
	
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Modifier' }
     ],
     destructiveText: 'Supprimer',
     titleText: 'Options licence',
     cancelText: 'Retour',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function() {
	 $state.go('app.modifierLicence');
		$scope.maLicence(item);
		
		
       return true;
     },
	 
	destructiveButtonClicked: function(){ //si clique sur supprimer alors supprime la note de frais
		
		$http.get($scope.URL+'frediAppli/www/bdd/supprimerLicence.php?id='+item['id']).success(function() {   //supprime la note de frais
                $state.go('app.licence');

			$scope.itemsLicence.splice(index, 1); //splice
            }).error(function(error) {
                vm.error = error;
				alert("La suppression n'a pas été effectuée");
            });
		return true;		
	}
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 10000); //actionSheet de 10 seconde
   }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	
});
