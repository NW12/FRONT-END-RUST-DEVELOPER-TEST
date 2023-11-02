 # Task 1: ReactJS Component Development

JackpotLightController Component:
We have successfully created a React component named "JackpotLightController" to simulate the jackpot light controller.
The component visually displays a circle divided into 10 equal segments or slots.
Only one slot can be active at a time, and it is visually distinct from the others.
We've implemented a "Rotate" button that, when pressed, moves the active slot in a clockwise direction.
The component has been styled to be visually appealing and responsive to different screen sizes.

# Task 2: ReactJS Integration with a Rust Smart Contract

Rust Smart Contract:

A Rust smart contract has been developed to represent the jackpot's funds.
We have implemented the "addFunds" function, which takes an integer input and adds it to the "jackpotFunds" global variable.
We have also created a "getFunds" function to retrieve the current value of "jackpotFunds."
The Rust smart contract has been successfully built and deployed on a blockchain platform, ensuring its functionality.

# React Interface:

A React component named "JackpotFundsController" has been created to interact with the Rust smart contract.
The component displays the current jackpot funds, initially set to 0.
It features an input field to enter an integer amount for adding funds and a "Add Funds" button.
When the "Add Funds" button is clicked, the entered amount is added to the "jackpotFunds" using the "addFunds" function from the Rust smart contract.
The updated jackpot amount is displayed to the user.
With these completed tasks, we have successfully implemented the core functionality of the jackpot system. The React components provide a user-friendly interface for controlling the jackpot, and the Rust smart contract ensures secure and transparent management of jackpot funds.