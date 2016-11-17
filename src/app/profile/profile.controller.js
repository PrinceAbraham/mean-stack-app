export class ProfileController{

    constructor($http){
        'ngInject';
        this.$http = $http;
        this.getProfile();
    }
    getProfile(){
        var vm = this;
        vm.user = {};
        this.$http.get('http://localhost:5000/api/getProfile').then(function(res){
            vm.user.name = res.data.name;
            vm.user.bio = res.data.bio;
            console.log(res);
        }, function(err){
            console.log(err);
        });
    }
     update(){
         this.$http.post('http://localhost:5000/api/updateProfile',this.user);
    }
}
