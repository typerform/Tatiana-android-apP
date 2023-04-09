
import Vue from "vue";
import vuetified from "./plugins/vuetify";
import App from './App.vue';

new Vue({
    render: h => h(App),
    vuetify: vuetified
}).$mount("#app");