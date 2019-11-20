const nodemailer = require('nodemailer');

module.exports = (formulario) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'transporttrackerapp@gmail.com', // Cambialo por tu email
			pass: 'tr4nsp0rttr4ck3r4pp' // Cambialo por tu password
		}
});

const mailOptions = {
		from: formulario.email,
		to: 'transporttrackerapp@gmail.com', // Cambia esta parte por el destinatario
		subject: 'Email from '+formulario.email,
		html: formulario.name +' wrote: ' + formulario.message
	};
transporter.sendMail(mailOptions, function (err, info) {
	if (err)
		console.log(err)
	else
		console.log(info);
 	});
}