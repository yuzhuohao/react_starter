import Index from '@/layout/Index';
import Dashboard from '@/pages/dashboard/Index';
import UserManage from '@/pages/system/userManage';
import PermissionManage from '@/pages/system/permissionManage';

import { RouteConfig } from '@/types/common';

export const routes: RouteConfig[] = [
	{
		path: '/',
		component: Index,
		children: [
			{
				path: '/dashboard',
				component: Dashboard,
			},
			{
				path: '/userManage',
				component: UserManage,
			},
			{
				path: '/permissionManage',
				component: PermissionManage,
			},
		],
	},
];
