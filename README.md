# Quiz Busters

Quiz Busters is a dynamic, real-time quiz platform built using modern web technologies like Next.js, Tailwind CSS, and Firebase. It provides an engaging way to test knowledge and compete with others in an interactive environment.

## Features

- **Real-time Quizzes**: Engage in live quizzes with seamless updates.
- **Authentication**: Sign in with Google using Firebase Authentication.
- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive layout.
- **Secure Database**: Leverages Firebase Firestore for real-time data storage and retrieval.
- **Deployment**: Hosted on Vercel for fast and reliable performance.

## Tech Stack

### Frontend:
- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.

### Backend:
- [Firebase Firestore](https://firebase.google.com/products/firestore) - NoSQL database for real-time data.
- [Firebase Authentication](https://firebase.google.com/products/auth) - Secure authentication system.

### Deployment:
- [Vercel](https://vercel.com/) - Cloud platform for deploying and hosting the application.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Firebase account for authentication and database setup.
- Vercel account for deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quiz-busters.git
   ```

2. Navigate to the project directory:
   ```bash
   cd quiz-busters
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Deployment

1. Push your code to a GitHub repository.
2. Link your repository to [Vercel](https://vercel.com/).
3. Set up environment variables in the Vercel dashboard.
4. Deploy the project with a single click.

## Project Structure

```plaintext
quiz-busters/
├── components/     # Reusable React components
├── pages/          # Next.js pages
├── public/         # Static assets
├── styles/         # Tailwind CSS styles
├── utils/          # Utility functions
├── firebase.js     # Firebase configuration
└── .env.local      # Environment variables
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by interactive learning platforms.
- Thanks to the open-source community for tools and resources.

---

Feel free to reach out with questions or suggestions. Happy quizzing!

