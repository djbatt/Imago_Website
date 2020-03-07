var AWS = require("aws-sdk")
var ses = new AWS.SES()

var RECEIVER = "contact@sourcarva.com"
var SENDER = "contact@sourcerva.com"

var response = {
  isBase64Encoded: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Max-Age": "86400",
  },
  statusCode: 200,
  body: '{"result": "Success."}',
}

exports.handler = function(event, context) {
  console.log("Received event:", event)
  sendEmail(event, function(err, data) {
    context.done(err, null)
  })
}

function sendEmail(event, done) {
  var formData = event
  var params = {
    Destination: {
      ToAddresses: [RECEIVER],
    },
    Message: {
      Body: {
        Text: {
          Data:
            "First Name: " +
            formData.firstName +
            "\n\n\nLast Name: " +
            formData.lastName +
            "\n\n\nEmail Address: " +
            formData.emailAddress +
            "\n\n\nHow did you find Source?: " +
            formData.survey +
            "\n\n\nWhat's your business name?: " +
            formData.businessName +
            "\n\n\nWhat are your long and short term goals?: " +
            formData.goals +
            "\n\n\nWhat products or services do you offer?: " +
            formData.products +
            "\n\n\nWho is your ideal client or customer?: " +
            formData.customer,
          Charset: "UTF-8",
        },
      },
      Subject: {
        Data: "Website Referral Form: Source",
        Charset: "UTF-8",
      },
    },
    Source: SENDER,
  }
  ses.sendEmail(params, done)
}

return response
