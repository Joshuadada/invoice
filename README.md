# Invoice

This is a React project built using Vite, TypeScript, Tailwind CSS, and Flowbite. The project aims to create an invoice management system, featuring a modern UI, responsive design, and efficient form handling.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Approach](#approach)
- [Assumptions](#assumptions)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)

## Project Overview

This project is an **Invoice Management System** that allows users to view invoice details, and perform related activities. The frontend is built with React using TypeScript to ensure type safety, and Tailwind CSS with Flowbite to deliver a modern and clean UI.

## Technologies Used

- **React** (with Vite for fast builds and development)
- **TypeScript** (for static typing and better code quality)
- **Tailwind CSS** (for utility-first styling)
- **Flowbite** (for pre-designed components and UI elements)
- **React Router** (for routing between different pages)
- **React Toastify** (for error and success notifications)
- **JSON Server** (for backend). The json server backend was hosted on render (https://invoice-yymk.onrender.com/invoice)
  
## Setup and Installation

Follow the steps below to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/invoice.git
   cd invoice
   ```

2. **Install Dependencies:**

   If you are using `npm`:

   ```bash
   npm install
   ```

   Or, if you are using `yarn`:

   ```bash
   yarn install
   ```

## Running the Project

Once everything is set up, you can start the development server:

- With `npm`:

  ```bash
  npm run dev
  ```

- With `yarn`:

  ```bash
  yarn dev
  ```

This will start the project at `http://localhost:5173/` (or another port depending on your configuration).

### Build for Production

To create a production-ready build of the project, run:

```bash
npm run build
```

Or:

```bash
yarn build
```

The build output will be stored in the `dist/` directory.

## Approach

### Vite + React + TypeScript

I chose **Vite** because of its speed and simplicity in setting up React projects. It's optimized for both development and production builds. **TypeScript** was used for static typing, which helps catch errors early and makes the codebase more maintainable.

### Tailwind CSS + Flowbite

To style the application, I used **Tailwind CSS**, which provides a utility-first approach for styling, ensuring quick and responsive designs. **Flowbite** was added to leverage pre-designed components like modals, buttons, and tables, which saved development time while maintaining a consistent look and feel.

### State Management

State is handled locally using React hooks such as `useState` and `useContext` for global state, such as the sidebar state.

### Error Handling

**React Toastify** is used to display notifications for success or error scenarios during form submissions or API calls.

## Assumptions

1. **Responsive Design:** The application is designed to be fully responsive across different screen sizes using Tailwind's responsive utility classes.
2. **API Endpoints:** It's assumed that there are backend API endpoints that serve invoice data, which can be replaced with actual API URLs.

## Project Structure

Here is an overview of the project structure:

```bash
invoice/
├── public/
├── src/
│   ├── assets/        # Icons, images, etc.
│   ├── components/    # Reusable components (Sidebar, Header, etc.)
│   ├── pages/         # Page components (Dashboard etc.)
│   ├── styles/        # Tailwind and global CSS styles
│   ├── hooks/         # Custom hooks (e.g., useFetch)
│   ├── App.tsx        # Main application file
│   ├── main.tsx       # Vite entry point
│   └── index.tsx/        # React Router setup
└── package.json       # Project metadata and dependencies
```

## Acknowledgments

- **Vite**: For blazing-fast build and development experience.
- **Tailwind CSS**: For utility-first styling that simplified the design process.
- **Flowbite**: For providing pre-built UI components that enhanced the development speed.
- **React Toastify**: For easily integrating notifications into the project.

Feel free to contribute, submit issues, or request features!

---

This README will help users understand the project's setup and approach, and guide them through installation and running it locally.
