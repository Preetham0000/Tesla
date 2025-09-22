# Tesla Clone

A full-stack Tesla clone web application built with React, Express, and MongoDB. This project replicates Tesla's modern UI/UX for vehicle browsing, authentication, and customization.

## Features

- Tesla-style homepage with carousel
- Vehicle inventory/models page with sidebar filters
- Car customization page
- Signup and login with JWT authentication
- Session management (localStorage)
- Protected routes
- Responsive design using Tailwind CSS

## Technologies Used

- Frontend: React, React Router, Tailwind CSS
- Backend: Express.js, MongoDB, Mongoose
- Authentication: JWT

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas account (or local MongoDB)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Tesla.git
   cd Tesla
   ```
2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables in `server/.env`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Start the frontend React app:
   ```bash
   cd ../client
   npm start
   ```
6. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
Tesla/
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
└── README.md
```

## Customization
- Add car images to `client/public/`
- Update car data in `client/src/pages/ModelsPage.js`
- Modify styles in `client/src/index.css`

## License

This project is for educational/demo purposes only. Not affiliated with Tesla, Inc.

---

Feel free to fork, modify, and contribute!.