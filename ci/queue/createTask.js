// https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/main/cloud-tasks/snippets/createTask.js

'use strict';

// sample-metadata:
//   title: Cloud Tasks Create App Engine Target
//   description: Create Cloud Tasks with a Google App Engine Target
//   usage: node createTask.js <projectId> <queueName> <location> <payload> <delayInSeconds>

/**
 * Create a task for a given queue with an arbitrary payload.
 */
function main(
  project = 'my-project-id', // Your GCP Project id
  queue = 'my-appengine-queue', // Name of your Queue
  location = 'us-central1', // The GCP region of your queue
  payload = 'Hello, World!', // The task HTTP request body
  inSeconds = 0 // Delay in task execution
) {
  // [START cloud_tasks_appengine_create_task]
  // Imports the Google Cloud Tasks library.
  const {CloudTasksClient} = require('@google-cloud/tasks');

  // Instantiates a client.
  const client = new CloudTasksClient();

  async function createTask() {
    // TODO(developer): Uncomment these lines and replace with your values.
    // const project = 'my-project-id';
    // const queue = 'my-appengine-queue';
    // const location = 'us-central1';
    // const payload = 'Hello, World!';

    // Construct the fully qualified queue name.
    const parent = client.queuePath(project, location, queue);

    const task = {
      appEngineHttpRequest: {
        headers: {
          'Content-Type': 'text/plain', // Set content type to ensure compatibility your application's request parsing
        },
        httpMethod: 'POST',
        relativeUri: '/log_payload',
      },
    };

    if (payload) {
      task.appEngineHttpRequest.body = Buffer.from(payload).toString('base64');
    }

    if (inSeconds) {
      // The time when the task is scheduled to be attempted.
      task.scheduleTime = {
        seconds: inSeconds + Date.now() / 1000,
      };
    }

    console.log('Sending task:');
    console.log(task);

    // Send create task request.
    const request = {parent: parent, task: task};
    const [response] = await client.createTask(request);
    const name = response.name;
    console.log(`Created task ${name}`);
  }

  createTask();
  // [END cloud_tasks_appengine_create_task]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
