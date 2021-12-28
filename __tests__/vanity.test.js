const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
const words = require('an-array-of-english-words');
var dynamodb = new AWS.DynamoDB();
var number = '07792326089'



describe("test create table", () => {
    // test stuff
    test("it should not create a table in case that a table was already created", () => {
       expect(createTable(number)).toBe(undefined);
      });
  });

  describe("test validate number", () => {
    // test stuff
    test("it should return false for an invalid number", () => {
       expect(validateNumber('079323')).toBe(false);
      });
      test("it should return true for a valid number", () => {
        expect(validateNumber('07932326089')).toBe(true);
       });
  });

  const createTable = (number) => {
    dynamodb.listTables({ Limit: 0 }, function (err, data) {
        if (err) {
            return false;
        } else {
            dynamodb.createTable(params, function (err, data) {
                if (err) {
                    return false;
                } else {
                    return true;
                }
            });
        }
    });
};




const validateNumber = (number) => {
    // This expression matches valid, ten digit US phone numbers
    var validPhoneNumber = /\s*(([+](\s?\d)([-\s]?\d)|0)?(\s?\d)([-\s]?\d){9}|[(](\s?\d)([-\s]?\d)+\s*[)]([-\s]?\d)+)\s*/

    if (!number) {
        throw Error('Phone number was null or undefined.');
    }

    if (!number.match(validPhoneNumber)) {
        return false
        throw Error('Invalid phone number.');
        
    }

    return true
};
























//  