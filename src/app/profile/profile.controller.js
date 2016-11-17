export class ProfileController{

    constructor($http){
        'ngInject';
        this.$http = $http;
        this.getProfile();
    }
    getProfile(){
        var vm = this;
        vm.user = {};
        vm.user.profilePicture =[];
        vm.user.profilePicture[0] = {};
        this.$http.get('http://localhost:5000/api/getProfile').then(function(res){
            vm.user.name = res.data.name;
            vm.user.bio = res.data.bio;
            vm.user.profilePicture[0].$ngfBlobUrl = res.data.profilePicture;
            console.log(vm.user);
        }, function(err){
            console.log(err);
        });
    }
     update(){
         var tempUser = angular.copy(this.user);
         tempUser.profilePicture = this.user.profilePicture[0].$ngfBlobUrl;
         this.$http.post('http://localhost:5000/api/updateProfile',tempUser);
    }
}
