import express from 'express';
import { pullMessage } from './pubService';

const app = express();
// TODO: Set as env
const port = 8080;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// async function retryPullMessage(projectId: string, subscription: string, i = 10) {
//   try {
//     const message = await pullMessage('node-kubernetes-349713', 'puppeteer-sub')
//     if (message === null) {
//       return retryPullMessage(projectId, subscription, --i);
//     }
//     return message
//   } catch {
//     return retryPullMessage(projectId, subscription, --i);
//   }
// }

async function cycle() {
  while(true) {
    // project, sub_id
    const message = await pullMessage('node-kubernetes-349713', 'puppeteer-sub')
    if (message === null) {
      process.exit(0)
      return false
    }
    // start google search
    console.log("Got message:")
    console.log(message)
  }
}

cycle();
