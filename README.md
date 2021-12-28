# Vanity-Numbers 

####  A small size scale app that holds the code used in an amazon connect lambada.

-The amazon connect store will receive an incoming call from a user and will use the lambada code shown in the file vanity.js
to convert the code to 5 vanity numbers and save them to a DynamoDB table.

-numbers are being created in ascending word order, the reason for that is that it is easier to
type numbers that have letters that are close to each other on the keypad.

- The working amazon connect phone number is +44 800 048 8917.

- Once the caller calls he is directed using the workflow.

- The lambada function is invoked and access to the caller number is achieved by calling the global variable $.CustomerEndpoint.Address;

-The lambada returns a  resultMap 
 var resultMap = {
        phone:number,
        vanityNunmOne:vanityArray[0],
        vanityNunmTwo:vanityArray[1],
        vanityNumThree:vanityArray[2],
    }
    
- the next play prompt in the contact flow will read out 3 vanity numbers to the caller using the global variables.
    
    your vanity numbers are
phone - $.External.phone
vanity number one  - $.External.vanityNunmOne
Vanity number two - $.External.vanityNunmTwo
Vanity Number three  $.External.vanityNumThree

Reasons for choosing the solution
1)converting only 4 digits to a word takes fewer resources and the caller is on the line for less time.

2)ordering the words in ascending order makes it faster to type.

3)implementing four for loops made the code shorter.


- I initially struggled with the amazon interface, it took me time to realize that to get to the contact workflows I need to press the link to the 
  user's personal connect interface.
- I checked locally that my Lambada function works, it created vanity numbers and it saves them to the DynamoDB table.
- I embedded the Lambada function into the workflow but I currently and have made it return an object key pair with the phone number and vanity numbers
  I was not able to male the server says out the vanity numbers and I probably need more time to configure it correctly.


### Testing

- use of jtest

## Author

👤 **Erez Friemagor**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/erezfree29)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></code>](https://twitter.com/friemagor?lang=en)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/erez-friemagor/?originalSubdomain=uk)
<a href="mailto:erezfree29@gmail.com?subject=Hey Erez!"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>
