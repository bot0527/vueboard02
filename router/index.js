import Vue from 'vue'
import Router from 'vue-router'
import navi from '@/components/navi'
import Board from '@/components/Board'
import BoardDetail from "@/components/BoardDetail"
import BoardCreate from "@/components/BoardCreate"
import Login from '@/components/Login'
import Gallery from '@/components/Gallery'
import BoardList from '@/components/BoardList'
import carddeck from '@/components/carddeck'
import listw from '@/components/listw'
import listm from '@/components/listm'
import listh from '@/components/listh'

Vue.use(Router)

export default new Router({
  routes: [
    {
   
      path: '/Board',
      name: 'Board',
      component: Board,
    },
    {
      path: "/detail/:contentId",
      name: "BoardDetail",
      component: BoardDetail
    },
    {
      path: "/create/:contentId?",
      name: "BoardCreate",
      component: BoardCreate
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/boardlist",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/",
      name: "carddeck",
      component: carddeck
    },
    {
      path: "/listw",
      name: "listw",
      component: listw
    },
    {
      path: "/listm",
      name: "listm",
      component: listm
    },
    {
      path: "/listh",
      name: "listh",
      component: listh
    }
  ]
})
