var path        = require('path'),
    rootPath    = path.normalize(__dirname + '/..'),
    env         = process.env.NODE_ENV || 'development';

var config      = {
        development: {
            root: rootPath,
            app: {
                name: 'amia-design-challenge'
            },
            port: 3000,
            db: 'mongodb://localhost/amia-design-challenge-development'
        },

        test: {
            root: rootPath,
            app: {
                name: 'amia-design-challenge'
            },
            port: 3000,
            db: 'mongodb://localhost/amia-design-challenge-test'
        },

        production: {
            root: rootPath,
            app: {
                name: 'amia-design-challenge'
            },
            port: 3000,
            db: 'mongodb://' + proccess.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' + process.env.MONGO_DATABASE
        }
    };

module.exports = config[env];
