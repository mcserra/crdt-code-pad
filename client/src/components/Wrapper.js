import React from 'react';
import CodePad from "./CodePad.js";
import {io} from 'socket.io-client'
import {examples} from "../config/codeExamples";
import BaseLayout from "./BaseLayout";


class Wrapper extends React.Component {

    ws = io('ws://127.0.0.1:8999');

    constructor(props) {
        super(props);
        this.state = {
            code: '// your code here',
            room: props.match.params.id
        };
        console.log('got', props.match.params.id);
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    componentDidMount() {
        this.ws.emit("join", {room: this.state.room, message: this.state.code})
        this.ws.on('code-update', msg => {
            console.log(msg)
            this.setState({code: msg})
        });
    }

    handleCodeChange(code) {
        this.setState({code: code});
        this.ws.emit('update', {room: this.state.room, message: this.state.code});
    }

    handleLanguageChange(lang) {
        this.setState({code: examples[lang]});
    }

    render() {
        return (
            <div>
                <BaseLayout>
                    <CodePad handleLanguageChange={l => this.handleLanguageChange(l)} code={this.state.code} handleChange={(c) => this.handleCodeChange(c)}/>
                </BaseLayout>
            </div>
        );
    }
}

export default Wrapper;
