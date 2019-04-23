

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },

    created() {
        Event.listen('applied', () => alert('Handling it'))
    }
});

// TASKS

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

// MESSAGE

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

// MODAL

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

// TABS

/*
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
*/

// COUPON

/*
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
   template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
   `,

    methods: {
       onCouponApplied() {
           Event.fire('applied')
       }
    }
});
*/

// MODAL

/*
Vue.component('modal', {
    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>

          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                <slot name="header"></slot>
              </p>
              <button class="delete" aria-label="close"></button>
            </header>

            <section class="modal-card-body">
                <slot>
                    Default content here.
                </slot>
            </section>

            <footer class="modal-card-foot">
              <slot name="footer">
                <a class="button is-primary">Okay</a>
              </slot>
            </footer>
          </div>
        </div>
    `
});
*/

// SINGLE-USE COPMPONENT AND INLINE TEMPLATE

/*
Vue.component('progress-view', {
   data() {
       return { completionRate: 50 }
   }
});
*/