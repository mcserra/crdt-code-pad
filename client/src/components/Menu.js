import './App.css';
import React from "react";
import {
    PieChartOutlined
} from '@ant-design/icons';
import {Menu, Space} from "antd";

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <Menu mode="horizontal">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default MenuComponent;
