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
            if (!monacoCommand && !registry.getCommand(commandId)) {
                this.monacoCommandRegistry.registerCommand({ 'id': commandId, 'label': command.label }, { execute: editor => editor.commandService.executeCommand(commandId) });
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
        this.resolveChordKeyBindings(registry);

        const emacsKeyBindingList: Keybinding[] = [];
        for (const item of this.emacsKeyBindings.getKeybindings()) {
            const commandId = this.monacoCommandRegistry.validate(item.command);
            if (commandId) {
                item.command = commandId;
            }

            emacsKeyBindingList.push(item);
        }

        if (emacsKeyBindingList.length > 0) {
            registry.setKeymap(KeybindingScope.USER, emacsKeyBindingList);
        }
    }

    private resolveChordKeyBindings(registry: KeybindingRegistry) {
        let bindings = registry.getKeybindingsForKeySequence([EmacsKeyBindings.CTRL_X_CHORD_PREFIX]).full;
        if (bindings.length == 0) {
            return;
        }

        for (const binding of bindings) {
            const commandId = binding.command;
            if (commandId == KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND) {
                continue;
            }

            const emacsKeybinding = this.emacsKeyBindings.getKeybindingsForCommand(commandId).pop();
            if (emacsKeybinding) {
                binding.keybinding = emacsKeybinding.keybinding;
            }
        }
    }
}