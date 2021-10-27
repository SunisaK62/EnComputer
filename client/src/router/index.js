import Vue from 'vue'
import Router from 'vue-router'

//users
import UserIndex from '@/components/Index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

//win
import WinIndex from '@/components/Win/Index'
import WinCreate from '@/components/Win/CreateWindow'
import WinEdit from '@/components/Win/EditWindow'
import WinShow from '@/components/Win/ShowWindow'

//Program
import ProgramIndex from '@/components/Program/Index'
import ProgramCreate from '@/components/Program/CreateProgram'
import ProgramEdit from '@/components/Program/EditProgram'
import ProgramShow from '@/components/Program/ShowProgram'


//Admin
import MainAdmin from '@/components/MainAdmin'
//User
import MainUser from '@/components/MainUser'

// Authen
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

     //win
     {
      path: '/wins',
      name: 'wins',
      component: WinIndex
    },
    {
      path: '/win/create',
      name: 'wins-create',
      component: WinCreate
    },
    {
      path: '/win/edit/:winId',
      name: 'win-edit',
      component: WinEdit
    },
    {
      path: '/win/:winId',
      name: 'win',
      component: WinShow
    },

    //Program
    {
      path: '/programs',
      name: 'programs',
      component: ProgramIndex
    },
    {
      path: '/program/create',
      name: 'programs-create',
      component: ProgramCreate
    },
    {
      path: '/program/edit/:programId',
      name: 'program-edit',
      component: ProgramEdit
    },
    {
      path: '/program/:programId',
      name: 'program',
      component: ProgramShow
    },

   // authen
   {
    path: '/login',
    name: 'login',
    component: Login
  },
    //MainAdmin
    {
      path: '/MainAdmin',
      name: 'MainAdmin',
      component: MainAdmin
    },
    //MainUser
    {
      path: '/MainUser',
      name: 'MainUser',
      component: MainUser
    },
  ]
})
