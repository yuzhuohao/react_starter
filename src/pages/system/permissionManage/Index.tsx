import { Space, Table, Tag, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import './Index.less';

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
  }

  const columns: ColumnsType<DataType> = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  width: 150,
	},
	{
	  title: 'Age',
	  dataIndex: 'age',
	  width: 150,
	},
	{
	  title: 'Address',
	  dataIndex: 'address',
	},
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
	data.push({
	  key: i,
	  name: `Edward King ${i}`,
	  age: 32,
	  address: `London, Park Lane no. ${i}`,
	});
  }

const PermissionManage: React.FC = () => {
	return (
		<div className="permission_page">
			<Card title="权限管理">
				<Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
			</Card>
		</div>
	);
};

export default PermissionManage;
