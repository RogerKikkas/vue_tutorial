export default {
    template: `
        <div><h1>{{ message | capitalize }}</h1></div>
    `,

    props: ['message'],

    data() {
        return {
            message: 'Hello World',
        }
    },

    filters: {
        capitalize(message) {
            return message.toUpperCase();
        }
    }
};