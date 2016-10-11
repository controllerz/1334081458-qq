angular.module('2').service('apiservice',function(environment,$http,apiServ){
      var login = function(){
    	apiServ.post('/api/account/login',{user_name:environment.username,password:environment.password}).then(
	        function(data){
	            console.log(data);
	        },
	        function(err){
	            console.log(err);
	        }
        );

      }

    return {
        'login':login
    }
});


//angular.module('demonpmbower')
//.service('accountServ',function(environment,$http,apiServ){
//  var login = function(){
//  apiServ.post('/api/account/login',{user_name:environment.username,password:environment.password}).then(
//      function(data){
//          console.log(data);
//      },
//      function(err){
//
//      }
//      )
//  }
//  return {
//      'login':login
//  }
//});

