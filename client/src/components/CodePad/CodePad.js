import React from "react";
import AceEditor from "react-ace";
import { Avatar, Space, Select } from "antd";
import {
    defaultLang,
    defaultTheme,
    languages,
    examples,
    themes
} from "../../config/codeExamples";
import "antd/dist/antd.css";
import "./CodePad.css";

import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const { Option } = Select;

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

class CodePad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: examples[defaultLang],
            placeholder: "defaultValue",
            theme: defaultTheme,
            language: defaultLang,
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: true,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: false,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true
        };
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFontSize = this.handleFontSize.bind(this);
    }

    handleChange(e, newValue) {
        this.props.handleChange(newValue);
    }

    handleThemeChange(theme) {
        this.setState({ theme: theme });
    }

    handleLanguageChange(language) {
        this.props.handleLanguageChange(language);
    }
    handleFontSize(fontSize) {
        this.setState({
            fontSize: parseInt(fontSize, 10)
        });
    }

    render() {
        return (
            <div>
                <div className="pad-header">
                    <Space size={"large"}>
                        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                        <Select
                            defaultValue={defaultLang}
                            onChange={this.handleLanguageChange}
                            style={{ width: 120 }}
                        >
                            {languages.map(lang => (
                                <Option key={lang} value={lang}>
                                    {lang}
                                </Option>
                            ))}
                        </Select>

                        <Select
                            defaultValue={defaultTheme}
                            onChange={this.handleThemeChange}
                            style={{ width: 120 }}
                        >
                            {themes.map(theme => (
                                <Option key={theme} value={theme}>
                                    {theme}
                                </Option>
                            ))}
                        </Select>
                        <Select
                            defaultValue={14}
                            onChange={this.handleFontSize}
                            style={{ width: 120 }}
                        >
                            {[14, 16, 18, 20, 24, 28, 32, 40].map(font => (
                                <Option key={font} value={font}>
                                    {font}
                                </Option>
                            ))}
                        </Select>
                    </Space>
                </div>
                <div className="pad-container">
                    <h2>Editor</h2>
                    <AceEditor
                        width="100hv"
                        height="90vh"
                        mode={this.state.language}
                        theme={this.state.theme}
                        name="editor"
                        onChange={this.handleCodeChange}
                        value={this.state.code}
                        fontSize={this.state.fontSize}
                        showPrintMargin={this.state.showPrintMargin}
                        showGutter={this.state.showGutter}
                        highlightActiveLine={this.state.highlightActiveLine}
                        setOptions={{
                            useWorker: false,
                            enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                            enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                            enableSnippets: this.state.enableSnippets,
                            showLineNumbers: this.state.showLineNumbers,
                            tabSize: 2
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default CodePad;
