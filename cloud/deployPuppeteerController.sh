#!/bin/bash

gcloud functions deploy puppeteer-controller \
--gen2 \
--region=us-central1 \
--runtime=nodejs18 \
--source=./puppeteer-controller \
--entry-point=puppeteerController \
--trigger-http
