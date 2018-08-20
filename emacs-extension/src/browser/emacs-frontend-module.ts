/*
 * Copyright (c) 2012-2018 Red Hat, Inc.
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which is available at http://www.eclipse.org/legal/epl-2.0.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import { ContainerModule } from "inversify";
import { CommandContribution } from "@theia/core/lib/common";
import { KeybindingContribution } from '@theia/core/lib/browser';
import { EmacsCommandContribution, EmacsKeybindingContribution } from './emacs-contribution';
import { EmacsKeyBindings } from "./keybindings";
import { EmacsCommands } from "./commands";

export default new ContainerModule(bind => {

    bind(EmacsCommands).toSelf().inSingletonScope();
    bind(EmacsKeyBindings).toSelf().inSingletonScope();
    bind(CommandContribution).to(EmacsCommandContribution);
    bind(KeybindingContribution).to(EmacsKeybindingContribution);
});