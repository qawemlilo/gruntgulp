

module.exports = function (grunt) {
  'use strict';


  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      
      src: {
        src: 'app/js/*.js'
      }
    },


    concat: {
      bootstrap: {
        src: [
          'js/transition.js',
          'js/alert.js',
          'js/button.js',
          'js/carousel.js',
          'js/collapse.js',
          'js/dropdown.js',
          'js/modal.js',
          'js/tooltip.js',
          'js/popover.js',
          'js/scrollspy.js',
          'js/tab.js',
          'js/affix.js'
        ],
        dest: 'gruntdist/js/script.js'
      }
    },


    uglify: {
      options: {
        report: 'min'
      },
      bootstrap: {
        src: '<%= concat.bootstrap.dest %>',
        dest: 'gruntdist/js/script.min.js'
      }
    },
    
    
    imagemin: {                          
      images: {                          
        options: {                      
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'app/images/',                         
          src: ['**/*.{png,jpg,gif}'],
          dest: 'gruntdist/images/'
        }]
      }
    },
    

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint', 'concat', 'uglify']
      },
      images: {
        files: 'app/images/*',
        tasks: ['imagemin']
      }
    }
  });


  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'imagemin', 'watch']);
  
};


