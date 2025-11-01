# Subscription Tracker API

A Node.js backend application to manage user subscriptions, workflows, and authentication. Built with Express, MongoDB (Mongoose), Arcjet, and Upstash Workflow.

## Features

- User authentication and authorization
- Subscription management
- Workflow management
- Error handling middleware
- Bot protection via Arcjet
- JSON-based RESTful API

## Technologies

Node.js, Express, MongoDB Atlas, Mongoose, JWT, bcryptjs, cookie-parser, dotenv, Nodemailer, Arcjet, Upstash Workflow

## Installation

1. Clone the repository:

```bash
git clone https://github.com/1lelanta/SUBSCRIPTION-TRACKER.git
cd SUBSCRIPTION-TRACKER

```
2. Install dependecies
   npm install

3. create a .env file in the root directory with:
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

Running the App
npm run dev

| Route                  | Method              | Description             |
| ---------------------- | ------------------- | ----------------------- |
| `/api/v1/auth`         | POST/GET            | User authentication     |
| `/api/v1/users`        | GET/POST/PUT        | User management         |
| `/api/v1/subscription` | GET/POST/PUT/DELETE | Subscription management |
| `/api/v1/workflows`    | GET/POST            | Workflow automation     |

Get Users:
curl -X GET https://subscription-tracker-4.onrender.com/api/v1/users

create Subscription:
curl -X POST https://subscription-tracker-4.onrender.com/api/v1/subscription \
-H "Content-Type: application/json" \
-d '{"name":"Netflix","price":12.99}'

Notes
No front-end is included — backend API only.

Arcjet middleware is active for bot protection.

Make sure MongoDB Atlas allows connections from your deployment IP.

Test your API endpoints using Postman, curl, or any HTTP client.

Live Demo
https://subscription-tracker-4.onrender.com/



   
