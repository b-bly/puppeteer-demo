### Puppeteer Demo
Practice scaling a puppeteer app in GCP.

### Cloudbuild

To run locally

```
gcloud beta builds submit --region=us-central1 --project=<project-id> --config cloudbuild.yaml
```

### Deploy 

```
gcloud app deploy --project $PROJECT_ID
```
