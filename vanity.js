const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
const words = require('an-array-of-english-words');

//creating vanity_numbers table

var dynamodb = new AWS.DynamoDB();
var params = {
    TableName: "Vanity_Numbers",
    KeySchema: [
        { AttributeName: "phone", KeyType: "HASH" },  //Partition key
        { AttributeName: "vanity_number", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "phone", AttributeType: "S" },
        { AttributeName: "vanity_number", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10

    }
};

const createTable = (number) => {
    dynamodb.listTables({ Limit: 0 }, function (err, data) {
        if (err) {
            console.log("Error", err.code);
        } else {
            dynamodb.createTable(params, function (err, data) {
                if (err) {
                    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                    return false;
                } else {
                    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                }
            });
        }
    });
};


function traverseArray(phoneNumber, func) {
    let result = '';
    result += func(phoneNumber);
    console.log(result);
}

// var phoneNumber = event['sessionState']['sessionAttributes']['InboundCallerID'];

const number = '07932326089';

const validateNumber = (number) => {
    // This expression matches valid, ten digit US phone numbers
    var validPhoneNumber = /\s*(([+](\s?\d)([-\s]?\d)|0)?(\s?\d)([-\s]?\d){9}|[(](\s?\d)([-\s]?\d)+\s*[)]([-\s]?\d)+)\s*/

    if (!number) {
        throw Error('Phone number was null or undefined.');
    }

    if (!number.match(validPhoneNumber)) {
        throw Error('Invalid phone number.');
    }

    return true
};

const vanity = (phoneNumber) => {
    vanityArray = [];

    const firstSix = number.slice(0, 6);
    const lastFour = number.slice(6).split('');

    const keyPad = new Map([
        ['0', '0'],
        ['1', '1'],
        ['2', 'ABC'],
        ['3', 'DEF'],
        ['4', 'GHI'],
        ['5', 'JKL'],
        ['6', 'MNO'],
        ['7', 'PQRS'],
        ['8', 'TUV'],
        ['9', 'WXYZ'],
    ]);

    const charOne = keyPad.get(lastFour[0]).split('');
    const charTwo = keyPad.get(lastFour[1]).split('');
    const charThree = keyPad.get(lastFour[2]).split('');
    const charFour = keyPad.get(lastFour[3]).split('');


    for (let i = 0; i < charOne.length; i++) {
        for (let j = 0; j < charTwo.length; j++) { // 
            for (let k = 0; k < charThree.length; k++) {
                for (let l = 0; l < charFour.length; l++) {
                    const phoneWord = charOne[i] + charTwo[j] + charThree[k] + charFour[l];
                    const vanityNumber = firstSix + phoneWord;
                    if (vanityArray.length < 5) { // if smaller we will push it anyway so at least we have a vanity number 
                        vanityArray.push(vanityNumber);
                    } else if (words.includes(phoneWord.toLowerCase())) {  // if not smaller than 5 we will only add it if it is a word 
                        vanityArray.push(vanityNumber);
                    }
                }
            }
        }
    }

    var docClient = new AWS.DynamoDB.DocumentClient();

    // add items to table 

    for (let i = 0; i < 5; i++) {

        var phone = {
            TableName: "Vanity_Numbers",
            Item: {
                "phone": phoneNumber,
                "vanity_number": vanityArray[i],
            }
        };

        console.log("Adding  a vanity number...");
        docClient.put(phone, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }
    vanityArray = vanityArray.slice(-5); //only consider the last 5 (or fewer) elements added
    return vanityArray;
};



if (validateNumber(number)) {
    createTable();
    traverseArray(number, vanity);
}

