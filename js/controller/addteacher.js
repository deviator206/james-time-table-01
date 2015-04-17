deviatorApp.controller("addTeacherController",["$scope","$location","appBootstrap","teacherCollection",function(sp,lp,master,teacherCollection){

	sp.teacherInfo ={};
	sp.teacherList =[];
	
	sp.initializeView = function()
	{
		master.isMasterLoaded({"renderView" : sp.renderView})
	}
	
	sp.addOrEditNewTeacher = function()
	{
		teacherCollection.addSingleTeacher(sp.teacherInfo);
		$(".bs-example-modal-lg").modal('hide')
	};
	
	sp.addNewTeacherToDB = function()
	{
		sp.teacherInfo ={};
		$(".bs-example-modal-lg").modal('show')
	};
	sp.renderView = function()
	{
		
		sp.teacherList = teacherCollection.getTeacherListForView();
		console.log("rendering view");	
	}
	
	sp.editTeacherHandler = function(id)
	{
		// 
		sp.teacherInfo = teacherCollection.getSingleTeacher(id);
		$(".bs-example-modal-lg").modal('show')
		console.log(sp.teacherInfo);
	}
	
	
	sp.deleteTeacherHandler = function(id)
	{
		teacherCollection.deleteSingleTeacher(id);
		sp.teacherList = teacherCollection.getTeacherListForView();
		
		
	}



}]);


