#Task automation / Build tools


Hi, my name is Qawelesizwe mlilo, you can call me Q. I'm a programmer, previously I have been employed as a php developer writing Joomla! extensions. These days I enjoy writing modular JavaScript programs mainly for the Node.js platform. I have also written a few npm modules that you can checkout by following links of presence on the interwebs.

Today I'm going to talk to you about Task automation slash (/) build tools in the Node.js universe. I'm sure that some of you that come from different programming backgrounds have at some point used task runners like Make or Ant - these tools help to automate common tasks that you usually run when working on projects.

Node.js is a relatively new technology that has gained a lot of traction because of the success that some high profile companies have had when they ported their software written in other platforms. 

I am going to focus mainly on a relatively new Task runner.

Grunt is a task runner created by Ben Alman, a prolific (former) jQuery developer. The simplest way to get started with Grunt is to first install the Grunt command line interface globally which puts in your system path and makes it available inside any directory. The Grunt command requires a Gruntfile contining tasks in your project's root directory.

## Common tasks that can be automated.
 - Linting
 - Concatination
 - Minification
 - Copying
 - Compilation (Sass, Coffescript)
 - Unit testing
 - Deployment
 - image optimisation
 
Example
I would like to demonstrate how one would use Grunt in a project. In my example we a building a simple website and we use Grunt to do the following.

 - Lint our JS
 - Concatinate all JS
 - Minify the JS
 - save it in a new file
 - minify all images
 - copy all files
 
 


