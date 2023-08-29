# MERN Stack Social App

A full-stack social media web application built using the MERN (MongoDB, Express, React, Node.js) stack. Users can authenticate using Google login, perform CRUD operations on posts, search for posts, like and comment on posts. The app is styled using Tailwind CSS, and Redux Toolkit is used for state management.

![App Screenshot](/path/to/screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication using Google login.
- Create, read, update, and delete posts.
- Search for posts by keywords or tags.
- Like and comment on posts.
- Responsive design with Tailwind CSS.
- State management with Redux Toolkit.

## Technologies Used

- **Frontend**:
  - React
  - Redux Toolkit
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (or your preferred database)

- **Authentication**:
  - Google OAuth (Add instructions on how to set up your Google OAuth credentials)

- **Deployment**:
  - Deployment platform (e.g., Heroku, Vercel, AWS, etc.)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lateefibrahim01/mern-posts.git
2. Navigate to the project directory:
   `cd your-mern-app`
3. Install dependencies for both the client and server:
   `cd client`
    `npm install`
    `cd ../server`
    `npm install`
4. Change .env.sample in server and client directories to .env and add your credentials to it.
5. Start the development server:
   `npom start`


## Usage
1. Open your browser and navigate to http://localhost:3000 to access the app.

2. Click on the "Login with Google" button to authenticate.

3. Use the app to create, view, edit, and delete posts. You can also search for posts, like, and comment on them.

## Deployment
To deploy your app, follow the deployment guidelines for your chosen platform (Heroku, Vercel, AWS, etc.). Make sure to set up your production environment variables.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.


## License
This project is licensed under the MIT License.