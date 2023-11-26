#!/bin/bash
bash ./cloud/deployPuppeteerController.sh
gcloud pubsub topics create $TOPIC_ID
gcloud pubsub subscriptions create search-term-sub --topic=$TOPIC_ID
gcloud pubsub subscriptions create $SUB_ID --topic=$TOPIC_ID
