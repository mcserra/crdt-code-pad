import React from 'react';
import 'antd/dist/antd.css';
import './homepage2.css'
import {Row} from 'antd';
import PadTable from "./PadTable";
import BaseLayout from "../BaseLayout";

class Homepage2 extends React.Component {

    render() {
        return (
            <BaseLayout>
                    <div style={{margin: '30px 0'}}>
                    </div>
                    <div className="site-layout-content">
                        <Row gutter={[16, 24]}>
                            <PadTable/>
                        </Row>
                    </div>
            </BaseLayout>
        )
    }
}

export default Homepage2;
