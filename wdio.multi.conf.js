const baseConfig = require('./wdio.base.conf.js');
const merge = require('deepmerge');

exports.config = merge(baseConfig.config, {
    maxInstances: 4,
    capabilities: {
        user1: {
            capabilities: {
                browserName: 'firefox',
            }
        },
        user2: {
            capabilities: {
                browserName: 'chrome',
            }
        },
        user3: {
            capabilities: {
                browserName: 'MicrosoftEdge',
            }
        }
    }
})