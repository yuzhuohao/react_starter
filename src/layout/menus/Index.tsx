import React from 'react';
import { withRouter } from 'react-router-dom';
import { PageProps, MenuProps } from '@/types/common';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '@/stores/actions/menus';
import './index.less';

const { SubMenu } = Menu;

const Menus: React.FC<PageProps> = (props) => {
	const { menuState } = useSelector((store: any) => store);
	const dispatch = useDispatch();

	const { menus, activeKey } = menuState;

	const jumpTo = (menu: MenuProps) => {
		dispatch(addTab(menu));
		props.history.push(menu.path);
	};

	const renderMenu = (menu: MenuProps) => {
		console.log(menu, 'renderMenu');
		return (
			<Menu.Item key={menu.key}>
				<a onClick={() => jumpTo(menu)}>{menu.title}</a>
			</Menu.Item>
		);
	};

	const renderSubMnenu = (menu: MenuProps) => {
		console.log(menu, 'renderSub');
		const children = menu.children;
		return (
			<SubMenu key={menu.key} title={menu.title}>
				{children.map((item) => {
					return renderMenu(item);
				})}
			</SubMenu>
		);
	};
	return (
		<Menu
			selectedKeys={[activeKey]}
			theme="dark"
			mode="inline"
			className="left-menu"
		>
			{menus.map((item: MenuProps) => {
				return item.children ? renderSubMnenu(item) : renderMenu(item);
			})}
		</Menu>
	);
};

export default withRouter(Menus);
