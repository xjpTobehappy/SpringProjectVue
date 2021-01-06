import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'*/

Vue.use(VueRouter)
/*这个文件是负责路由*/
const routes = [

/*  {
    path: '/',
    name: 'Home',
    component: '/login',
  },*/

  {
    path: '/',
    //默认访问/的时候让他重定向到 login 中
    redirect:"/login"
  },

  {
    /*
    path：表示请求路径
    name：表示名称可以不要
    */
    path: '/login',
    name: 'login',
    /*这个表示要显示的路径*/
    component: () => import( '../views/login/login.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import( '../views/first/first.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
