'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            test: {
                files: ['**/*.js'],
                tasks: ['mochaTest'],
                options: {
                    spawn: true
                }
            },
            less: {
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    spawn: true
                }
            }

        },
        browserify: {
            dist: {
                files: {
                    'build/browser/js/module.js': ['lib/{%= name %}.js']
                },
                options: {
                    transform: ['brfs','folderify']
                }
            }
        },
        less: {
            dist: {
                files: {
                    "build/browser/css/style.css": "css/style.less",
                    "build/browser/css/print.css": "css/print.less"
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'build/browser/index.html': ['www/index.html']
                }
            }
        },
        copy: {
            dist: {
                files: [


                    // makes all src relative to cwd
                    {expand: true, cwd: 'vendor', src: ['**/*'], dest: 'build/browser/vendor/'},
                    {expand: true, cwd: 'www', src: ['**/*'], dest: 'build/browser/'}


                ]
            }
        },

        clean: {
            dist: ["build/browser"]

        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        },
        connect: {
            server: {
                options: {
                    keepalive:true,
                    port: 80,
                    base: 'build/browser'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test', 'mochaTest');
    grunt.registerTask('build-browser', ['clean','browserify','less','copy'/*,'processhtml'*/]);
    grunt.registerTask('watch-test', 'watch:test');
    grunt.registerTask('watch-less', 'watch:less');
    grunt.registerTask('serve', 'connect:server');

};
