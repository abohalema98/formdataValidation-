# formdataValidation
There are many ways to validate data in Node.js like Express-validator,
 Express-validator is a library which wraps around validator.js and exposes its functions as a set of middlewares,in this library we can use many validator methods like : 
 
 isEmail(): This validator function checks if the incoming string is a valid email address.
 
 isLength(): This validator checks if the length of a string falls in a specified range. In our case, the range specified is a minimum of 6 characters.
 
 isNumeric(): Checks if the input is numeric.
 
 contains(): Checks if the input contains a certain value.
 
 isBoolean(): Check is the input is a boolean value0
 
 isCurrency(): Checks if the input is currency-formatted.
 
 isJSON(): Checks if the input is JSON.
 
 isMobilePhone(): Checks is the input is a valid mobile phone number.
 
 isPostalCode(): Checks if the input is a valid postal code.
 
 isBefore() and isAfter() Checks if a date is before or after another date.
