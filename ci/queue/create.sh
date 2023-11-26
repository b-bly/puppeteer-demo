 gcloud tasks queues create my-queue --location=$LOCATION
export PROJECT_ID=$PROJECT_ID # The project ID from above
export LOCATION_ID=$LOCATION_ID # The region in which your queue is running
export QUEUE_ID=$QUEUE_ID # The queue you created above
node createTask.js $PROJECT_ID $QUEUE_ID $LOCATION_ID hello 