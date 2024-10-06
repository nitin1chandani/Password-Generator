Password Generator
Welcome to the Password Generator! This simple app allows you to generate secure passwords with customizable length, numbers, and special characters.

Key Features:
Adjustable password length (6-50 characters).
Option to include numbers and special characters.
"Copy to Clipboard" functionality with confirmation message.
Optimization:
The password generation logic is optimized using React's useCallback hook. This ensures that the passwordGenerator function is only re-created when dependencies like isNumberAllowed, isCharAllowed, or length change, improving performance by preventing unnecessary re-renders.

Enjoy generating strong and secure passwords!
