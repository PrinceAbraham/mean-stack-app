export class ProfileController{

    constructor($http){
        'ngInject';
        this.$http = $http;
    }
     update(){
         console.log(this.profile);
         this.$http.post('http://localhost:5000/api/updateProfile',this.user);
    }
}
