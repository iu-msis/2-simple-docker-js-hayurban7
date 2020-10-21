waitingApp = new Vue({
    el: '#Comments',
    data:{
        users: [{
            Id: '',
            commentText: '',
        }],
        newComment: {
            Id: '',
            commentText: '',
        }

    },

    methods:{
        fetchUser(){
            fetch('api/comments/index.php')
            .then(response => response.json())
            .then(json => {
                this.users=json;
                console.log(this.users);
            });
        },
        createComment(){
            fetch('api/comments/create.php', {
                method:'POST',
                body:JSON.stringify(this.newComment),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                this.users.push(json[0]);
                this.newComment = this.newCommentData();

            });
            console.log("Creating (POSTing)...!");
            console.log(this.newComment);
        },
            newCommentData(){
                return {
                    Id: '',
                    commentText:''
                }
            }
        },
    created() {
        this.fetchUser();
    }
    }
);