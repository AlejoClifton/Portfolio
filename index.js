const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>${req.body.business}</h3>
        <ul>
            <li>Nombre: ${req.body.nombre}</li>
            <li>Empresa: ${req.body.business}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <p>${req.body.mensaje}</p>
        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });

        let mailOptions = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: 'enviado desde Portfolio',
            replyTo: process.env.EMAIL,
            text: req.body.mensaje,
            html: htmlEmail,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(`algo salio mal : ${err.message}`);
            } else {
                console.log('email enviado');
            }
        });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto ${PORT}`);
});
