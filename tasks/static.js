/**
 *  grunt.registerTask 'staticPages'
 *
 *  Builds the sites Homepage, and About Page
 *
 */
module.exports = function (grunt) {

  'use strict';

  var jade   = require('jade');
  var marked = require('marked');
  var highlighter = require('highlight.js');

  grunt.registerTask('staticPages', 'Compile Static Pages', function () {
    // Set default marked options
    marked.setOptions({
      gfm : true,
      base: '/',
      anchors  : true,
      pedantic : false,
      sanitize : true,
      highlight: function (code) {
        return highlighter.highlight('javascript', code).value;
      }
    });

    // logs tasks subhead for separation in output
    grunt.log.subhead('Beginning Static Page Generation');

    /**
     *  Builds the sites Homepage
     */

    // log the homepage build to the user
    grunt.log.ok('Building homepage...');

    // builds the homepage
    var homeTpl = 'template/index.jade';
    var homeOut = jade.compile(grunt.file.read(homeTpl), {
      filename: homeTpl
    })({
      page:'index'
    });

    grunt.file.write('dist/index.html', homeOut);
    grunt.log.ok('✔ Homepage built successfully');

    /**
     *  Builds the sites About Page
     */

    // log the about page build to the user
    grunt.log.ok('Building about page...');
  });
};
