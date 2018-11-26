import Vue from 'vue';
import Router from 'vue-router';
import { userInfo } from 'os';
import Home from './views/Home.vue';
import JavaApp from './views/JavaApp.vue';
import Usuarios from './views/Usuarios.vue';
import Login from './views/Login.vue';
import agregarRecurso from './views/agregarRecurso.vue';
import Comentarios from './views/Comentarios.vue';
import Consultas from './views/Consultas.vue';
import verUsuarios from './views/verUsuarios.vue';
import verRecursos from './views/verRecursos.vue';
import verRepos from './views/verRepos.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/javaApp',
      name: 'javaApp',
      component: JavaApp,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path:'/login',
      name:'login',
      component: Login,
    },
    {
      path:'/recursos',
      name:'recursos',
      component: agregarRecurso,
    },
    {
      path:'/comentarios',
      name:'comentarios',
      component: Comentarios,
    },
    {
      path:'/consultas',
      name:'consultas',
      component: Consultas,
    },
    {
      path:'/verUsuarios',
      name:'verUsuarios',
      component: verUsuarios,
    },
    {
      path:'/verRecursos',
      name:'verRecursos',
      component: verRecursos,
    },
    {
      path:'/verRepos',
      name:'verRepos',
      component: verRepos,
    }
  ],
});
