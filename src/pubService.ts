const { PubSub, message } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

// export function listenForMessages(subscriptionNameOrId: string, timeout = 20) {
//   // References an existing subscription
//   const subscription = pubSubClient.subscription(subscriptionNameOrId);

//   // Create an event handler to handle messages
//   let messageCount = 0;
//   const messageHandler = (msg: typeof message) => {
//     console.log(`Received msg ${msg.id}:`);
//     console.log(`\tData: ${msg.data}`); // has the message value
//     console.log(`\tAttributes: ${msg.attributes}`);
//     messageCount += 1;
//   };

//   // Listen for new messages until timeout is hit
//   subscription.on('message', messageHandler);

//   // Wait a while for the subscription to run. (Part of the sample only.)
//   setTimeout(() => {
//     // subscription.removeListener('message', messageHandler);
//     console.log(`${messageCount} message(s) received.`);
//   }, timeout * 1000);
// }

// pub sub examples https://www.npmjs.com/package/@google-cloud/pubsub
// Modified from https://github.com/googleapis/nodejs-pubsub/blob/main/samples/synchronousPull.js
const { v1 } = require('@google-cloud/pubsub');

// Creates a client; cache this for further use.
const subClient = new v1.SubscriberClient();

export async function pullMessage(
  projectId = 'node-kubernetes-349713',
  subscriptionNameOrId: string
) {
  // The low level API client requires a name only.
  const formattedSubscription =
    subscriptionNameOrId.indexOf('/') >= 0
      ? subscriptionNameOrId
      : subClient.subscriptionPath(projectId, subscriptionNameOrId);

  // The maximum number of messages returned for this request.
  // Pub/Sub may return fewer than the number specified.
  const request = {
    subscription: formattedSubscription,
    maxMessages: 1,
  };

  // The subscriber pulls a specified number of messages.
  const [response] = await subClient.pull(request);
  if (response.receivedMessages.length > 0) {

    const ackIds = response.receivedMessages[0].ackId;
    const ackRequest = {
      subscription: formattedSubscription,
      ackIds: [ackIds],
    };
    await subClient.acknowledge(ackRequest);
    return response.receivedMessages[0].message.data.toString();
  } else {
    return null;
  }
}
