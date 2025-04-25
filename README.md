# Project Documentation

## Installation and Running the Project

To set up and run this project locally, follow these steps:

1. Clone the repository to your local machine:

  ```bash
  git clone https://github.com/marlon-rt14/fika-cinema-web.git
  ```

2. Navigate to the project directory:

  ```bash
  cd fika-cinema-web
  ```

3. Install the required dependencies:

  ```bash
  npm install
  ```

4. Start the development server:

  ```bash
  npm start
  ```

  This will launch the application in your default browser at `http://localhost:5173`.

> **Note:**  📝  
>
> - There are default Genres and Cast & Crew data loaded in the `public/db/` folder.
> - To view movies on the homepage initially, you must add them from the admin view.
> - To do this, click on the "Sign in" button.
> - Alternatively, you can copy the data from the `movies.sample.json` file and paste it into `movies.json`.

## Libraries Used

This project utilizes several libraries to enhance functionality and maintainability, including but not limited to:

- **React**: For building the user interface.
- **React Concurrent Mode**: To enable features like `Suspense` and `Error Boundary` for better user experience and resource optimization.
- **React Router**: For managing navigation and routing within the application.
- **Other Utility Libraries**: Additional libraries for state management, API handling, and styling are included.

## Modular Structure

### Directory Structure

  The project follows a well-defined directory structure to ensure clarity and maintainability:

  ```
  src/
  ├── api/           # Logic for interacting with external APIs
  ├── assets/        # Static files like images and icons
  ├── components/    # Reusable UI components
  ├── contexts/      # React contexts for global state management
  ├── core/          # Essential functionalities and shared tools
  ├── hooks/         # Custom hooks
  ├── models/        # Data types and models
  ├── modules/       # Functional modules organized by domain
  ├── navigation/    # Route configuration
  ├── store/         # Global state (Zustand)
  ```

The project is organized into a modular structure to ensure scalability and maintainability. Key highlights of the structure include:

- **Core Folder**:
  - This folder contains the foundational elements of the project, such as react hooks, context providers, and utility functions.
  - It also includes tools like `Suspense` and `Error Boundary` to handle asynchronous rendering and error management effectively.

- **Feature Modules**:
  - Each feature or functionality is encapsulated in its own module, containing components, styles, and logic specific to that feature.

- **Shared Components**:
  - Reusable components that are shared across multiple modules are stored in a dedicated folder.

  This structure ensures a clear separation of concerns, making the codebase easier to navigate and extend.

This modular approach ensures that the codebase remains clean, organized, and easy to navigate.

## Concurrent Mode and Core Tools

The project leverages React's Concurrent Mode to provide a smoother and more responsive user interface. Key tools and techniques include:

- **Performance**: `memo`, `lazy`, `useMemo`, `useCallback`, `Suspense`, `ErrorBoundary`.
- **User Experience**: `useTransition`, `useOptimistic`, `useDeferredValue`, `useSyncExternalStore`.
- **Essential Hooks**: `useState`, `useEffect`, `useRef`.

These features collectively enhance the user experience by optimizing resource usage and ensuring a fluid interface.

## Clean Code and Maintainability

The project adheres to clean code principles, making it easy to maintain and scale. Key practices include:

- Modular structure for clear separation of concerns.
- Consistent naming conventions and code formatting.
- Reusable components and utilities to reduce redundancy.
- Comprehensive documentation and comments for better understanding.

## Building the Project and Code Splitting

To create a production-ready build of the project, follow these steps:

1. Run the build command:

  ```bash
  npm run build
  ```

  This will generate an optimized build in the `dist/` directory.

2. Deploy the contents of the `dist/` directory to your preferred hosting service.

The project also implements **code splitting** to improve performance by loading only the necessary code for each route or feature. This is achieved using dynamic imports and React's `Suspense`, ensuring faster load times and reduced resource usage.

The project uses Vite to split the code into chunks, improving application performance:

- **Library Splitting**: Dependencies like `react`, `react-dom`, and `axios` are grouped into separate chunks.
- **Module Splitting**: Modules like `ui-components` and `data-fetching` are loaded independently.

Relevant Configuration in `vite.config.ts`
