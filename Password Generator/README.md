# Password Generator

A simple random password generator built with **HTML**, **CSS**, and **JavaScript**, featuring adjustable length and click-to-copy functionality.

## Preview

The app generates two independent random passwords at once, lets you set a custom length between 8 and 16 characters, and copies a password to your clipboard with a single click.

## Features

- Generates two random passwords simultaneously from letters, numbers, and symbols
- Adjustable password length (8-16 characters), with automatic clamping if an invalid number is entered
- Click-to-copy — clicking a generated password copies it to the clipboard using the Clipboard API
- Visual "Copied!" confirmation that briefly replaces the password text after copying
- Clean dark-themed design with custom Google Font (`Inter`)

## Tech Stack

- HTML5
- CSS3 (Flexbox, custom fonts, hover states)
- JavaScript (DOM manipulation, event listeners, `Math.random()`, Clipboard API)

## Project Structure

```
random-password-gener-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Live Demo

[View Live](https://random-password-gener-app.netlify.app)

## Author

**Rabiyathul Basariya A**

Frontend Developer

---

*This project helped me practice working with arrays, random number generation, input validation, and the browser's Clipboard API.*
