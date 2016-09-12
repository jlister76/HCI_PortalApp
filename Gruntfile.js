
module.exports = function(grunt) {

// Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'client/app/modules/**/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['client/test/spec/{,*/}*.js']
      }
    },

    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: 'client/app/index.html'
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-wiredep');
};
