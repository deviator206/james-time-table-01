
// main app controller
deviatorApp.controller("generateTimeTable",function($scope,$location,teacherCollection)
{
		$scope.currentStep = 0;
		$scope.teacherModalInfo ={};
		$scope.teacherInfo ={};
		
		$scope.setUp = function()
		{
			$scope.currentStep = 0;
			teacherCollection.fetchTeacherFromDB({"responseReceived":$scope.teacherListFetched})
			
		}
		$scope.teacherListFetched = function()
		{
			$scope.currentStep = 1;
			$scope.teacherList = teacherCollection.getTeacherListForView();
		}
	/*
	 STEP 1 : Adding Teacher
	*/

		$scope.newTeacherAdded = function( resp)
		{
			if(!resp)
			{
				console.log("ERROR!")
			}
			
		}	
	$scope.addOrEditNewTeacher = function()
	{
		if(Object.keys($scope.teacherInfo).length == 0)
		{
			// New addition
			teacherCollection.addNewTeacherToDB($scope.teacherModalInfo,{"responseReceived":$scope.newTeacherAdded});
		}
		else
		{
			// Edit
			teacherCollection.updateSingleTeacher($scope.teacherModalInfo);
		}
		
		$(".bs-example-modal-lg").modal('hide')
	};
	
	$scope.editTeacherHandler = function(id)
	{
		$scope.teacherInfo = teacherCollection.getSingleTeacher(id);
		$scope.teacherModalInfo = teacherCollection.getSingleTeacher(id);
		$(".bs-example-modal-lg").modal('show')
		console.log($scope.teacherInfo);
	}
	
	$scope.addNewTeacherToDB = function()
	{
		$scope.teacherInfo ={};
		$scope.teacherModalInfo = {};
		$(".bs-example-modal-lg").modal('show')
	};
	
	$scope.deleteTeacherHandler = function(id)
	{
		teacherCollection.deleteSingleTeacher(id);
		$scope.teacherList = teacherCollection.getTeacherListForView();
		
		
	}
	/*
	 STEP 1 : Adding Teacher  END###########################################
	*/
		
		$scope.moveToNextStep = function()
		{
			if($scope.currentStep === 0)
			{
				return false;
			}
			if($scope.currentStep < 4)
			$scope.currentStep++
			
			
		}
		$scope.moveToPreviousStep = function()
		{
			if($scope.currentStep === 0)
			{
				return false;
			}
			if($scope.currentStep > 1)
			$scope.currentStep--
		}
	
});



//mappingTeacherAndStudent
deviatorApp.controller("mappingTeacherAndStudent",function($scope,csMappedCollection,teacherCollection)
{
	// 
	$scope.csCollection ={};
	$scope.class_list =[];
	$scope.csDisplayList = [];
	$scope.setUpMapping = function()
	{
		$scope.serverMessage = 1;
		$scope.displayMessage = "Fetching Data from Server...";
		
		csMappedCollection.fetchFromDB({"responseReceived":$scope.classSubjectMappingRcvd})
	}
	
	$scope.classSubjectMappingRcvd = function(result)
	{
		if(!result)
		 {
			console.log("ERRpr from class subject Mapping API")
			return false;
		 }
		 $scope.displayMessage = "";
		 $scope.serverMessage = 2;
		 $scope.csCollection = csMappedCollection.getCSMappedData();
		 $scope.csDisplayList = csMappedCollection.csDisplayData();
	}
	
	$scope.deleteMapping = function(mapId)
	{
		var bReturn = csMappedCollection.deleteMapping(mapId);
		if(!bReturn)
		{
		 console.log(" Error in DEleting the mapping");
		 return false;
		}
		
		
	}
	$scope.openMappingModal = function()
	{
		
		$scope.subjectList = [];	
		$scope.teacherList =[];
		$scope.dropdownClass ={};
		$scope.class_list = csMappedCollection.getClassList();
		if($scope.dropdownSubject !== undefined)
		{
			$scope.dropdownSubject.count = 0;
			$scope.dropdownSubject.continous = 2;
		}
		
		$(".bs-example-modal-relation").modal('show')
	}
	
	$scope.subjectList = [];	
	$scope.teacherList=[];
	
	$scope.dropdownClassChanged = function()
	{
		$scope.subjectList = $scope.dropdownClass.subjects
		
		$scope.teacherList=$scope.dropdownClass.teachers;
	}
	
	
	$scope.saveMapping = function()
	{
		var obj ={
			"class_id":$scope.dropdownClass.class_id,
			"class_label":$scope.dropdownClass.class_label,
			"subject_id":$scope.dropdownSubject.subject_id,
			"subject_label":$scope.dropdownSubject.subject_label,
			"teacher_id":$scope.dropdownTeacher.teacher_id,
			"teacher_name":$scope.dropdownTeacher.teacher_name,
			"count":$scope.dropdownSubject.count,
			"continous":$scope.dropdownSubject.continous
		}
		
		csMappedCollection.addNewMappingToDB(obj,{"responseReceived":$scope.mappingSuccessFul})
	}
	
	$scope.mappingSuccessFul = function()
	{
		$(".bs-example-modal-relation").modal('hide')
	}
});