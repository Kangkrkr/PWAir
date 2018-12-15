import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: LoginPage,
        },
        {
            path: '/main',
            component: MainPage,
        }
        /*
        ,
        {
            path: '/list',
            component: 'ListComponent',
            beforeEnter(to, from, next) {
                // next를 호출하지 않으면, 해당 path로 넘어가지않음.
                // next();
            }
        }
        */
    ]
});