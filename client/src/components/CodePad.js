import React, {useRef} from 'react';
import Editor, {ControlledEditor} from "@monaco-editor/react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {defaultLang, examples} from "../config/codeExamples";
import {Select, Space, Avatar} from "antd";
import 'antd/dist/antd.css';
import './CodePad.css'

const {Option} = Select;

class CodePad extends React.Component {

    valueGetter = {};

    constructor(props) {
        super(props);
        this.state = {
            lang: defaultLang,
            code: examples[defaultLang],
            theme: 'vs-dark'
        };
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleEditorDidMount = this.handleEditorDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    handleLanguageChange(selectedLang) {
        this.props.handleLanguageChange(selectedLang)
    }

    handleEditorDidMount(_valueGetter) {
        this.valueGetter.current = _valueGetter;
    }

    handleChange(e, val) {
        this.props.handleChange(val)
    }

    handleThemeChange(theme) {
        this.setState({theme: theme})
    }

    render() {
        return (
            <div>
                <div className="pad-header">
                    <Space size={"large"}>
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Select defaultValue="java" onChange={this.handleLanguageChange} style={{width: 120}}>
                            <Option value="java">java</Option>
                            <Option value="javascript">javascript</Option>
                        </Select>
                        <Select defaultValue="vs-dark" onChange={this.handleThemeChange} style={{width: 120}}>
                            <Option value="vs-dark">vs-dark</Option>
                            <Option value="hc_black">hc_black</Option>
                            <Option value="vs">vs</Option>
                        </Select>
                    </Space>
                </div>
                <div className="pad-container">
                    <ControlledEditor
                        height="90vh"
                        theme={this.state.theme}
                        onChange={this.handleChange}
                        language={this.state.lang}
                        value={this.props.code}
                        editorDidMount={this.handleEditorDidMount}
                    />
                </div>
            </div>
        );
    }
}

export default CodePad;
