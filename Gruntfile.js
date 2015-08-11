module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            production: {
                options: {
                    mangle: true
                },
                files: {
                    'src/ng-pdf-viewer.min.js': [ 'src/ng-pdf-viewer.js' ]
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [
        'uglify'
    ]);
};