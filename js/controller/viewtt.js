
// main app controller
deviatorApp.controller("viewTimeTable",function($scope,$location,appMenuLabel,timetableCollection)
{
	$scope.initScreen = function()
	{
		$scope.slotList=[];
		$scope.daysList=[];
		$scope.classList =[];
		$scope.tt = [];
		timetableCollection.loadMetaData({"renderView" : $scope.renderView})
		
	}
	
	$scope.printPage = function()
	{
		window.print();
	}
	
	$scope.renderView = function(result)
	{
		
		if(!result)
		{
		 console.log(" Error In the resp");
		 return false;
		}
		 
		$scope.classList = timetableCollection.getOnlyClassLabels();
		$scope.daysList = timetableCollection.getTTMetaDays();
		$scope.slotList = timetableCollection.getTTMetaSlots();
		
		console.log("rendering view");	
	}
	
	$scope.showTimeTable = function()
	{
		console.log("fetch new TT"+$scope.sampleModel.class_label +" || "+$scope.sampleModel.class_id);
		timetableCollection.fetchClassTT($scope.sampleModel.class_id,{"dataFetched":$scope.fullTTFetched})
	}
	
	$scope.fullTTFetched = function()
	{
		$scope.tt = timetableCollection.getTimeTable()
	}
	
	$scope.onNavigationClicked = function(navId)
	{
		switch(navId)
		{
			case "view":
				$location.path(appMenuLabel.appSection["VIEW_TT"]);
			 break;
			case "generate":
				$location.path(appMenuLabel.appSection["GENERATE_TT"]);
			break;
		}
	}
	
});