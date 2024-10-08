---
sidebar_label: 'My Mastermind'
sidebar_position: 3
description: A complete guide to the Game Guessing Program - a fun and challenging game where players guess a series of unique numbers from 0 to 8.
---

# Game Guessing Program Documentation

Welcome to the **Game Guessing Program**! This program challenges users to guess a series of unique numbers from `0` to `8`. Below you'll find everything you need to know about how the program works, the rules, and how to use it effectively.

## 🚀 Features

- **Supports input flags**: The program supports two input flags, `-c` and `-t`, which can be used simultaneously and in any order.
- **Unique game pieces**: The guessing game uses digits from `0 to 8`. Each number in the guess is unique.
- **Input validation**: The program ensures that only valid guesses are accepted. It checks for non-digit inputs, the correct length of guesses, and ensures there are no duplicate digits.
- **Graceful Exit**: You can gracefully exit the program at any time by pressing `Ctrl + D`.

## 📝 Game Rules

1. **Unique Game Pieces**: The game only uses 9 unique digits (`0 to 8`). No two digits can be the same in a single guess.
2. **Guess Length**: Each guess must contain exactly the right number of digits. Guesses that are too long or too short will not be accepted.
3. **Valid Inputs Only**: The game will only accept guesses that consist of digits between `0` and `8`. Any guess that includes other characters or duplicates will be rejected.
4. **Feedback on Incorrect Input**: If you make an incorrect guess (e.g., using digits outside the valid range or making the guess too long/short), the game will notify you but will not advance the round number.

## ⚙️ Program Behavior

### 🎮 Input Flags

- The `-c` flag enables a specific configuration mode.
- The `-t` flag enables testing mode.
- Both flags can be used **simultaneously and in any order**, allowing flexibility in how you configure and test the game.

### ⏹ Graceful Exit

Press `Ctrl + D` at any time to exit the program without crashing or advancing the round. This provides a clean exit, ensuring that the game ends properly.

### ✅ Guess Validation

The game carefully checks each guess. Here’s what makes a guess invalid:

- The guess includes characters other than digits from `0 to 8`.
- The guess is too long or too short.
- There are duplicate digits in the guess.

If any of these conditions are met, the program will alert you to the issue, and the round will not advance.

### 🏆 Correct Guess Display

Although not strictly required, the correct guess will be displayed at the end of the game for ease of testing. This makes it easier for you to verify the correct answer.

## 🧑‍💻 Code Structure Guidelines

> **Note**: While we are lenient on the "max 20 lines per function" rule, functions should still be logically separated for readability.

- **Separation of Concerns**: Avoid excessively long functions (e.g., 100+ lines) or back-to-back loops in a single function. Any logic that can be separated into its own function should be moved accordingly.
- **Avoid Duplication**: Keep functions focused and reusable. If a section of your code can be extracted into a separate function, it should be.

## ⚠️ Error Handling

1. **Non-digit Input**:  
   The program will reject any input that contains characters other than digits `0 to 8`.

2. **Incorrect Length**:  
   If the guess is too long or too short, it will be rejected, and the program will prompt you to input a valid guess.

3. **Duplicate Digits**:  
   Guesses with repeated digits (e.g., `1233`) are considered invalid and will be rejected.

:::danger

 **Makefile** must start with capital letter M.

:::

## 🛠️ Example Usage

Here’s an example of how to run the game with flags:

```bash
./my_mastermind -c -t
