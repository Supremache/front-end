# Vestiura

Vestiura is a modern, visually stunning e-commerce landing page for a clothing store. The application showcases a clean and responsive design with advanced animations and components to elevate the user experience.

![Vestiura Landing Page Preview](https://github.com/user-attachments/assets/aa1ee0f7-18c8-4356-9bbd-7f22461e263f)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Interactive Animations**: Smooth animations powered by Framer Motion for engaging user interactions.
- **Dynamic Components**: Built using ShadCN to ensure flexibility and scalability.
- **Type Safety**: Fully typed with TypeScript for improved developer experience.
- **Fast Loading**: Lightweight and highly performant using Tailwind CSS.
- **Modern UI**: Clean and professional design that adheres to modern UI/UX principles.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Ensures type safety and minimizes runtime errors.
- **Tailwind CSS**: Utility-first CSS framework for efficient styling.
- **ShadCN**: Component library to build dynamic and reusable components.
- **Framer Motion**: Library for creating smooth animations.

## Installation
To get started with the Vestiura project, clone this repository and follow the steps below:

1. ### Clone the repository:
   ```bash
   git clone https://github.com/Supremache/front-end.git
   cd front-end/app/vestiura

2. ### Install Dependencies
   ```bash
   npm install
   # or
   yarn install

4. ### Start the development server:
  ```bash
   npm run dev
   # or
   yarn dev
   ```


5. ### Open your browser and navigate to:
  ```bash
  http://localhost:3000
  ```


## Project Structure
  ```Code
├── public/               # Contains static assets like images, fonts, and other publicly accessible files
├── src/
│   ├── components/       # Houses reusable React components for UI elements and logic
│   ├── constants/        # Houses constant values (e.g., API endpoints, theme settings)
│   ├── hooks/            # Houses reusable custom React hooks for state management and logic
│   ├── pages/            # Application pages for routing, typically linked to specific URLs
│   ├── lib/              # Utility functions and helper methods for common tasks (e.g., formatting, validation)
│   └── App.tsx           # Main entry point of the React application, contains component tree and routing
│   └── index.css         # Main global stylesheet for the React application
│   └── main.tsx           # Main entry point for ReactDOM rendering, sets up React and app-wide context
├── tailwind.config.js    # Configuration for Tailwind CSS, including theme, colors, and plugin settings
├── tsconfig.json         # TypeScript configuration file, defines compiler options and project settings
├── package.json          # Project metadata and dependencies, including scripts, version, and package details
  ```

## Project Structure

- **To deploy the project:**
1. ### To deploy the project:
  ```bash
   npm run build
   # or
   yarn build
   ```

2. ### Deploy the ```dist/``` folder to your preferred hosting service (e.g., Vercel, Netlify, AWS).

## Project Structure

- **Contributions are welcome! Please follow the steps below to contribute:**

1. ### Fork the repository.
2. ### Create a new branch for your feature/bugfix:
  ```bash
  git checkout -b feature-name
  ```

3. ### Commit your changes:
  ```bash
  git commit -m "Add feature-name"
  ```

4. ### Push the branch:
  ```bash
  git push origin feature-name
  ```

5. ### Open a Pull Request.

## License

- This project is licensed under the MIT License.



