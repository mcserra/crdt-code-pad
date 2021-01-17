import React from 'react';
import { v4 as uuid } from 'uuid';
import 'antd/dist/antd.css';
import { Modal, Select } from 'antd';
import { defaultLang, languages } from '../CodePad/CodeExamples';
import { Redirect } from 'react-router';

const { Option } = Select;

class CreatePadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lang: defaultLang,
      done: false,
    };
  }

  redirect() {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ done: true });
  }

  hideModal() {
    this.props.hideModal();
  }

  handleLanguageChange(lang) {
    this.setState({ lang: lang });
  }

  render() {
    if (this.state.done) {
      return <Redirect to={'/dev-pad/' + uuid()} />;
    }
    return (
      <Modal
        title='New Pad'
        style={{ top: 20 }}
        visible={this.props.visible}
        onOk={() => this.redirect()}
        onCancel={() => this.hideModal(false)}
      >
        <Select defaultValue={defaultLang} onChange={this.handleLanguageChange} style={{ width: 120 }}>
          {languages.map((lang) => (
            <Option key={lang} value={lang}>
              {lang}
            </Option>
          ))}
        </Select>
      </Modal>
    );
  }
}

export default CreatePadModal;
