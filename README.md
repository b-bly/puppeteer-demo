### Puppeteer Demo
Practice scaling a puppeteer app in GCP.

Architecture:

puppeteer-demo node app

    - runs container in a job.
    - can be scaled.
    - jobs can't have https endpoints

pubsub controller

    - for publishing messages
    - getting messages (in progress)

### TODO 
Replace pubsub with
https://cloud.google.com/tasks/docs/add-task-queue



### Cloudbuild

To build puppeteer-demo app from local

```
gcloud beta builds submit --region=us-central1 --project=$PROJECT_ID --config cloudbuild.yaml
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

Create and execute a job for puppeteer-demo image with `/ci/job` scripts.


