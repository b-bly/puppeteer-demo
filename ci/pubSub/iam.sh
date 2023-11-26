ROLE1=roles/pubsub.publisher
ROLE2=roles/pubsub.subscriber
# This document explains how to specify a Batch job's service account, which influences the 
# resources and applications that a job's VMs can access. If you don't specify a custom service 
# account, jobs default to using the Compute Engine default service account, which is automatically 
# attached to all VMs in a project by default. 

# Not working.  Had to manually add.
gcloud projects add-iam-policy-binding $PROJECT_ID --member="user:$COMPUTE_ENGINE_EMAIL_ADDRESS" --role=$ROLE1
gcloud projects add-iam-policy-binding $PROJECT_ID --member="user:$COMPUTE_ENGINE_EMAIL_ADDRESS" --role=$ROLE2
