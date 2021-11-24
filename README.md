# Apple Product Availability Checker
A bot deployed to AWS Cloud to remind you when the new Apple product is available to buy at your region

If you'd like to talk about Apple or share your Apple setup with us, you're welcomed to join [Apple Malaysia Discord](discord.gg/bmcrbupgbd)

![stepfunctions_graph (3)](https://user-images.githubusercontent.com/762914/143175750-dda2f3d6-bb8d-4e94-a437-2a261c8f6bf8.png)


## Folder structure
This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders:

- functions - Code for the application's Lambda functions to check the value of, buy, or sell shares of a stock.
- statemachines - Definition for the state machine that orchestrates the stock trading workflow.
- template.yaml - A template that defines the application's AWS resources.

## How to build and deploy
1. cd to root directory
2. `yarn build` (don't use `sam build`)
3. `yarn deploy`

## How to hot-build
1. `yarn watch` in root directory

## Limitations
The cost of running a 15s express state machine on AWS is quite high. The potential mitigation is to remove the 15s `Wait` state and use a SQS queue instead.
