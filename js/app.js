
//devaitorApp namespace
var deviatorApp =  angular.module("deviator-school-app",["ngRoute"]);
deviatorApp.config(["$routeProvider",function(rP){
	rP.when("/",{
		"templateUrl":"html/loading.html",
		"controller":"loadingController"
	}).when("/addTeacher",{
		"templateUrl":"html/add_teacher.html",
		"controller":"addTeacherController"
	}).when("/mapTeacher",{
	"templateUrl":"html/map_teacher.html",
		"controller":"mapTeacherController"
		})
		.when("/generateTimetable",{
	"templateUrl":"html/generate_timetable.html",
		"controller":"generateTimeTable"
		})
		.when("/viewTimetable",{
	"templateUrl":"html/view_timetable.html",
		"controller":"viewTimeTable"
		})
	.otherwise({
		"templateUrl":"html/default.html",
		"controller":"defaultController"
	})
	

}]);






deviatorApp.service("appMenuLabel",function()
{
	this.appSection ={
		"ADD_TEACHER":"/addTeacher",
		"MAP_TEACHER":"/mapTeacher",
		"GENERATE_TT":"/generateTimetable",
		"VIEW_TT":"/viewTimetable",
		"FETCH_TEACHER":"fetch-teacher",
		"FETCH_MASTER_DATA":"fetch-master-data",
	}
	
	
	this.appServerUrl ={
	"MASTER_DATA_URL":"data/master.json"
	}
});



deviatorApp.service("requestData",["$http","appMenuLabel",function(ajax,appMenuLabel)
{

	this.getData =function(cmd,requestDataObject)
	{
		switch(cmd)
		{
			case appMenuLabel.appSection["FETCH_MASTER_DATA"] :
				ajax.get(appMenuLabel.appServerUrl["MASTER_DATA_URL"]).
									  success(function(data, status, headers, config) {
										// this callback will be called asynchronously
										// when the response is available
										console.log(data);
										requestDataObject.onSuccess(data);
									  }).
									  error(function(data, status, headers, config) {
										// called asynchronously if an error occurs
										// or server returns response with an error status.
										console.log(data);
										requestDataObject.onError(data);
									  });
			break;
		}
	}
	
  
  
	this.appSection ={
		"ADD_TEACHER":"/addTeacher",
		
	}
}]);


