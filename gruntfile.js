module.exports = function(grunt){
// Project configuration.
    grunt.initConfig({       
        sass: {
            app: {
                files: {
                        'src/main.css': 'src/main.scss'
                     }
                 }
        },
        watch: {
                css: {
                    files: ['src/*.scss'],
                    tasks: ['sass']
                }
            }
    });
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task
    grunt.registerTask('default', ['watch']);

};