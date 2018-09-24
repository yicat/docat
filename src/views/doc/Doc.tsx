import * as React from 'react';
import { Editor, EditorState, DraftHandleValue } from 'draft-js';

import { BoardLayout } from 'src/layouts';
import { keyBindingFn, keyCommand } from './keyBinding';
import * as cls from './Doc.module.less';

interface IProps { }
interface IState {
  editorState: any;
}

export default class Doc extends React.Component<IProps, IState> {
  domEditor: any;

  constructor (props: IProps) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  componentDidMount () {
    this.domEditor.focus();
  }

  handleChange = (editorState: any) => {
    this.setState({ editorState });
  }

  handleKeyCommand = (command: string): DraftHandleValue => {
    return keyCommand(command, this.state.editorState);
  }

  handlePageFocus = () => {
    this.domEditor.focus();
  }

  setDomEditorRef = (ref: any) => {
    this.domEditor = ref;
  }

  render () {
    return (
      <BoardLayout onClick={this.handlePageFocus}>
        <div className={cls.docWrapper}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleChange}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={keyBindingFn}
            ref={this.setDomEditorRef}
          />
        </div>
      </BoardLayout>
    );
  }
}