const router = require("express").Router();
var nodemailer = require('nodemailer');
require("dotenv").config()
router.route("/api/submit")
    .post(function (req, res) {
        console.log(req);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "wesley.tejeda95@gmail.com",
                pass: process.env.GMAIL_PW
            },
        });
        var mailOptions = {
            from: req.body.email,
            to: "wesley.tejeda95@gmail.com",
            subject: req.body.subject,
            text: req.body.message
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                res.send(info);
            }
        });
    })
module.exports = router;