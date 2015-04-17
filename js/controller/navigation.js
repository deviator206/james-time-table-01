
// main app controller
deviatorApp.controller("navigationController",function($scope,$location,appMenuLabel)
{
	$scope.selectedIndex = 1;
	$scope.onNavigationClicked = function(navId)
	{
		switch(navId)
		{
			case "view":
				$scope.selectedIndex = 1;
				$location.path(appMenuLabel.appSection["VIEW_TT"]);
			 break;
			case "generate":
				$scope.selectedIndex = 2;
				$location.path(appMenuLabel.appSection["GENERATE_TT"]);
			break;
		}
	}
	
});