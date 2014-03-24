module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
        files: ['Gruntfile.js', 'com_holiness/site/app/js/collections/*.js', 'com_holiness/site/app/js/models/*.js', 'com_holiness/site/app/js/views/**/*.js', 'com_holiness/site/app/js/*.js'],
        options: {
            jshintrc: '.jshintrc',
            ignores: ['com_holiness/site/app/js/app.build.js']
        }
    },
    
    
    compress: {
        template: {
            options: {
                archive: '../extensions/js_wright.zip'
            },
            
            files: [
                {cwd: 'template/js_wright/', src: ['**/*'], expand: true, dest: ''}, // includes files in path and its subdirs
            ]
        },
        
        com_holiness: {
            options: {
                archive: '../extensions/com_holiness.zip'
            },
            
            files: [
                {cwd: 'com_holiness/', src: ['**/*'], expand: true, dest: ''}, // includes files in path and its subdirs
            ]
        },
        
        mod_hpsearch: {
            options: {
                archive: '../extensions/mod_hpsearch.zip'
            },
            
            files: [
                {cwd: 'mod_hpsearch/', src: ['**/*'], expand: true, dest: ''}, // includes files in path and its subdirs
            ]
        },
        
        mod_devotions: {
            options: {
                archive: '../extensions/mod_devotions.zip'
            },
            
            files: [
                {cwd: 'mod_devotions/', src: ['**/*'], expand: true, dest: ''}, // includes files in path and its subdirs
            ]
        },
        
        mod_members: {
            options: {
                archive: '../extensions/mod_hpmembers.zip'
            },
            
            files: [
                {cwd: 'mod_hpmembers/', src: ['**/*'], expand: true, dest: ''}, // includes files in path and its subdirs
            ]
        }
    },
    
    exec: {
        test: {
            cmd: "find com_holiness -type f -name '*.php' -exec php -l {} ;",

            
            onOutData: function (data) {
                if (data.match(/Errors parsing|PHP Parse error/g)) {
                    grunt.log.error(data);
                    process.exit(1);
                }
                else {
                    grunt.log.write(data);
                }
            },
        
            onErrData: function (data) {
                if (data.match(/Errors parsing|PHP Parse error/g)) {
                    grunt.log.error(data);
                    process.exit(1);
                }
                else {
                    grunt.log.write(data);
                }
            }
        },
        
        clean: {
            cmd: 'find . -type f -name "*~" -exec rm -f {} ;'
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  
  grunt.registerTask('default', ['exec:clean', 'exec:test', 'jshint', 'compress']);
  grunt.registerTask('zip', ['jshint', 'exec:test', 'compress:com_holiness']);
  grunt.registerTask('ziplinux', ['jshint', 'compress:com_holiness']);
  
  grunt.task.registerTask('build', 'A build task', function(arg) {
      var dev = 'template/js_wright/template_dev.php',
          prod = 'template/js_wright/template_prod.php',
          dest = 'template/js_wright/';

      if (arg === 'dev') {
        grunt.log.writeln('Building development packages');
        
        grunt.file.copy(dev, dest + 'custom.php');
        grunt.log.ok('Copied %s to %s', dev, dest + 'custom.php');
        
        grunt.file.copy(dev, dest + 'template.php');
        grunt.log.ok('Copied %s to %s', dev, dest + 'template.php');        
      }
      
      if (arg === 'production') {
        grunt.log.writeln('Building production packages');
        
        grunt.file.copy(prod, dest + 'custom.php');
        grunt.log.ok('Copied %s to %s', prod, dest + 'custom.php');
        
        grunt.file.copy(prod, dest + 'template.php');
        grunt.log.ok('Copied %s to %s', prod, dest + 'template.php');
      }
      
      grunt.task.run(['compress:template', 'ziplinux']);
  });
};

