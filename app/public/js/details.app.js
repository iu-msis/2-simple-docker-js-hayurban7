waitingApp = new Vue({
    el: 'Comments',
    data:{
        users: [{
            Id: '',
            commentText: '',
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