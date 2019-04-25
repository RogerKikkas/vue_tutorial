Vue.component('coupon', {
    props: ['code'],

    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,

    data() {
        return {
            invalids: ['ALLFREE', 'SOMETHINGELSE']
        }
    },

    methods: {
        updateCode(code) {

            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid');

                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE'
    }
});



// GLOBAL STORE

/*
let store = {
    user: {
        name: 'John Doe'
    }
};

new Vue({
    el: '#one',

    data: {
        foo: 'bar',
        shared: store
    }
});

new Vue({
    el: '#two',

    data: {
        foo: 'other',
        shared: store
    }
});
*/


/*
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

class Form {
    constructor(data) {

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    reset() {

    }

    submit() {

    }
}

const app = new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch(error => this.form.errors.record(error.response.data));
        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = '';
        }
    },
});
*/

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