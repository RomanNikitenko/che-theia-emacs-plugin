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
import { Keybinding } from "@theia/core/lib/browser";
import { injectable } from "inversify";

@injectable()
export class EmacsKeyBindings {
    private keyBindings: { [key: string]: Keybinding } = {};

    constructor() {
        this.keyBindings = {
            //TODO
            //Theia does not support chord keybindings properly at the moment
            //(https://github.com/theia-ide/theia/blob/da4e14af3a1b8ac24d7ec3368161d70b225c8dd4/packages/monaco/src/browser/monaco-keybinding.ts#L44),
            //so keybindings for actions like 'Delete blank lines around'(Ctrl+X Ctrl+O) or 'Select All'(Ctrl+X H) are not implemented. 

            /*** Move commands ***/
            'cursorLeft': {
                command: 'cursorLeft',
                keybinding: "ctrl+b",
                context: 'editorTextFocus'
            },

            'cursorRight': {
                command: 'cursorRight',
                keybinding: "ctrl+f",
                context: 'editorTextFocus'
            },

            'cursorUp': {
                command: 'cursorUp',
                keybinding: "ctrl+p",
                context: 'editorTextFocus'
            },

            'cursorDown': {
                command: 'cursorDown',
                keybinding: "alt+n",//ctrl+n - new tab in browser
                context: 'editorTextFocus'
            },

            //check
            'cursorHome': {
                command: 'cursorHome',
                keybinding: "ctrl+a",
                context: 'editorTextFocus'
            },

            'cursorEnd': {
                command: 'cursorEnd',
                keybinding: "ctrl+e",
                context: 'editorTextFocus'
            },

            'cursorWordEndRight': {
                command: 'cursorWordEndRight',
                keybinding: "alt+f",
                context: 'editorTextFocus'
            },

            'cursorWordStartLeft': {
                command: 'cursorWordStartLeft',
                keybinding: "alt+b",
                context: 'editorTextFocus'
            },

            //check
            'cursorBottom': {
                command: 'cursorBottom',
                keybinding: "shift+alt+.",
                context: 'editorTextFocus'
            },

            'cursorTop': {
                command: 'cursorTop',
                keybinding: "shift+alt+,",
                context: 'editorTextFocus'
            },

            'cursorPageDown': {
                command: 'cursorPageDown',
                keybinding: "ctrl+v",
                context: 'editorTextFocus'
            },

            'cursorPageUp': {
                command: 'cursorPageUp',
                keybinding: "alt+v",
                context: 'editorTextFocus'
            },

            'editor.action.gotoLine': {
                command: 'editor.action.gotoLine',
                keybinding: "alt+g",
                context: 'editorTextFocus'
            },

            /*** Search commands ***/
            'editor.action.nextMatchFindAction': {
                command: 'editor.action.nextMatchFindAction',
                keybinding: "ctrl+s",
                context: 'editorTextFocus'
            },

            'editor.action.previousMatchFindAction': {
                command: 'editor.action.previousMatchFindAction',
                keybinding: "ctrl+r",
                context: 'editorTextFocus'
            },

            'editor.action.addSelectionToNextFindMatch': {
                command: 'editor.action.addSelectionToNextFindMatch',
                keybinding: "ctrl+alt+n",
                context: 'editorTextFocus'
            },

            /*** Edit commands ***/
            'deleteRight': {
                command: 'deleteRight',
                keybinding: "ctrl+d",
                context: 'editorTextFocus'
            },

            'deleteLeft': {
                command: 'deleteLeft',
                keybinding: "ctrl+h",
                context: 'editorTextFocus'
            },

            'deleteWordRight': {
                command: 'deleteWordRight',
                keybinding: "alt+d",
                context: 'editorTextFocus'
            },

            //check
            'deleteAllRight': {
                command: 'deleteAllRight',
                keybinding: "ctrl+k",
                context: 'editorTextFocus'
            },

            'editor.action.insertLineAfter': {
                command: 'editor.action.insertLineAfter',
                keybinding: "ctrl+j",
                context: 'editorTextFocus'
            },

            'undo': {
                command: 'undo',
                keybinding: "ctrl+/",
                context: 'editorTextFocus'
            },

            'editor.action.commentLine': {
                command: 'editor.action.commentLine',
                keybinding: "ctrl+;",
                context: 'editorTextFocus'
            },

            'editor.action.blockComment': {
                command: 'editor.action.blockComment',
                keybinding: "alt+;",
                context: 'editorTextFocus'
            }
        }
    }

    getKeybinding(commandId: string): Keybinding | undefined {
        const keybinding = this.keyBindings[commandId];
        if (keybinding) {
            return {
                'command': keybinding.command,
                'keybinding': keybinding.keybinding,
                'context': keybinding.context
            };
        }
        return undefined;
    }
}