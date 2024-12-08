# React Native: TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common error in React Native applications: `TypeError: Cannot read properties of undefined (reading 'property')`.  This error typically arises when attempting to access a property of an object that is null or undefined.

## Problem
The `bug.js` file illustrates the problem.  It attempts to access properties of an object before verifying that the object and its properties exist.

## Solution
The `bugSolution.js` file provides a solution using optional chaining (`?.`) to safely access properties. Optional chaining short-circuits the evaluation if a part of the chain is null or undefined, preventing the error.

## How to Run
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your emulator or device. 