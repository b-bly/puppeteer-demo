const functions = require('@google-cloud/functions-framework');
const publishMessage = require('./pubSubService');

functions.http('puppeteerController', async (req, res) => {
  console.log(req.url) // /path
  if (/search-terms/.test(req.url)) {
    // upload search terms to pubsub
    // req.body should be search terms separated by a ','
    const topicNameOrId = 'search-term';
    console.log(req.body)
    try {
      await Promise.all(req.body.searchTerms.split(',').map((searchTerm) => {
        publishMessage(topicNameOrId, searchTerm)
      }))
    } catch (e) {
      return res.sendStatus(500)
    }
    return res.sendStatus(200)
  } else if (/scale-up/.test(req.url)) {
    // scale up puppeteer job
    return res.sendStatus(200)

  } else {
    res.statusCode = 404
    res.send(`Cannot find path: ${req.url}`)
  }

  res.sendStatus(404)
});

