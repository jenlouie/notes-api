# todo-api
Check versions of node and npm:
```
node -v
npm -v
```
Get npm:

https://www.npmjs.com/get-npm

Get Postman
https://www.getpostman.com/

Update npm:
```
npm install npm@latest -g
```

npm init
For entry point, enter in `server.js`
npm install --save express body-parser
npm install --save-dev nodemon

Create server.js and copy contents over.
`node server.js` or `npm run dev` (to run nodemon)




To run locally:

1. Ensure you're in \notes-api\ directory.
2. Fetch dependencies with `npm install`.
3. Run the server with `node server.js` or `npm run dev` (to run nodemon).

To debug using Visual Studio Code:

1. In VS Code, bring up the 'Integrated Terminal' ('View' > 'Integrated Terminal').
2. In the terminal, ensure you're in \notes-api\ directory..
3. Run the app with `node server.js`.
4. In Debug panel, select 'Attach by Process ID' and 'Start Debugging' (green triangle).
5. In the dropdown that appears, select the process server.js.
6. Make requests using Postman or another tool.