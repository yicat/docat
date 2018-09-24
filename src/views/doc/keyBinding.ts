import { getDefaultKeyBinding, KeyBindingUtil, DraftHandleValue, EditorState } from 'draft-js';

const { hasCommandModifier } = KeyBindingUtil;

function keyBindingFn (e: any): (string | null) {
    if (e.keyCode === 83 && hasCommandModifier(e)) {
        return 'docat-save';
    }
    return getDefaultKeyBinding(e);
}

function keyCommand (command: string, state: EditorState): DraftHandleValue {
    if (command === 'docat-save') {
        return 'handled';
    }
    return 'not-handled';
}

export { keyBindingFn, keyCommand };