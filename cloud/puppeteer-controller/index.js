const functions = require('@google-cloud/functions-framework');
const publishMessage = require('./pubSubService');

functions.http('puppeteerController', (req, res) => {
  console.log(req.url) // /path
  if (/search-terms/.test(req.url)) {
    // upload search terms to pubsub
    // req.body should be search terms separated by a ','
    const topicNameOrId = 'search-term';
    console.log(req.body)
    req.body.split(',').forEach((searchTerm) => {
      publishMessage(topicNameOrId, searchTerm)
    })
    return res.send(200)
  } else if (/scale-up/.test(req.url)) {
    // scale up puppeteer job
    return res.send(200)

  } else {
    res.statusCode = 404
    res.send(`Cannot find path: ${req.url}`)
  }

  res.sendStatus(500)
});

