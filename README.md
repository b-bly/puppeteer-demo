### Puppeteer Demo
Practice scaling a puppeteer app in GCP.

### Cloudbuild

To run locally

```
gcloud beta builds submit --region=us-central1 --project=<project-id> --config cloudbuild.yaml
```

### Deploy 

To app engine: https://cloud.google.com/run/docs/deploying#yaml

```
gcloud app deploy --project $PROJECT_ID
```

Deploy to cloud run 

```
gcloud run services replace cloud/service.yaml
```
