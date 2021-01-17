import React from 'react';
import CodePad from './CodePad.js';
import { io } from 'socket.io-client';
import { examples } from './CodeExamples';
import BaseLayout from '../BaseLayout';

class CodePadConnector extends React.Component {
  ws = io('ws://127.0.0.1:8999');

  constructor(props) {
    super(props);
    this.state = {
      code: '// your code here',
      room: props.match.params.id,
    };
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  componentDidMount() {
    this.ws.emit('join', { room: this.state.room, message: this.state.code });
    this.ws.on('code-update', (msg) => {
      console.log(msg);
      this.setState({ code: msg });
    });
  }

  componentWillUnmount() {
    this.ws.emit('exit');
  }

  handleCodeChange(code) {
    this.setState({ code: code });
    this.ws.emit('update', { room: this.state.room, message: this.state.code });
  }

  handleLanguageChange(lang) {
    this.setState({ code: examples[lang] });
  }

  render() {
    return (
      <div>
        <BaseLayout>
          <CodePad
            handleLanguageChange={(language) => this.handleLanguageChange(language)}
            code={this.state.code}
            handleChange={(code) => this.handleCodeChange(code)}
          />
        </BaseLayout>
      </div>
    );
  }
}

export default CodePadConnector;
