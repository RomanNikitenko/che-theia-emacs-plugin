# Emacs Extension
The example of how to build the Theia-based applications with the emacs-extension.

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

    nvm install 8
    nvm use 8

Install yarn.

    npm install -g yarn

## Running the browser example

    yarn rebuild:browser
    cd browser-app
    yarn start

Open http://localhost:3000 in the browser.

## Running the Electron example

    yarn rebuild:electron
    cd electron-app
    yarn start

## Developing with the browser example

Start watching of the emacs extension.

    cd emacs-extension
    yarn watch

Start watching of the browser example.

    yarn rebuild:browser
    cd browser-app
    yarn watch

Launch `Start Browser Backend` configuration from VS code.

Open http://localhost:3000 in the browser.

## Developing with the Electron example

Start watching of the emacs-extension.

    cd emacs-extension
    yarn watch

Start watching of the electron example.

    yarn rebuild:electron
    cd electron-app
    yarn watch

Launch `Start Electron Backend` configuration from VS code.

## Publishing emacs-extension

Create a npm user and login to the npm registry, [more on npm publishing](https://docs.npmjs.com/getting-started/publishing-npm-packages).

    npm login

Publish packages with lerna to update versions properly across local packages, [more on publishing with lerna](https://github.com/lerna/lerna#publish).

    npx lerna publish
    
### Operation
Use Shift+DEL to cut to clipboard, Shift+Insert to paste from clipboard.

### Move command
|Command | Desc |
|--------|------|
| `C-f` | Move forward |
| `C-b` | Move backward |
| `M-n` | Move to the next line (C+n - new tab in browser)|
| `C-p` | Move to the previous line |
| `C-a` | Move to the beginning of line |
| `C-e` | Move to the end of line |
| `M-f` | Move forward by one word unit |
| `M-b` | Move backward by one word unit |
| `M->` | Move to the end of buffer |
| `M-<` | Move to the beginning of buffer |
| `C-v` | Scroll down by one screen unit |
| `M-v` | Scroll up by one screen unit |
| `M-g g` | Jump to line (command palette) |


### Search Command
|Command | Desc |
|--------|------|
| `C-s` | Search forward |
| `C-r` | Search backward |
| `C-M-n` | Add selection to next find match |

### Edit command
|Command | Desc |
|--------|------|
| `C-d` | Delete right (DEL) |
| `C-h` | Delete left (BACKSPACE) |
| `M-d` | Delete word |
| `C-k` | Kill to line end |
| `C-x h`| Select All |
| `C-x u (C-/)`| Undo |
| `C-;` | Toggle line comment in and out |
| `M-;` | Toggle region comment in and out |

### Other command
|Command | Desc |
|--------|------|
| `M-x` | Open command palette |
| `C-x C-s` | Save |
| `C-x b` | QuickOpen a file |