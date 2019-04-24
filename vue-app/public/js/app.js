class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors.errors) {
            return this.errors.errors[field];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if(this.errors.errors.field) {
            delete this.errors.errors.field;
        }
    }
}

const app = new Vue({
    el: '#app',

    data: {
        name: '',
        description: '',
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data));
        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = '';
        }
    },
});

/*
new Vue({
    el: '#app',

    data: {
       skills: []
    },

    mounted() {
        // Make an ajax request to our server - /skills

        axios.get('/skills').then(response => this.skills = response.data);
    }
});
*/