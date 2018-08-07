# Web Advanced Course Project

This repository holds de project of Web Advanced Course on ProDigi

## Instructions

1.  [Standards to follow](#standards-to-follow)
1.  [Running the Project](#running-the-project)
1.  [Modifying the Project](#modifying-the-project)

### Standards to follow

The following presents standards to code new features to this project.

By following these standards, you keep the code comprehensive, besides getting error report inside your code editor. Isn't it great?

- Use `strict mode` in all of your javascript files
- Use `eslint` as your standard linter
- Follow the `javascript code document` to document all of your methods

If you don't know how to use eslint or javascript code document, you can find more in these links

https://youtu.be/o2H8kvuwMKE

http://usejsdoc.org/

https://eslint.org/

#### Be advised

- **Do not** modify the `.eslintrc.yml` file. It contains all the lint rules for this project
- **Do not** modify the `.gitignore` file.

### Running the project

1.  Clone the repository

    You can run the command `git clone <repo-url>` if you are using the terminal

1.  Install the dependencies

    That's an optional step, but you should do that in order to generate the docs and run the http-server for example

    In your terminal, type the command. You must have `node.js` installed on your machine

    `npm install`

1)  Start a web-server

    If you've installed the dependencies, in your terminal, type the command

    `http-server`

### Modifying the Project

To send a pull request to the repo, start by `forking` the project. Then, clone your own fork.

In your machine, you need to add the **main project address** to be able to pull changes from the original project. If you are in the terminal, type the command

`git remote add <main-repo-name> <repo-url>`

Every time that you need to sync your fork with the main project, execute the commands

`git pull <main-repo-name> <main-repo-develop>`

At this moment, we are using the `develop` branch to get and set changes

Later, to send the changes to your fork, you can execute the command

`git push`

It's not necessary put the repo's name and branch because that's all set!

#### New changes

Every time you make changes and need to send a pull request, go through these steps:

- Pull from **main repo**
- Fix possible conflicts
- Push to your fork
- Call for a pull request
