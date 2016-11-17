export class MainController {
  constructor ($http, $auth) {
    'ngInject';
      this.$auth = $auth;
      this.$http = $http;
      this.getMessages();
  }
    getMessages(){
        var vm = this;
        if(this.$auth.isAuthenticated()){
         this.$http.get('http://localhost:5000/api/message').then(function(res){
             vm.messages = res.data;
         });
        }
    }
    postMessage(){
        this.$http.post('http://localhost:5000/api/message',{msg: this.message});
    }
}
