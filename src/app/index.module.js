(function() {
  'use strict';

  angular.module('2', ['ngResource', 'ui.router', 'toastr']);
		var arr=[1,2,3,4,5,5,6];
//		var arr={"a":1,"b":3,"c":4,"d":5}
//		_.each(arr,function(ele){
//			console.log(ele);

//		var res = _.filter(arr,function(ele){
//			return ele % 2 == 0 ;
//		})
//		console.log(res)
		var nn=_.partition(arr,function(ele){
			return  ele%2==0?true:false;   
		})
		console.log(nn);
})();
