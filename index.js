let express = require('express');
let app = express();
const body_parser = require('body-parser');
const port = 2200;
const { body, validationResult } = require('express-validator');


app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());



app.post('/login',
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    }).withMessage("all of above is requierd ")
    , (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
        })
    });



app.listen(port)
console.log("server run successfly....! ")