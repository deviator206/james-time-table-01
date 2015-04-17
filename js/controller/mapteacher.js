
deviatorApp.controller("mapTeacherController",["$scope","$location","appBootstrap","teacherCollection",function(sp,lp,master,teacherCollection){
	sp.initializeView = function()
	{
		
		master.isMasterLoaded({"renderView" : sp.renderView})
	}
	
	sp.renderView = function()
	{
		
		//sp.teacherList = teacherCollection.getTeacherListForView();
		console.log("rendering view");	
	}
	



}]);
