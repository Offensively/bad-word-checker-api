const server = require('./server')

// Wit.ai stuff
require('dotenv').config()
const { Wit } = require('node-wit');

const wit = new Wit({
  accessToken: process.env.WIT_TOKEN,
});

// Load data
const fs = require('fs')
fs.readFile('./data/en_dirty_words.json', (err, data) => {
    if (err) throw err;
    module.exports.en_dirty_words = JSON.parse(data).data
})

module.exports.dbsLoaded = () => {
    const areDbsLoaded = module.exports.en_dirty_words
    return areDbsLoaded
}

module.exports.checkFull = (text, maxScale) => {
    return new Promise( async (resolve, reject) => {
        let result = {}
        const witResp = await wit.message(text);
        result.success = true
        result.text = witResp.text
        if (witResp.intents[0]) {
            if (witResp.intents[0].name == 'bad' && witResp.intents[0].confidence > 0.8) {
                result.bad = true
            } else {
                result.bad = false
            }
            if (witResp.entities['badWord:badWord']) {
                result.word = witResp.entities['badWord:badWord'][0].body
            } else {
                result.bad = false
            }
            if (witResp.traits.badScale) {
                if (parseInt(witResp.traits.badScale[0].value) >= maxScale) {
                    result.scale = parseInt(witResp.traits.badScale[0].value)
                } else {
                    result.bad = false
                    delete result.word
                }
            } else {
                if (result.bad == true) {
                    result.bad = false
                }
            }
        } else {
            result.bad = false
        }
        resolve(result)
    })
}