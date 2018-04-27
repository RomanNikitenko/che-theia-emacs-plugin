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

import { injectable } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MAIN_MENU_BAR } from "@theia/core/lib/common";

export namespace EmacsCommands {
    export const TestCommand = {
        id: 'Test.command',
        label: "test"
    };
}

export namespace EmacsActions {
    export const EMACS = [...MAIN_MENU_BAR, '0_emacs'];
}

//TODO the class is designed for demo only - should be removed
@injectable()
export class EmacsCommandContribution implements CommandContribution {

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(EmacsCommands.TestCommand, {
            execute: () => {
                console.log('test emacs command');
            }
        });

    }
}

@injectable()
export class EmacsMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerSubmenu(EmacsActions.EMACS, 'EMACS');

        menus.registerMenuAction(EmacsActions.EMACS, {
            commandId: EmacsCommands.TestCommand.id,
            label: 'EMACS test'
        });
    }
}