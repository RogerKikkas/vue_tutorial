Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                
                <button type="button" class="close" @click="isVisible = false">X</button>
            </div>

            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {

    }
});

/*
Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the mall', complete: false },
                { task: 'Go to the farm', complete: true },
                { task: 'Go to work', complete: false },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});
*/
