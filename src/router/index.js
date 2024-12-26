import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import UsersView from '@/views/UsersView.vue';

import {
	createRouter,
	createMemoryHistory,
	createWebHistory,
} from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/users',
		name: 'users',
		component: UsersView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
