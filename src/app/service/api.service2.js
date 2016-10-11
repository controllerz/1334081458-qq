angluar.module("2").service("apiServ",function($http,environment,$q){
	var handle=function(url,data,type){
		url = environment.host + url;
		if(type === 'GET'){
            $http.get(url).then(
                function(data){
                    if (data.data.status == 'SUCCESS') {
                        deferred.resolve(data.data.data);
                    }
                    else{
                        deferred.reject(data);
                    }
                },
                function(err){
                    deferred.reject(data);
                }
            );
        }
		
		if(type === 'POST'){
            $http.post(url,data).then(
                function(data){
                    if (data.data.status == 'SUCCESS') {
                        deferred.resolve(data.data.data);
                    }
                    else{
                        deferred.reject(data);
                    }
                },
                function(err){
                    deferred.reject(data);
                }

            );
        }

        return deferred.promise;
	}
	return {
        get:function(url){return handle(url,null,'GET');},
        post:function(url,data){return handle(url,data,'POST');}
    }
})


//angular.module('demonpmbower').service('apiServ',function($http,environment,$q){
//  var handle = function(url,data,type){
//      url = environment.host + url;
//
//      var deferred = $q.defer();
//
//      if(type === 'GET'){
//          $http.get(url).then(
//              function(data){
//                  if (data.data.status == 'SUCCESS') {
//                      deferred.resolve(data.data.data);
//                  }
//                  else{
//                      deferred.reject(data);
//                  }
//              },
//              function(err){
//                  deferred.reject(data);
//              }
//
//              );
//      }
//
//      if(type === 'POST'){
//          $http.post(url,data).then(
//              function(data){
//                  if (data.data.status == 'SUCCESS') {
//                      deferred.resolve(data.data.data);
//                  }
//                  else{
//                      deferred.reject(data);
//                  }
//              },
//              function(err){
//                  deferred.reject(data);
//              }
//
//              );
//      }
//
//      return deferred.promise;
//
//  }
//
//  return {
//      get:function(url){return handle(url,null,'GET');},
//      post:function(url,data){return handle(url,data,'POST');}
//  }
//});
