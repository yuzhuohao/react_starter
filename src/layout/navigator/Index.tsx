import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button } from 'antd';
import { changeDirection, changeLanguage } from '@/stores/actions/language';
import { getMenus } from '@/stores/actions/menus';
import { useEffect } from 'react';

const { Option } = Select;

const TopNavigator: React.FC = () => {
	const { intlState } = useSelector((store: any) => store);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMenus());
	}, []);

	const { language, languageList, direction } = intlState;

	function handleChangeLanguage(value: string) {
		dispatch(changeLanguage(value));
	}

	function handleChangeDirection() {
		dispatch(changeDirection());
	}

	return (
		<div className="top_navigator" style={{ marginRight: '32px' }}>
			<Select
				size="small"
				defaultValue={language}
				onChange={handleChangeLanguage}
			>
				{languageList.map((item: { name: string; code: string }) => {
					return (
						<Option key={item.code} value={item.code}>
							{item.name}
						</Option>
					);
				})}
			</Select>
			<Button
				size="small"
				style={{ margin: '0 16px' }}
				onClick={() => {
					handleChangeDirection();
				}}
			>
				{direction}
			</Button>
		</div>
	);
};
export default TopNavigator;
