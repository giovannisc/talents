import AWS from "../../libs/aws-sdk";
import config from "../../config";

export async function main(event, context) {
  const { profession, candidateId } = JSON.parse(event.body);
  const profession = profession==='engineer'?True:False;

  const sns = new AWS.SNS();
  await sns
    .publish({
      Message: JSON.stringify({ validation, candidateId }),
      MessageStructure: "string",
      TopicArn: process.env.topicArn,
    })
    .promise();

  return success({ status: true });

  return { status: true };
}
