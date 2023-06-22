#!/bin/bash
bash ./cloud/deployPuppeteerController.sh
gcloud pubsub topics create $TOPIC_ID
