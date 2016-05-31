module.exports = function(grunt) {

	grunt.initConfig({

		uglify : {
			my_target : {
				files : {
					'build/js/scripts.js' : ['components/js/vendor/*.js','components/js/scripts.js']
				}
			}
		},  // uglify

		connect : {
	    	server : {
	    		options : {
	    			hostname: 'localhost', 
	    			port: 3000,
	    			base: 'build/',
	    			livereload : true
	    		}
	    	}
	    },  //connect

	    compass : {

	    	dev : {
	    		options : {
	    			config : 'config.rb'
	    		}, // options
	    	} //dev

	    },   //compass

		watch : {
			options : {
				spawn : false,
				livereload : true
			},
			scripts : {
				files : ['components/js/*.js'],
				tasks : ['uglify']
			},

			sass : {
				files : ['components/sass/*.scss'],
				tasks : ['compass:dev']
			},
			html : {
				files : ['build/*.html']
			}
		} // watch

	}); //initConfig

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register default tasks

	grunt.registerTask('default', ['uglify','connect', 'watch']);

}; // exports 