/**
 *  grunt.registerTask 'staticPages'
 *
 *  Builds the sites Static Pages
 *
 *  COULD HAVE USED `grunt-contrib-jade`
 *  FOR THIS. AND PROBABLY SHOULD HAVE... WAS BORED
 *  ... had fun storminnn' the castle!
 */
module.exports = function (grunt) {

  'use strict';

  var jade = require('jade');

  grunt.registerTask('staticPages', 'Compile Static Pages', function () {

    function generateStaticPages(base, dest) {

      // find templates to process
      var templates = grunt.file.expand({
          expand: true,
          nonull: true,
          cwd: base
        }, ['*.jade', '!layout.*']);

      grunt.log.subhead('Building Static Pages...');

      for (var key in templates) {
        if (templates.hasOwnProperty(key)) {

          grunt.log.ok('Building ' + templates[key]);

          var tpl = base + '/' + templates[key];
          if (!grunt.file.exists(tpl)) {
            return grunt.fail.warn(tpl + " doesn't exist");
          }

          // compile static jade templates
          var output = jade.compile(grunt.file.read(tpl), {
            filename: tpl,
            pretty: true
          })({
            page: tpl
          });

          var htmlTpl = templates[key].replace('.jade', '.html');

          grunt.file.write(dest + '/' + htmlTpl, output);
          grunt.log.ok('✔ Successful');
        }
      }
    }
    generateStaticPages('template', 'dist');
  });
};
