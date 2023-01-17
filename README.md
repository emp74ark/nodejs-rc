# Websocket Remote Control

## Description

- [Task description](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md)
- [Scoring rules](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/score.md)
- Deadline: 17.01.2023
- Self-check: 164/164

## Installation

Start backend from [this repository](https://github.com/rolling-scopes-school/remote-control)

```bash
git clone https://github.com/emp74ark/nodejs-rc
cd nodejs-rc
git checkout develop
npm install
```

Rename '.env.copy' to '.env'.

```bash
npm run start:dev
```

## Nota bene!

- check if any other application doesn't use 's', 'r', 'c' as a global shortcuts.

## Scoring:

### Basic Scope

- Websocket
    - **+6** Implemented workable websocket server
    - **+10** Websocket server message handler implemented properly
    - **+10** Websocket server message sender implemented properly
- Navigation
    - **+4** Move mouse up implemented properly
    - **+4** Move mouse down implemented properly
    - **+4** Move mouse left implemented properly
    - **+4** Move mouse right implemented properly
    - **+4** Send mouse coordinates implemented properly
- Drawing
    - **+6** Draw circle implemented properly
    - **+6** Draw rectangle implemented properly
    - **+6** Draw square implemented properly
- Screen image
    - **+30** Send screen image implemented properly (optionally)

### Advanced Scope

- **+30** Task implemented on Typescript
- **+20** All data transfer operations with send/get should be performed using Streams API
- **+20** Codebase is separated (at least 4 modules)
