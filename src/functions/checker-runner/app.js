import AWS from "aws-sdk";
const stepfunctions = new AWS.StepFunctions({ apiVersion: "2016-11-23" });

export const handler = (event, context) => {
  const params = {
    stateMachineArn: process.env.stateMachineArn,
    input: JSON.stringify(event),
  };

  stepfunctions.startSyncExecution(params, function (err, data) {
    if (err) console.error(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
