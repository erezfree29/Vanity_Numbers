# Vanity-Numbers 

####  A small size scale app that holds the code used in an amazon connect lambada.

-The amazon connect store will receive an incoming call from a user and will use the lambada code shown in the file vanity.js
to convert the code to 5 vanity numbers and save them to a DynamoDB table.

-numbers are being created in ascending word order,the reason for that is that it is easier to
type numbers that have letters that are close to each other on the keypad.

- The working amazon connect phone number is +44 800 048 8722.

- Once the caller calls he is directed using the workflow.

- The lambada function is invoked and access to the caller number is achieved by calling the global variable $.CustomerEndpoint.Address;

-The lambada returns a  resultMap 
 var resultMap = {
        phone:number,
        vanityNunmOne:vanityArray[0],
        vanityNunmTwo:vanityArray[1],
        vanityNumThree:vanityArray[2],
    }
    
- the next play prompt in the contact flow  will read out 3 vanity numbers to the caller using the global variables.
    
    your vanity numbers are
phone - $.External.phone
vanity number one  - $.External.vanityNunmOne
Vanity number two - $.External.vanityNunmTwo
Vanity Number three  $.External.vanityNumThree

Personal reflection

- I chose a solution becasue 
1)convering only 4 digits to a word takes less resources and and the caller on the line for less time,
2)ordering the words in acsending order makes to faster to type.
3)implementing four for loops made the code shorter.

- I initally struggled with the amazon interface , it took me time to realize that in order to get to the contact workflows I need to press the link to the 
user's personal connect interface.












    
    
    
    



-














https://api.tvmaze.com 

likes and comments are then being posted to an involvement API

https://us-central1-involvement-api.cloudfunctions.net/capstoneApi (for which we have created a dedicated app)

lastly likes and comments are being fetched back to the client from the involvement API

#### The app demonstrates the use of NPM, Webpack, and Javascript and, Javascript API

## Built with

-   Java scrtipts ES6
-   NPM
-   WEBPACK
-   HTML
-   CSS
-   VScode
-   Lots of love :heart:

### Installation

To run the project on your local machine, please run the following commands on your terminal:

> 1. run `git clone https://github.com/erezfree29/Movies-site/`
> 2. run `cd Movies-site`
> 3. Open the index.html file with your browser

if you wish to edit the code for the project to take effect.

> 1.install nodeJs on your local machine 
[NodeJs Installation](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

> 2. install webpack on your local machine
[Webpack Installation](https://webpack.js.org/guides/installation/)

> 3.run npm run watch and make live changes

### Testing

- use of jtest to install please see

[Jtest Installation](https://www.howtoinstall.me/ubuntu/18-04/jstest-gtk/)


## Author

👤 **Erez Friemagor**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/erezfree29)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></code>](https://twitter.com/friemagor?lang=en)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/erez-friemagor/?originalSubdomain=uk)
<a href="mailto:erezfree29@gmail.com?subject=Hey Erez!"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues](https://github.com/erezfree29/Movies-site/issues)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

-   Microverse
-   The Odin Project

## 📝 MIT License

This project makes use of the MIT license.
