### Puppeteer Demo
Practice scaling a puppeteer app in GCP.

### Cloudbuild

To run locally

```
gcloud beta builds submit --region=us-central1 --project=<project-id> --config cloudbuild.yaml
```

### Deploy 

Create controller and pub sub with

```
./ci/deploy.sh
```

Publish messages with controller endpoint.  Get the url from the gcp console > cloud functions > puppeteer-controller .

POST 
<controller-url>/search-term
body = string of search terms separated by commas. Example: "foo,bar,"
BEARER_TOKEN=$(gcloud auth print-identity-token)

Create and execute a job with `/ci/job` scripts.
