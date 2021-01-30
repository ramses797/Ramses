const NODEMAILER = require('nodemailer');


const CORREO = function(req, res) {

    let transporter = NODEMAILER.createTransport({
        service: 'Gmail',
        auth: {
            email: 'rmorenor97@gmail.com',
            pass: 'ramses797'
        }
    });

    let mailOptions = {
        from: req.body.correo,
        to: 'rmorenor97@gmail.com',
        subject: 'Empresa hablando por el portfolio',
        html:   `<div style="width: 45em;">
                    <h3 style="color: black">Corrreo de contacto</h3>
                    <p style="color: black">Nombre: ${req.body.nombre}</p>
                    <p style="color: black;">Empresa: ${req.body.empresa}</p>
                    <p style="color: black;">Explicacion: ${req.body.explicacion}</p>
                </div>`
    };

    transporter.sendMail(mailOptions);
}

module.exports = CORREO;