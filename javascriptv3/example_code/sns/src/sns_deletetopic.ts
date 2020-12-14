/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sns-examples-managing-topics.html.

Purpose:
sns_deletetopic.ts demonstrates how to delete an Amazon SNS topic and all its subscriptions.

Inputs (replace in code):
- REGION
- TOPIC_ARN

Running the code:
ts-node sns_deletetopic.ts
 */
// snippet-start:[sns.JavaScript.topics.deleteTopicV3]
// Load the AWS SDK for Node.js

// Import required AWS SDK clients and commands for Node.js
const { SNSClient, DeleteTopicCommand } = require("@aws-sdk/client-sns");

// Create SNS service object
const sns = new SNSClient({ region: REGION });

// Set the AWS Region
const REGION = "REGION"; //e.g. "us-east-1"

// Set the parameters
const params = { TopicArn: "TOPIC_ARN" }; //TOPIC_ARN

const run = async () => {
  try {
    const data = await sns.send(new DeleteTopicCommand(params));
    console.log("Topic Deleted");
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
// snippet-end:[sns.JavaScript.topics.deleteTopicV3]

