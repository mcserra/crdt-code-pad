import React, {useRef} from 'react';
import Editor, {ControlledEditor} from "@monaco-editor/react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {defaultLang, examples} from "./codeExamples";

class CodePad extends React.Component {

    valueGetter = {};

    constructor(props) {
        super(props);
        this.state = {
            lang: defaultLang,
            code: examples[defaultLang]
        };
        this.changeLang = this.changeLang.bind(this);
        this.handleEditorDidMount = this.handleEditorDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeLang(selectedLang) {
        console.log(this.state.code)
        this.setState({lang: selectedLang, code: examples[selectedLang]});
    }

    handleEditorDidMount(_valueGetter) {
        this.valueGetter.current = _valueGetter;
    }

    handleChange(e, val) {
        this.props.handleChange(val)
    }

    render() {
        return (
            <div>
                <div>
                    <Dropdown onSelect={this.changeLang}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.lang}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="java">java</Dropdown.Item>
                            <Dropdown.Item eventKey="javascript">javascript</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <ControlledEditor
                        height="90vh"
                        theme="vs-dark"
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