source ../.env
gcloud config set project $PROJECT_ID
gcloud pubsub topics publish $TOPIC_ID --message="hello 1-4"
