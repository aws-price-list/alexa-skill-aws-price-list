var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({

    lambda_deploy: {
        default: {
            arn: '',
            options: {
                enableVersioning: true
            }
        }
    },

    lambda_package: {
        default: {}
    }

});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
