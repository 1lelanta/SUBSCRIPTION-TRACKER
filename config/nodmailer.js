import nodmailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config()

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'kekikoki4@gmail.com',
        pass: EMAIL_PASSWORD
    }
})