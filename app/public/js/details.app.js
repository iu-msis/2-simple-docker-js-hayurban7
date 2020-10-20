waitingApp = new Vue({
    el: 'randomUsersID',
    data:{
        users: [{
            firstName: '',
            lastName: '',
            userID: ''
        }]

    },

    methods:{
        fetchUser(){
            fetch('api/users/')
            .then(response => response.json())
            .then(json => {
                this.users=json;
                console.log(this.users);
            });
        }
    }
})