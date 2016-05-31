module.exports = function(grunt) {

	grunt.initConfig({

		uglify : {
			my_target : {
				files : {
					'js/scripts.js' : ['components/js/vendor/*.js','components/js/scripts.js']
				}
			}
		},  // uglify


	    compass : {

	    	dev : {
	    		options : {
	    			config : 'config.rb'
	    		}, // options
	    	} //dev

	    },   //compass

		watch : {
			
			scripts : {
				files : ['components/js/*.js'],
				tasks : ['uglify']
			},

			sass : {
				files : ['components/sass/*.scss'],
				tasks : ['compass:dev']
			}
			
		} // watch

	}); //initConfig

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register default tasks

	grunt.registerTask('default', ['uglify', 'watch']);

}; // exports 