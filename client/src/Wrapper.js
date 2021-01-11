import React from 'react';
import CodePad from "./CodePad.js";
import {io} from 'socket.io-client'

class Wrapper extends React.Component {

    //ws = new WebSocket('ws://localhost:8999')
    ws = io('ws://127.0.0.1:8999');
    room = "1";

    constructor(props) {
        super(props);
        this.state = {
            code: '// your code here'
        };
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    componentDidMount() {
        this.ws.emit("join", {room: this.room, message: this.state.code})
        this.ws.on('code-update', msg => {
            console.log(msg)
            this.setState({code: msg})
        });
    }

    handleCodeChange(code) {
        this.setState({code: code});
        this.ws.emit('update', {room: this.room, message: this.state.code});
    }

    render() {
        return (
            <div>
                <div>
                    <CodePad code={this.state.code} handleChange={(c) => this.handleCodeChange(c)}></CodePad>
                </div>
            </div>
        );
    }
}

export default Wrapper;