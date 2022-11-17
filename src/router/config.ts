import Index from '@/layout/Index';
import Dashboard from '@/pages/dashboard/Index';
import UserManage from '@/pages/system/userManage/Index';
import PermissionManage from '@/pages/system/permissionManage/Index';

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
				path: '/userMange',
				component: UserManage,
			},
			{
				path: '/permissionManage',
				component: PermissionManage,
			},
		],
	},
];
