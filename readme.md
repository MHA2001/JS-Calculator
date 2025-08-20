# Simple Calculator

A fully functional web-based calculator built using vanilla JavaScript, HTML, and CSS.

---

## Purpose of the Project
This project was a challenge to recreate a simple calculator application from scratch without relying on any external libraries. The goal was to build a clean, responsive, and interactive user interface while implementing the core logic for mathematical operations.

## Technology Stack
- **Front-End:** Vanilla JavaScript (ES6+), HTML5, CSS3

---

## Features
* **Basic Arithmetic:** Supports addition (+), subtraction (-), multiplication (*), and division (÷).
* **Order of Operations:** The logic processes operations in the order they are entered, allowing for chained calculations.
* **Clear and Delete:** Includes "AC" (All Clear) and "DEL" (Delete) buttons for easy input correction.


---

## Important Decisions
* **Separation of Concerns:** The core calculator logic is contained in a `Calculator` class (`Calculator.js`), which is separate from the event handling and DOM manipulation in `script.js`. This makes the code more modular and easier to test.
* **Data Attributes:** I used `data-*` attributes in the HTML to identify the different buttons and display areas. This provides a clean way to connect the HTML elements to the JavaScript logic without relying on specific class names or IDs.
* **CSS Grid:** The layout of the calculator is managed using CSS Grid, which is a powerful and modern way to create a responsive and well-aligned grid-based UI.

---

## Problems & Solutions

### Roadblock: Displaying the correct output.
* **Problem:** Handling the display of both the primary and secondary operands, as well as the selected operation, required a careful approach to state management.
* **Solution:** I created a `Calculator` class with properties to hold the `primaryOperand`, `secondaryOperand`, and `operation`. The class also has getter and setter methods that update the HTML display whenever these properties are changed, ensuring the UI always reflects the internal state of the calculator.

---

## Future Enhancements
* Add support for more advanced functions like exponents, square roots, and percentages.
* Implement keyboard support for input.
* Include a history log to show previous calculations.
* Improve the visual design with animations and more polished styling.