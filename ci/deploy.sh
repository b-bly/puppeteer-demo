#!/bin/bash
# Deploy pub sub
bash ./cloud/deployPuppeteerController.sh
gcloud pubsub topics create $TOPIC_ID
gcloud pubsub subscriptions create $SUB_ID --topic=$TOPIC_ID
