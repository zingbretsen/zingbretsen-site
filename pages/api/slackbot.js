import { App } from '@slack/bolt';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command('/ping', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();

  // Your code here
  await say('pong');
});

export default async (req, res) => {
  if (req.method === 'POST') {
    await app.receiver.acknowledge(req, res);
  } else {
    res.status(405).send('Method not allowed');
  }
};