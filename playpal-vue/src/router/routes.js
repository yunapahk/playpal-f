// routes.js
import Dashboard from '../components/Dashboard.vue';
import Auth from '../components/Auth.vue';
import DogsView from '../components/DogsView.vue';
import AddDogsForm from '../components/AddDogsForm.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard', 
        component: Dashboard
    },
    {
        path: '/create',
        component: AddDogsForm
    },
    {
        path: '/login',
        name: 'login',
        component: Auth
    },
    {
        path: '/signup',
        name: 'signup',
        component: Auth
    },
    {
        path: '/dogs',
        component: DogsView
    }
   
];

export default routes;
