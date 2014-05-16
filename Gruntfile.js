module.exports = function(grunt) {

    grunt.initConfig({

        typescript: {
            chloei18n: {
                src: ['Urodoz/i18n/pluginReferences.ts'],
                dest: "src/chloe.i18n.js",
                options: {
                    module: "Urodoz",
                    target: "es5",
                    basePath: ".",
                    sourceMap: true,
                    declaration: true,
                    comments: false
                }
            }
        },

        uglify: {
            chloei18n: {
                files: {
                    'src/chloe.i18n.min.js': ['src/chloe.i18n.js']
                }
            }
        }

    });

    /*
     * Loaders
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');

    /*
     * Declaring tasks
     */
    grunt.registerTask('default', ['typescript:chloei18n', 'uglify:chloei18n']);

}