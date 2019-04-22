Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});

/*
Vue.component('task-list', {
    template: `
    /*
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

/*
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
*/

/*
Vue.component('modal', {


    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>

            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    `,
});
*/