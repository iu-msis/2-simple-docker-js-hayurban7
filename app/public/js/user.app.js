var app = new Vue({
    el: '#userProfile',
    data: {
        userName: '',
        userEmail: '',
        userImgLarge: '',
        userImgThumb: '',
        userAge: '',
        userDate: '',
        userLocation: '',
    },
    created() {
        this.fetchUser();
    },
    methods: {
        fetchUser: function() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                var userData = data.results[0];
                console.log(userData);
                this.userName = userData.name.first + " " + userData.name.last;
                this.userEmail = userData.email;
                this.userImgLarge = userData.picture.large;
                this.userImgThumb = userData.picture.thumbnail;
                this.userAge = userData.dob.age;
                this.userDate = userData.dob.date;
                this.userLocation = userData.location.country;
            }
            );
        },
        formatDate(d) {return moment(d).format("MM-DD-YYYY");}
    }
})