# apple-checker

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