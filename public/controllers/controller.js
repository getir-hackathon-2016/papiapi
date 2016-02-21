var app=angular.module('myApp',[]);

app.controller("AppCtrl1",function($scope,$http){
	console.log("controller received the message");

var refresh=function() {
	// body...

	$http.get("/contactList").success(function(response){
		var contactList="";
 $scope.contactList=response;
 $scope.contact="";
 
	});

}
	$scope.addContact=function() {
		console.log($scope.contact);
		$http.post("/contactList",$scope.contact).success(function(response){
			$scope.contact=response;
			refresh();
		});
		
	}
   refresh();

$scope.remove=function (id) {
	console.log(id);
	$http.delete("/contactList/" + id).success(function(response){

		refresh();
	});
};

$scope.edit=function(id){

   console.log(id);
	$http.get("/contactList"+id).success(function(response){

	});

};

	});
	