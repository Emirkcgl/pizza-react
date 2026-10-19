# Fast React Pizza Co.

Fast React Pizza Co. is a personal learning project that I am building while following Jonas Schmedtmann's **The Ultimate React Course**. I use this project to put React concepts into practice and understand how they work together in a complete application.

Along the way, I am also adding my own improvements—especially in UI/UX—to make the original course project feel more modern, consistent, responsive, and user-friendly. This is an ongoing project, and I will continue updating it as I progress through the course and experiment with new ideas.

## About This Project

The foundation of this application comes from the Fast React Pizza project taught in Jonas Schmedtmann's course. I am using that structure as a practical environment for learning React, React Router, asynchronous data handling, forms, and component design.

I do not consider this a finished commercial product. It is a record of my learning process: I follow the course material, apply each concept in code, and then explore how I can improve the experience with my own design and frontend decisions.

## What I'm Learning

### React fundamentals

- Building interfaces with reusable, component-based architecture
- Writing JSX and composing smaller components into complete screens
- Passing data through props
- Rendering lists from data with stable keys
- Using conditional rendering for states such as sold-out products and validation errors
- Handling form and input events
- Managing local UI state with `useState`
- Creating shared UI components such as buttons, loaders, and navigation links

### React Router

- Configuring client-side routes with `createBrowserRouter`
- Building a shared nested layout with `Outlet`
- Working with dynamic routes and URL parameters such as `/order/:orderId`
- Fetching route data with loaders and `useLoaderData`
- Handling form submissions with actions and React Router's `Form`
- Redirecting after a successful order submission
- Reading action validation errors with `useActionData`
- Using `useNavigation` to show loading and submitting states
- Navigating programmatically with `useNavigate`
- Displaying route-level error states

### API and asynchronous JavaScript

- Fetching menu and order data from an external API
- Using `async`/`await` for asynchronous operations
- Handling unsuccessful HTTP responses and request errors
- Rendering remote data in React components
- Submitting new order data with a `POST` request
- Keeping API access in dedicated service modules
- Formatting currency, dates, and delivery-time information for the interface

### Tailwind CSS and interface development

- Using a utility-first styling workflow
- Building responsive layouts with Flexbox and Grid
- Creating reusable styling patterns with Tailwind layers and `@apply`
- Designing consistent spacing, typography, surfaces, and controls
- Styling hover, focus, loading, disabled, empty, and error states
- Adapting layouts for mobile, tablet, and desktop screens
- Respecting reduced-motion preferences and visible keyboard focus

> Redux Toolkit is not currently integrated into this repository. The current version uses local component state and React Router's data APIs. I will document Redux-related learning here only after it is implemented in the project.

## My Own Improvements

The course provided the original application idea and learning structure. The current visual direction is my own redesign of that foundation.

My UI/UX work currently includes:

- A custom warm, pizzeria-inspired design system with consistent colors and typography
- A redesigned responsive header, brand treatment, and order search field
- A new landing-page composition with an original inline pizza illustration
- Responsive product cards with stronger visual hierarchy and image fallbacks
- Clear sold-out, loading, error, empty, disabled, and pending states
- Redesigned cart, checkout, order summary, and order-tracking layouts
- More consistent buttons, fields, badges, cards, and page containers
- Improved mobile spacing and touch target sizes
- Semantic labels, visible focus states, descriptive alternative text, and reduced-motion support

These changes are additions I made on top of the course project to practice product design thinking as well as frontend implementation.

## Features

The current version includes:

- A responsive home page with a local name input
- Menu data loaded from the Fast React Pizza API through a route loader
- Responsive pizza cards with ingredients, prices, images, and sold-out states
- Order lookup by order number
- Dynamic order detail pages loaded from the API
- A checkout form for customer name, phone number, address, and priority selection
- Phone-number validation with an inline error message
- Order creation through a React Router action and API request
- Navigation-level loading UI and route-level error handling
- Estimated delivery information, order status, ordered items, and price summaries

### Current scope

The cart and checkout currently use sample cart data, and the add, remove, quantity, and clear-cart controls are still presentational. Redux-based cart and user state have not yet been connected in this version. I am keeping this section explicit so the README reflects what the repository actually does today.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18, React DOM |
| Routing and data APIs | React Router 6 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Build tooling | Vite 4 |
| Data access | Native Fetch API, async/await |
| Code quality | ESLint, Prettier, Tailwind CSS Prettier plugin |

## Getting Started

### Prerequisites

- A recent version of [Node.js](https://nodejs.org/)
- npm

### Installation

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Progress

This is an ongoing learning project. I will keep updating it as I move forward in the course, learn new concepts, and experiment with my own improvements.

I plan to keep this README aligned with the codebase rather than listing unfinished ideas as completed features. As the project develops, I can extend the learning, feature, UI/UX, and technology sections without changing the overall structure of the document.

## Credits

The project is based on the Fast React Pizza application from [Jonas Schmedtmann's The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/).

Course starter files, final projects, and supporting material are available in the [official course repository](https://github.com/jonasschmedtmann/ultimate-react-course).

The course provides the educational foundation and original project structure. The visual redesign and UI/UX refinements described above are my own additions as part of my learning process.
