import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(VueRouter);
//保存一份VueRouter原型对象的push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }

}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }

}
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }

        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            name: 'search',
            //  path: '/search/:keyword?',
            path:"/search/:keyword?",
            component: Search,
            meta: {
                show: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        //重定向，定位到首页 
        {
            path: '/',
            redirect: '/home'
        }
    ]
})