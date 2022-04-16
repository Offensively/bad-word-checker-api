const index = require('../index')

module.exports = function(app){

    app.get('/check/full', async function (req, res){
        if (!req.query.text) {
            const result = { success: false, reason: "Missing one or more parameters" }
            res.send(result)
            return
        } else if (req.query.text.length > 280) {
            const result = { success: false, reason: "Too many characters! Maximum 280" }
            res.send(result)
            return
        }
        if (!index.dbsLoaded()) {
            const result = { success: false, reason: "Datasets still loading" }
            res.send(result)
            return
        }
        const check = await index.checkFull(req.query.text, 1)
        res.send(check)
    });

}