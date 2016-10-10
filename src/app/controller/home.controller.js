angular.module("2").controller("homeCtrl",function($scrope,environment,$http){
$http.post('http://10.11.19.223:8091/api/account/login',{user_name:lilie,passworld:123}).then(
	function (data){
		console.log(data);
	},
	function (err){
		console.log(err);
	}
	);
});
