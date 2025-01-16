import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import CommentPage from "../views/CommentPage.vue";
import SearchPage from "../views/SearchPage.vue";
import ProfilePage from '../views/ProfilePage.vue';
import ProfileEditPage from '../views/ProfileEditPage.vue';
import { getJwtToken } from "../apis/auth";

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/comment',
    name: 'comment',
    component: CommentPage
  },
  {
    path: '/search-result',
    name: 'search-result',
    component: SearchPage
  }, 
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/profile/edit',
    name: 'profile-edit',
    component: ProfileEditPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes //為 routes:routes簡寫
});

router.beforeEach((to) => {
  if (to.name !== "login" && !getJwtToken()) {
    return { name: "login" };
  }
  if (to.name === "login" && getJwtToken()) {
    return { name: "home" };
  }
});

export default router //預設導出
// export {router} //命名導出