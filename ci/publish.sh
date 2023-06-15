source ../.env
gcloud config set project $PROJECT_ID
gcloud pubsub topics publish search-term --message="hello"
