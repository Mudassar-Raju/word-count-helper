#! /usr/bin/env node

import inquirer from "inquirer"
// Declare a variable 'answer'

const answers:{
  sentence:string
}= await inquirer.prompt(
  [
    {
      name: "sentence",
      type: "input",
      message: "Enter Your Sentence to count the Word:"
    }
  ]
)

const words = answers.sentence.trim().split(" ")
//Print the Array
console.log(words);

//Print the word count of the sentence
console.log("YOUR SENTENCE WORD COUNT IS:",words.length)