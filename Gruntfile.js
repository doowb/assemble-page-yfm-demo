/*
 * Generated on 2014-01-12
 * generator-assemble v0.4.2
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    site: grunt.file.readYAML('_config.yml'),

    assemble: {
      pages: {
        options: {
          // Dest config
          flatten: true,

          // Metadata
          site: '<%= site %>',
          data: '<%= site.data %>/*.{json,yml}',

          // Templates
          layoutdir: '<%= site.layouts %>',
          layoutext: '<%= site.layoutext %>',
          layout: '<%= site.layout %>',
          partials: '<%= site.includes %>/*.hbs'
        },
        files: {
          '<%= site.dest %>/': ['<%= site.templates %>/*.md']
        }
      }
    },
    clean: ['<%= site.dest %>/**/*.html']
  });

  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['assemble']);
};
