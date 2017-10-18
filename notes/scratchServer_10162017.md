### Setting up a server with node

What is a server?

Whether on you local machine as a small chunk of memory or a massive tower of concurrently running towers a server is simple a place to store data and put it into a process that can be accessed through the URL paths in your browser.

#### [Express](https://www.npmjs.com/package/express)

This is a package installed through `npm` with the command:

`npm install express`

It allows you to do many things, you can use all of the basic HTTP Verbs, these include:
- GET
- POST
- PUT
- DELETE

#### Making your own Server from scratch

1. `cd` into your `code` folder.
2. `mkdir` a project folder, maybe `simp-server`
3. `cd` into `simple-server`
4. `npm init`, run through options
5. You should now have a `package.json` file
6. install express with `npm install express`
7. You should now have `node_modules` folder
8. To save a reference to you `package.json` use the `--save` flag.  This is no longer necessary with node `version 8.4+` _-MS_    
9. `touch server.js` -> `mkdir public`
10. open your text editor
11. build you server file 
