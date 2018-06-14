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

import { injectable, inject } from "inversify";
import { MonacoCommandRegistry } from '@theia/monaco/lib/browser/monaco-command-registry';
import { KeybindingContribution, KeybindingRegistry, KeybindingScope, Keybinding } from '@theia/core/lib/browser';
import { CommandContribution, CommandRegistry } from "@theia/core/lib/common";
import MonacoKeybindingsRegistry = monaco.keybindings.KeybindingsRegistry;
import { EmacsKeyBindings } from "./keybindings";
import { EmacsCommands } from "./commands";

@injectable()
export class EmacsCommandContribution implements CommandContribution {

    constructor(@inject(MonacoCommandRegistry) protected readonly monacoCommandRegistry: MonacoCommandRegistry,
        @inject(EmacsCommands) protected readonly emacsCommands: EmacsCommands) {
    }

    registerCommands(registry: CommandRegistry): void {
        this.emacsCommands.getCommands().forEach(command => {
            const commandId = command.id;
            const monacoCommand = this.monacoCommandRegistry.validate(commandId);
            if (!monacoCommand) {
                this.monacoCommandRegistry.registerCommand({ 'id': commandId }, { execute: editor => editor.commandService.executeCommand(commandId) });
            }
        });
    }
}

@injectable()
export class EmacsKeybindingContribution implements KeybindingContribution {
    constructor(@inject(MonacoCommandRegistry) protected readonly monacoCommandRegistry: MonacoCommandRegistry,
        @inject(EmacsKeyBindings) protected readonly emacsKeyBindings: EmacsKeyBindings) {
    }

    registerKeybindings(registry: KeybindingRegistry): void {
        const emacsKeyBindingList: Keybinding[] = [];
        for (const item of MonacoKeybindingsRegistry.getDefaultKeybindings()) {
            const commandId = item.command;
            const emacsKeyBinding = this.emacsKeyBindings.getKeybinding(commandId);
            if (emacsKeyBinding) {
                emacsKeyBinding.command = this.monacoPrefix(emacsKeyBinding.command);
                emacsKeyBindingList.push(emacsKeyBinding);
            }
        }

        if (emacsKeyBindingList.length > 0) {
            registry.setKeymap(KeybindingScope.USER, emacsKeyBindingList);
        }
    }

    private monacoPrefix(command: string): string {
        return MonacoCommandRegistry.MONACO_COMMAND_PREFIX + command;
    }
}