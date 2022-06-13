import Vue from 'vue'
import VueRouter from 'vue-router'
import BackendLoginView from '@/views/BackendLoginView.vue'
import ApplicationComp from '@/components/layouts/ApplicationComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/backend/login',
    name: 'BackendLogin',
    component: BackendLoginView,
  },
  {
    path: "/backend",
    name: "Backend",
    component: ApplicationComp,
    // 多個，陣列
    // children: [
    //   {
        // path: "products",
        // component: () => import("../views/Products.vue"),
    //   },
    // ],
  },
]

const router = new VueRouter({
  routes
})

export default router
