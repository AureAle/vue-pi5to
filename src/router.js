import Vue from 'vue';
import Router from 'vue-router';
import Usuarios from './views/Usuarios.vue';
import Login from './views/Login.vue';
import Recurso from './views/Recurso.vue';
import Comentarios from './views/Comentarios.vue';
import Consultas from './views/Consultas.vue';
import verUsuarios from './views/verUsuarios.vue';
import verRecursos from './views/verRecursos.vue';
import verRepos from './views/verRepos.vue';
import Profile from './views/Profile.vue';
import Buscar from './views/Buscar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path: '/usuarios/:cuenta',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/recursos',
      name: 'recursos',
      component: Recurso,
    },
    {
      path: '/comentarios',
      name: 'comentarios',
      component: Comentarios,
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: Consultas,
    },
    {
      path: '/verUsuarios',
      name: 'verUsuarios',
      component: verUsuarios,
    },
    {
      path: '/verRecursos',
      name: 'verRecursos',
      component: verRecursos,
    },
    {
      path: '/verRepos',
      name: 'verRepos',
      component: verRepos,
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: Buscar,
    },
  ],
});
