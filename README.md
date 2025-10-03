# Frontiers Code Challenge

## Running the Project

Before running the project, you need to create a `.env` file at the root of the project with the required environment variables.

Example:
```env
VITE_QUOTES_RANDOM_ENDPOINT=https://api.quotable.io/random
VITE_INTERNAL_QUOTES_ENDPOINT=/api/quotes/random
```

This variable is used in the Vite proxy configuration to redirect API calls.

- **Install dependencies:** `npm install`
- **Start the development server:** `npm run dev` → available at http://localhost:5173
- **Build for production (with type checking):** `npm run build`
- **Preview the production build:** `npm run preview`

## Running Tests

- **Run tests in watch mode:** `npm run test`
- **Run tests once with coverage report:** `npm run test:run`

## Code Quality

- **Lint and fix code style issues:** `npm run lint`
- **Format code with Prettier:** `npm run format`