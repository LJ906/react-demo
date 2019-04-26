import React from 'react';
import { Table, Divider, Button,Tag } from 'antd';
import { dataSource} from "./data";


export default class BaseTable extends React.Component {

    render () {
        // columns信息          
         const columns = [{
            title: '姓名',
            dataIndex: 'name', // 绑定的字段
            key: 'name', // 唯一标识相当于id
            render: value=>  <a href="javascript:;">{value}</a>,
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: '标签',
            dataIndex: 'tags',
            key: 'tags',
            render: tags =>  (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                        color = 'volcano';
                        }
                        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                    })}
                    </span>
            )
          },
          {
            title: '操作',
            dataIndex: 'other',
            key: 'other',
            render: () =>  (
                 <div>
                     <Button type="primary" ghost>编辑</Button>  
                     <Button type="danger">删除</Button>
                 </div>
            )
          }

        ];

        // 批量选择
        const rowSelection =  {
            // 操作多选时触发， 
            /**
             * @selectedRowKeys string  ,选中项的keys 1,2,3
             * @selectedRows Object,  选中项 对象全部
             */
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
            }),
        }

        return (
            <div className="table-wrp">
                <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} ></Table>
            </div>
        )
    }
}