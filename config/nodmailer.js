import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config()


const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export const accountEmail = 'kekikoki4@gmail.com'

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    }
});

export default transporter;