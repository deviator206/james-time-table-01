
//loading Module
deviatorApp.controller("loadingController",["$scope" ,"$location","appMenuLabel","requestData","masterAppData",function(sp,lp,menuObject,reqObject,masterAppData)
{
	sp.init = function()
	{
		reqObject.getData(menuObject.appSection["FETCH_MASTER_DATA"],{onSuccess:sp.onSuccessHandler,onError:sp.onBootStrapErrorHandler});
	};
	
	
	sp.onBootStrapErrorHandler= function(data)
	{
		console.log(" onBootStrapErrorHandler " + data)
	}
	
	sp.onSuccessHandler= function(data)
	{
		masterAppData.setMaster(data);
		lp.path(menuObject.appSection["VIEW_TT"]);
		
	}
	
	
	
}]);

