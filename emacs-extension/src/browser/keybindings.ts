/*
 * Copyright (c) 2018 Red Hat, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
import { Keybinding, KeyCode, Key, KeyModifier } from "@theia/core/lib/browser";
import { injectable } from "inversify";

@injectable()
export class EmacsKeyBindings {
    static readonly CTRL_X_CHORD_PREFIX = KeyCode.createKeyCode({ first: Key.KEY_X, modifiers: [KeyModifier.CtrlCmd] });

    private keyBindings: Keybinding[] = [];

    constructor() {
        this.keyBindings = [
            /*** Move commands ***/
            {
                command: 'cursorLeft',
                keybinding: "ctrl+b",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorRight',
                keybinding: "ctrl+f",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorUp',
                keybinding: "ctrl+p",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorDown',
                keybinding: "alt+n",//ctrl+n - new tab in browser
                context: 'editorTextFocus'
            },

            {
                command: 'cursorHome',
                keybinding: "ctrl+a",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorEnd',
                keybinding: "ctrl+e",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorWordEndRight',
                keybinding: "alt+f",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorWordStartLeft',
                keybinding: "alt+b",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorBottom',
                keybinding: "shift+alt+.",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorTop',
                keybinding: "shift+alt+,",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorPageDown',
                keybinding: "ctrl+v",
                context: 'editorTextFocus'
            },

            {
                command: 'cursorPageUp',
                keybinding: "alt+v",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.gotoLine',
                keybinding: "alt+g g",
                context: 'editorTextFocus'
            },

            /*** Search commands ***/
            {
                command: 'editor.action.nextMatchFindAction',
                keybinding: "ctrlcmd+s",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.previousMatchFindAction',
                keybinding: "ctrl+r",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.addSelectionToNextFindMatch',
                keybinding: "ctrl+alt+n",
                context: 'editorTextFocus'
            },

            /*** Edit commands ***/
            {
                command: 'deleteRight',
                keybinding: "ctrl+d",
                context: 'editorTextFocus'
            },

            {
                command: 'deleteLeft',
                keybinding: "ctrl+h",
                context: 'editorTextFocus'
            },

            {
                command: 'deleteWordRight',
                keybinding: "alt+d",
                context: 'editorTextFocus'
            },

            {
                command: 'deleteAllRight',
                keybinding: "ctrl+k",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.insertLineAfter',
                keybinding: "ctrl+j",
                context: 'editorTextFocus'
            },

            {
                command: 'undo',
                keybinding: "ctrl+/",
                context: 'editorTextFocus'
            },

            {
                command: 'undo',
                keybinding: "ctrlcmd+x u",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.selectAll',
                keybinding: "ctrlcmd+x h",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.commentLine',
                keybinding: "ctrl+;",
                context: 'editorTextFocus'
            },

            {
                command: 'editor.action.blockComment',
                keybinding: "alt+;",
                context: 'editorTextFocus'
            },

            {
                command: 'core.cut',
                keybinding: "shift+delete",
                context: 'editorTextFocus'
            },

            /*** Other commands ***/
            {
                command: 'quickCommand',
                keybinding: "alt+x"
            },

            {
                command: 'core.save',
                keybinding: "ctrlcmd+x ctrlcmd+s"
            },

            {
                command: 'file-search.openFile',
                keybinding: "ctrl+x b"
            }
        ]
    }

    getKeybindingsForCommand(commandId: string): Keybinding[] {
        const result: Keybinding[] = [];
        for (const keybinding of this.keyBindings) {
            if (keybinding.command === commandId) {
                result.push({
                    command: keybinding.command,
                    keybinding: keybinding.keybinding,
                    context: keybinding.context
                });
            }
        }
        return result;
    }

    getKeybindings(): Keybinding[] {
        return Array.from(this.keyBindings);
    }
}