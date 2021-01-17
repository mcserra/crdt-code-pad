import { Button, Space, Table, Tag, Tooltip } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import CreatePadModal from './CreatePadModal';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Created On',
    dataIndex: 'created',
    key: 'created',
    render: (date) => {
      const oneDay = 24 * 60 * 60 * 1000;
      const now = new Date();
      const daysFrom = Math.round(Math.abs((now - date) / oneDay));
      return (
        <div>
          <p style={{ margin: '0px' }}>{date.toLocaleDateString()}</p>
          <p style={{ fontSize: '10px', color: 'grey' }}>Days since creation: {daysFrom}</p>
        </div>
      );
    },
  },
  {
    title: 'Language',
    key: 'tags',
    dataIndex: 'tags',
    render: (tag) => <Tag key={tag}>{tag.toUpperCase()}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <Link to={'/dev-pad/' + record.id}>
          <a>Edit</a>
        </Link>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    name: 'Pad2',
    id: '1',
    created: new Date(2019, 1, 1),
    address: 'New York No. 1 Lake Park',
    tags: 'java',
  },
  {
    name: 'Pad1',
    id: '2',
    created: new Date(2019, 1, 1),
    address: 'London No. 1 Lake Park',
    tags: 'javascript',
  },
];

class PadTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
  }

  changeModalVisibility() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <CreatePadModal visible={this.state.modalVisible} hideModal={this.changeModalVisibility} />
        <Tooltip title='Add Pad' placement='top'>
          <Button
            type='primary'
            size={'medium'}
            shape={'circle'}
            style={{ float: 'right' }}
            icon={<PlusOutlined />}
            onClick={this.changeModalVisibility}
          />
        </Tooltip>
        <Table style={{ width: '100%' }} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default PadTable;
