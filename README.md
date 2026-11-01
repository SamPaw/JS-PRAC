# JavaScript Lab Manual — Simplified Syllabus-Compliant Source Code Repository

This directory (`js_simple_code`) contains simplified, student-friendly, and **100% syllabus-verified** implementations of **all 12 Practicals** and **all Practice Questions / Assignments** based on the *Basics of JavaScript (CSE00390) / Client Side Scripting (CSS 22519)* syllabus lecture notes (`JS THEORY.pdf`).

### Verification & Syllabus Alignment Notes:
- **Strictly In-Syllabus:** Every out-of-syllabus feature (such as ES6 `for...of` loops, arrow functions `=>`, `document.querySelectorAll()`, `classList`, `addEventListener()`, `e.preventDefault()`, `.includes()`, and Node.js-specific `process.stdout.write`) has been converted into standard, simple, syllabus-compliant JavaScript constructs.
- **Student-Centric Simplicity:** Standard indexed `for` loops, classical DOM methods (`getElementById`, `getElementsByName`, `getElementsByClassName`), and traditional DOM Level 0 event handling are used throughout.
- **Identical Functionality:** All conversions strictly maintain 100% of the original functionality, output, and behavior.
- **Execution Ready:** All `.html` files run directly in modern web browsers; all 27 `.js` files execute without errors in Node.js.

- Every file is self-descriptive so you can immediately tell what it does.
- All `.html` files can be opened directly in any web browser (Chrome, Firefox, Edge).
- All `.js` files can be executed directly in terminal via Node.js (`node <filename>.js`).
- Comments are kept bare-minimum and the code is written cleanly and simply.

---

## Complete File Directory and Mapping

### Practical 1: Arithmetic Expressions, Message Printing, Decisions, and Loops
- **`practical_01_main_arithmetic_decision_loops.html`** / **`.js`**: Demonstration of arithmetic operators (+, -, *, /, %), message printing (`document.write`, `console.log`), decision making (`if-else`, `switch`), and loops (`for`, `while`, `do-while`).
- **`practical_01_q1_calculate_area_of_circle.html`** / **`.js`**: Calculate the area of a circle given radius ($A = \pi \times r^2$).
- **`practical_01_q2_check_even_or_odd.html`** / **`.js`**: Check whether a number is even or odd using modulus and `if-else`.
- **`practical_01_q3_multiplication_table.html`** / **`.js`**: Display the multiplication table of a given number using a `for` loop.
- **`practical_01_q4_factorial_using_loop.html`** / **`.js`**: Calculate and display the factorial of a number using a loop.
- **`practical_01_q5_largest_of_three_numbers_nested_if.html`** / **`.js`**: Determine the largest among three numbers using nested `if` statements.

---

### Practical 2: Array Functionalities and Functions
- **`practical_02_main_array_functions.html`** / **`.js`**: Demonstration of array creation, indexing, length, and array methods (`push`, `pop`, `shift`, `unshift`, `sort`, `reverse`, `indexOf`).
- **`practical_02_q1_display_array_elements.html`** / **`.js`**: Traverse and display all elements of an array using a loop.
- **`practical_02_q2_find_largest_element_in_array.html`** / **`.js`**: Find the largest element in an array of numbers.
- **`practical_02_q3_sum_and_average_of_array.html`** / **`.js`**: Calculate the sum and average of array elements.
- **`practical_02_q4_sort_array_ascending.html`** / **`.js`**: Sort numerical array elements in ascending order.
- **`practical_02_q5_search_element_using_indexOf.html`** / **`.js`**: Search for an element in an array using `indexOf()`.
- **`practical_02_q6_reverse_array_elements.html`** / **`.js`**: Reverse the order of elements in an array.
- **`practical_02_q7_push_pop_shift_unshift.html`** / **`.js`**: Insert and delete array elements using `push()`, `pop()`, `shift()`, and `unshift()`.

---

### Practical 3: String Operations and Functions
- **`practical_03_main_string_functions.html`** / **`.js`**: Demonstration of common string methods (`length`, `toUpperCase`, `toLowerCase`, `charAt`, `indexOf`, `substring`, `slice`, `replace`, `includes`, `trim`, `concat`).
- **`practical_03_q1_find_string_length.html`** / **`.js`**: Find and display the length of a string.
- **`practical_03_q2_convert_string_uppercase_lowercase.html`** / **`.js`**: Convert a string to both uppercase and lowercase.
- **`practical_03_q3_count_character_occurrences.html`** / **`.js`**: Count the occurrences of a specific character in a string.
- **`practical_03_q4_reverse_string.html`** / **`.js`**: Reverse a string character-by-character.
- **`practical_03_q5_check_palindrome_string.html`** / **`.js`**: Check whether a string is a palindrome.
- **`practical_03_q6_find_word_in_string.html`** / **`.js`**: Search for a specific word in a string using `indexOf()`.
- **`practical_03_q7_replace_word_in_string.html`** / **`.js`**: Replace a specific word inside a string using `replace()`.
- **`practical_03_q8_compare_two_strings.html`** / **`.js`**: Compare two strings for equality and alphabetical ordering.

---

### Practical 4: HTML Form Elements
- **`practical_04_main_all_html_form_elements.html`**: Comprehensive webpage with text, password, radio buttons, checkboxes, drop-down selection, and textarea with JavaScript value retrieval and display.
- **`practical_04_task1_textbox_and_password.html`**: Webpage demonstrating input and access for text boxes and password fields.
- **`practical_04_task2_radio_and_checkbox.html`**: Webpage demonstrating single-choice radio buttons and multi-choice checkboxes.
- **`practical_04_task3_dropdown_and_textarea.html`**: Webpage demonstrating drop-down selection lists and multi-line textarea inputs.

---

### Practical 5: JavaScript Form Events
- **`practical_05_main_form_events_demo.html`**: Event demonstration for `onclick`, `ondblclick`, `onfocus`, `onblur`, `onchange`, `oninput`, `onsubmit`, and `onreset`.
- **`practical_05_q1_student_registration_form.html`**: Student registration form handling submissions and displaying registered details.
- **`practical_05_q2_login_form.html`**: User login form with username and password validation on submission.
- **`practical_05_q3_feedback_form.html`**: Course feedback form using textboxes, radio buttons, checkboxes, and drop-down list.
- **`practical_05_q4_mandatory_fields_validation.html`**: Validation preventing form submission when mandatory fields are left blank.

---

### Practical 6: JavaScript Intrinsic Functions
- **`practical_06_main_intrinsic_functions_demo.html`**: Interactive demonstration of built-in functions: `alert()`, `prompt()`, `confirm()`, `parseInt()`, `parseFloat()`, and `isNaN()`.
- **`practical_06_q1_button_click_welcome_message.html`**: Display a welcome message using `alert()` when a button is clicked.
- **`practical_06_q2_textbox_focus_change_color.html`**: Change textbox background color on `onfocus` and revert on `onblur`.
- **`practical_06_q3_textbox_blur_display_message.html`**: Display a message when a text box loses focus (`onblur`).
- **`practical_06_q4_validate_name_not_empty_onsubmit.html`**: Form validation ensuring Name is not empty on submit.
- **`practical_06_q5_dropdown_onchange_display_value.html`**: Display the selected value of a drop-down list dynamically on `onchange`.

---

### Practical 7: Session and Persistent Cookies
- **`practical_07_main_session_and_persistent_cookies.html`**: Comprehensive cookie utility to set, read, and delete both session and persistent cookies.
- **`practical_07_demo_session_cookie.html`**: Creation and reading of session cookies that expire when browser session ends.
- **`practical_07_demo_persistent_cookie.html`**: Creation and deletion of persistent cookies with explicit expiration dates.
- **`practical_07_q1_alert_welcome_message.html`**: Welcome message using `alert()`.
- **`practical_07_q2_prompt_user_greeting.html`**: Accept user's name via `prompt()` and display a personalized greeting.
- **`practical_07_q3_confirm_user_continue.html`**: Prompt user with `confirm()` and branch actions based on response.
- **`practical_07_q4_prompt_sum_two_numbers.html`**: Accept two numbers with `prompt()` and calculate their sum.
- **`practical_07_q5_check_numeric_using_isNaN.html`**: Validate whether input is a valid number using `isNaN()`.

---

### Practical 8: Window Positioning and Child Windows
- **`practical_08_main_window_object_demo.html`**: Demonstration of `window.open()`, `window.resizeTo()`, `window.moveTo()`, `window.focus()`, and `window.close()`.
- **`practical_08_q1_open_child_window_dimensions.html`**: Open a child window with specified dimensions (400x300).
- **`practical_08_q2_resize_child_window.html`**: Resize an open child window using JavaScript (`resizeTo`).
- **`practical_08_q3_move_child_window.html`**: Move an open child window to a new screen coordinate using `moveTo`.
- **`practical_08_q4_close_child_window.html`**: Button in parent window to close the opened child window.
- **`practical_08_q5_open_multiple_child_windows.html`**: Open multiple child windows with different dimensions simultaneously.

---

### Practical 9: Form Validation Using Regular Expressions
- **`practical_09_main_regex_validation_demo.html`**: Complete regex validation suite for name, email, mobile, password, and PIN code.
- **`practical_09_q1_validate_student_name_regex.html`** / **`.js`**: Validate student name (only letters and spaces) using `/^[A-Za-z\s]+$/`.
- **`practical_09_q2_validate_email_regex.html`** / **`.js`**: Validate email format using regex pattern.
- **`practical_09_q3_validate_mobile_number_regex.html`** / **`.js`**: Validate 10-digit mobile number starting with 6-9 (`/^[6-9]\d{9}$/`).
- **`practical_09_q4_validate_password_regex.html`** / **`.js`**: Validate password (minimum 8 chars, at least 1 letter, at least 1 digit).
- **`practical_09_q5_registration_form_regex_validation.html`**: Complete registration form with full RegEx validation on submit.

---

### Practical 10: Rollover Effect
- **`practical_10_main_rollover_effects_demo.html`**: Overview demonstration of both image rollover and button rollover effects.
- **`practical_10_q1_image_rollover_onmouseover_onmouseout.html`**: Image source swap on `onmouseover` and reversion on `onmouseout`.
- **`practical_10_q2_button_hover_background_color.html`**: Button dynamic background color change on hover.
- **`practical_10_q3_display_different_image_on_hover.html`**: Swap and display alternative image on mouse hover.
- **`practical_10_q4_navigation_menu_rollover_effect.html`**: Navigation links with hover styling and rollover effects.
- **`practical_10_q5_multiple_images_gallery_rollover.html`**: Interactive multi-image gallery with individual hover rollover effects.

---

### Practical 11: Implementing Menus
- **`practical_11_main_menus_implementation_demo.html`**: Overview showing horizontal menu, vertical menu, and drop-down menu.
- **`practical_11_q1_college_horizontal_menu.html`**: Horizontal navigation menu specifically designed for a college website.
- **`practical_11_q2_vertical_navigation_menu.html`**: Vertical sidebar navigation menu with clean layout.
- **`practical_11_q3_javascript_dropdown_menu.html`**: Interactive drop-down menu toggled via JavaScript.
- **`practical_11_q4_navbar_home_about_courses_gallery_contact.html`**: Navigation bar with Home, About, Courses, Gallery, and Contact links.
- **`practical_11_q5_menu_hover_color_change.html`**: Menu items with dynamic color transitions on mouseover and mouseout.

---

### Practical 12: Status Bars and Webpage Protection
- **`practical_12_main_status_bar_and_protection_demo.html`**: All-in-one demo of status bar messaging and protection (right-click block, selection block).
- **`practical_12_q1_hyperlink_hover_custom_message.html`**: Display custom status message on hyperlink mouse hover.
- **`practical_12_q2_disable_right_click_context_menu.html`**: Disable right-click context menu on webpage.
- **`practical_12_q3_alert_on_right_click_attempt.html`**: Trigger an alert warning dialog when right-clicking.
- **`practical_12_q4_prevent_text_selection.html`**: Prevent text selection and highlighting using JavaScript (`onselectstart`).
- **`practical_12_q5_webpage_protection_techniques.html`**: Complete protection demo combining status messages, right-click block, selection block, and keyboard shortcut blocking (Ctrl+C, Ctrl+U, Ctrl+S).
