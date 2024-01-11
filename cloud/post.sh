curl -X POST https://us-central1-node-kubernetes-349713.cloudfunctions.net/puppeteer-controller/search-terms \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Authorization: Bearer $BEARER_TOKEN" \
   -d '{"searchTerms": "hello1,hello2"}'
