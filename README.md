# Reverse Engineering and Obfuscation

## Description
A Node.js application demonstrating basic obfuscation techniques to protect against reverse engineering. The app uses `javascript-obfuscator` to secure its code.

## Features
- Obfuscation of JavaScript code.
- Protection against reverse engineering.
- Fully functional obfuscated application.

## What I Learned
- Risks of reverse engineering and how to mitigate them.
- Using `javascript-obfuscator` for code obfuscation.
- Ensuring obfuscated code retains functionality.

## Setup
1. Install dependencies:
   ```bash
   npm install
2. Obfuscate the code:
   ```bash
   javascript-obfuscator server.js --output obfuscated-server.js
3. Run the obfuscated app:
   ```bash
   node obfuscated-server.js

