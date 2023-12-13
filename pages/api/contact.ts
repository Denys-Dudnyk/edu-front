import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { Options } from 'nodemailer/lib/mailer'

type TypeCaptchaAnswer = {
	success: boolean
	score: number
}

const verifyRecaptcha = async (token: string): Promise<TypeCaptchaAnswer> => {
	const secretKey = process.env.RECAPTCHA_SECRET_KEY

	const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

	const res = await fetch(verificationUrl, {
		method: 'POST',
	})

	return res.json()
}

export default async function postMail(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const response = await verifyRecaptcha(req.body.token)

	const transporter = await createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.REACT_MAIL_USER,
			pass: process.env.REACT_MAIL_PASSWORD,
		},
		secure: true,
		//debug: true, // show debug output
		//logger: true, // log information in console
	})

	const mailData: Options = {
		from: process.env.REACT_MAIL_USER,
		to: process.env.REACT_MAIL_PUBLIC,
		subject: `Message From ${req.body.name}`,
		html: `<div>
		<p>Name: ${req.body.name}</p>
		<p>Sender: ${req.body.email}</p>
		<p>Message: ${req.body.message}</p>	
</div>`,
	}

	try {
		if (response.success && response.score >= 0.5) {
			// send mail
			transporter.sendMail(mailData, (err, response) => {
				if (err) {
					console.error(err)
					res.send('error' + String(err))
				} else {
					console.log(req.body)
					res.status(200).send('Success!')
				}
			})
		} else {
			res.send('Failed!')
		}
	} catch (error) {
		console.error(error)
		res.send('Failed!')
	}
}
