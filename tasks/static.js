/**
 *  grunt.registerTask 'staticPages'
 *
 *  Builds the sites Homepage, and Portfilio Page
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

    function generateBasic(msg, src, dest) {
      grunt.log.ok(msg);

      var tpl = src;
      var out = jade.compile(grunt.file.read(src), {
        filename: tpl
      })({
        page:'index'
      });

      grunt.file.write(dest, out);
      grunt.log.ok('✔ Successful');
    }

    // logs tasks subhead for separation in output
    grunt.log.subhead('Beginning Static Page Generation');

    /**
     *  Builds the sites Homepage
     */
    generateBasic(
      'Building homepage...',
      'template/index.jade',
      'dist/index.html'
    );

    /**
     *  Builds the sites Portfilio Page
     */
    generateBasic(
      'Building portfolio page...',
      'template/portfolio.jade',
      'dist/portfolio.html'
    );
  });
};
