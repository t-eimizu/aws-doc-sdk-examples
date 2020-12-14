/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-managing-identities.html.

Purpose:
ses_deleteidentity.ts demonstrates how to delete an Amazon SES identity.

Inputs (replace in code):
- REGION
- IDENTITY_TYPE
- IDENTITY_NAME

Running the code:
ts-node ses_deleteidentity.ts
*/
// snippet-start:[ses.JavaScript.identities.deleteIdentityV3]
// Import required AWS SDK clients and commands for Node.js
const { SESClient, DeleteIdentityCommand } = require("@aws-sdk/client-ses");

// Set the AWS Region
const REGION = "REGION"; //e.g. "us-east-1"

// Set the parameters
const params = {
  IdentityType: "IDENTITY_TYPE", // IDENTITY_TYPE - i.e., 'EmailAddress' or 'Domain'
  Identity: "IDENTITY_NAME",
}; // IDENTITY_NAME

// Create SES service object
const ses = new SESClient({ region: REGION });

const run = async () => {
  try {
    const data = await ses.send(new DeleteIdentityCommand(params));
    console.log("Identity Deleted");
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
// snippet-end:[ses.JavaScript.identities.deleteIdentityV3]

