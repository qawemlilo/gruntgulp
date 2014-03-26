#Task automation & Build tools


Hi, my name is Qawelesizwe mlilo ....

## Links
  - Blog <http://blog.ragingflame.co.za>
  - Github <https://github.com/qawemlilo>
  - Twitter <http://twitter.com/ragingflameblog>

Today I'm going to talk to you about Build tools and Task automation in the Node.js universe. I'm sure that some of you that come from different programming backgrounds have at some point used task runners like Make or Ant - these tools help to automate common tasks that you usually run when working on projects.

## Common tasks that can be automated.
 - Linting
 - Concatination
 - Minification
 - Copying
 - Compilation (Sass, Coffescript)
 - Unit testing
 - Deployment
 - image optimisation
  
  
#Grunt (http://gruntjs.com)
  1. What is grunt
     Grunt is a task runner created by Ben Alman, a prolific (former) jQuery developer. 
     The simplest way to get started with Grunt is to first install the Grunt command line interface globally which puts in your system path and makes it available inside any directory. 
     The Grunt command requires a Gruntfile contining tasks in your project's root directory
  
  2. how does it work
    - Configuration-over-code
    - Abstracts how node works
    - Each task reand and writes to disk
 

Links:
  - http://javascriptjabber.com/074-jsj-grunt-js-with-ben-alman
  
  
  
  

#Gulp (http://gulpjs.com)
  1. What is Gulp
     Gulp is an intuitive, code-over-configuration, streaming build system created by Eric Schoffstall. 
     If you love writing code, you will love Gulp! 
  
  2. How does it work
    - Uses node streams
    - Normal Node program, can be reused with any streaming thing
    - Reduces reads and writes by operating in memory
    - Input file is piped to gulp task which does special things with it and pipes it out to a destination
    - Take in a file, modify it and output new one
    
There are 5 methods in Gulp
  .task - registers name of a task
  .run - runs a Gulp task
  .watch - watches changes in files and runs the callback function
  .src - takes file system glob and returns a readable stream
  .dest - destination - returns a writable stream
 

Links:
  - http://javascriptjabber.com/097-jsj-gulp-js-with-eric-schoffstall\
  

#Contrasts: Grunt vs Gulp
Configuration-over-code vs Code-over-configurationsta
More-is-better vs less-is-better
Abstraction vs the-node-way
write-to-disk vs streams


 
# NPM Run
  - executes shell commands
  - can be called using the command `npm run`
  
  
