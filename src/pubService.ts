const { PubSub, message } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

// interface message {
//   id: number;
//   data: string;
//   attributes: string;
// }

export function listenForMessages(subscriptionNameOrId: string, timeout = 20) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = (msg: typeof message) => {
    console.log(`Received msg ${msg.id}:`);
    console.log(`\tData: ${msg.data}`); // has the message value
    console.log(`\tAttributes: ${msg.attributes}`);
    messageCount += 1;
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
