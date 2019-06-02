const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' }
              // ,console: { type: 'console' }
            },
  categories: { default: { appenders: ['cheese'], level: 'error' }
                // ,another: { appenders: ['console'], level: 'trace' }
              }
});
const logger = log4js.getLogger('cheese');

module.exports = {
  Logger: logger
};
//example
/*
const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
*/
