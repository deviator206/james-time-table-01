//deviatorApp


deviatorApp.service("classCollection",function(){
	var classCollection = [];
	this.setClassCollection = function(arrT){
		classCollection = arrT;
	}
	
	
	
});

//class and subject
deviatorApp.service("csMappedCollection",function($http){
	var classCollection = [];
	var onlyClassList = [];
	var csDisplay = [];
	this.getClassList = function()
	{
		return onlyClassList;
	}
	this.fetchFromDB = function(controllerInstance)
	{
		if(classCollection.length <= 0)
		{
		 // fetch from server
		 $http.get('data/cs_mapped.json').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				classCollection = data.csmap;
				onlyClassList =  data.onlyClass;
				csDisplay = data.cs_view;
				controllerInstance.responseReceived(true);
				
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				controllerInstance.responseReceived(false);
			  });	
		 
		 
		}
		else
		{
			// use the same 
			controllerInstance.responseReceived(true);
		}
		
	}
	
	this.getCSMappedData = function()
	{
		return  classCollection;
	}
	this.csDisplayData = function()
	{
		return csDisplay;
	}
	this.deleteMapping = function(mapId)
	{
		var i =0;
		var bReturn = false;
		for(i=0;i<csDisplay.length;i++)
		{
			if(Number(csDisplay[i]["map_id"]) === Number(mapId))
			{
				bReturn = true;
				csDisplay.splice(i,1);
				break;
			}
		}
		
		return bReturn;
	}
	
	this.addNewMappingToDB = function(obj,controllerInstance)
	{
			$http.get('data/cs_mapped_added_new.json').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				csDisplay.push(data);
				controllerInstance.responseReceived(true);
				
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				controllerInstance.responseReceived(false);
			  });	
	}
	
	
	
});

deviatorApp.service("timetableCollection",function($http){
	var ttCollection = {};
	var onlyClasses =[];
	var ttMetaData = {};
	
	this.loadMetaData = function(controllerScope)
	{
		if(Object.keys(ttMetaData).length > 0)
		{ //already data exist
			controllerScope.renderView(true);
		}
		else
		{
			//fetch fresh
			$http.get('data/tt_meta_data.json').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
					onlyClasses = data.onlyClass;
					ttMetaData = data.onlyMetaData;
					controllerScope.renderView(true);
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
					controllerScope.renderView(false);
			  });
			
		}
		
	};
	
	this.fetchClassTT = function(id,controllerScope)
	{
		$http.get('data/class_tt.json?id='+id).
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
					ttCollection = data.readOnlyTimeTable;
					controllerScope.dataFetched(true);
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
					controllerScope.dataFetched(false);
			  });
	}
	
	
	
	this.setTTCollection = function(arrT,onlyclass,onlyMetaData){
		
		ttCollection = arrT;
		onlyClasses = onlyclass;
		ttMetaData = onlyMetaData;
		
	};
	this.getTimeTable= function()
	{
		return ttCollection;
	};
	this.getTTMetaDays = function()
	{
		return ttMetaData.days
	};
	
	this.getTTMetaSlots = function()
	{
		return ttMetaData.slots
	};
	this.getOnlyClassLabels = function()
	{
		return onlyClasses;
	}
	
	
});


deviatorApp.service("teacherCollection",function($http){
	var teacherList = [];
	
	this.setTeacherList = function(arrT)
	{
		teacherList = arrT;
	};
	this.addNewTeacherToDB = function(obj,instance)
	{
		//$http.post('data/teacher_list.json', obj).
		$http.get('data/new_teacher_added.json').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				teacherList.push(data);
				instance.responseReceived(true);
				
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				instance.responseReceived(false);
			  });
	}
	this.fetchTeacherList = function()
	{
		return teacherList;
	};
	
	this.getTeacherListForView = function(){
		return teacherList;
			
	};
	this.updateSingleTeacher = function(obj)
	{
			var obj = false;
		for(var i = 0;i<teacherList.length;i++)
		{
			if(teacherList[i].id === id)
			{
				obj = true;
				teacherList[i]["first_name"] = obj["first_name"]
				teacherList[i]["last_name"]	= obj["last_name"]		
			 break;
			}
		}
		
		return obj;
	
	};
	
	this.getSingleTeacher = function(id)
	{
		var obj = {};
		for(var i = 0;i<teacherList.length;i++)
		{
			if(teacherList[i].id === id)
			{
			 obj = teacherList[i];	
			 break;
			}
		}
		return obj;
	};
	
	this.deleteSingleTeacher = function(id)
	{
		var obj = false;
		for(var i = 0;i<teacherList.length;i++)
		{
			if(teacherList[i].id === id)
			{
				 obj = true;
				 teacherList.splice(i,1);
				 break;
			}
		}
		return obj;
	};
	
	this.fetchTeacherFromDB = function(instance)
	{
		if(teacherList.length > 0 )
		{
			instance.responseReceived(true);
		}
		else
		{
			$http.get('data/teacher_list.json').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				teacherList = data.teachers;
				instance.responseReceived(true);
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				instance.responseReceived(false);
			  });
		}
			
	}	
	this.addNewTecherFromView = function(info)
	{
	
	};
	
	this.deleteTeacherFromView = function(info)
	{
	
	};

});

deviatorApp.service("masterAppData",function(classCollection,teacherCollection,appBootstrap,timetableCollection){
	var appMaster ={};
	
	this.setMaster= function(data)
	{
		teacherCollection.setTeacherList(data.teachers);
		classCollection.setClassCollection(data.classAndSubject)
		timetableCollection.setTTCollection(data.readOnlyTimeTable,data.onlyClass,data.onlyMetaData)
		appBootstrap.setMasterLoaded(true);
	};

});



deviatorApp.service("appBootstrap",function(classCollection,teacherCollection,$location)
{
	var  masterDataLoaded = false;
	this.setMasterLoaded = function(val)
	{
		masterDataLoaded = val;
	}
	
	this.loadBaseData = function(controllerInstance){
	
		
	}
	this.isMasterLoaded = function( controllerInstance )
	{
	
		
		if(masterDataLoaded)
		{
			controllerInstance.renderView();
		}
		else
		{
			$location.path("/")	
		}
	}
	
});


