E-commerce Store App with React & TailwindCSS
This is a simple e-commerce store application built with React, TailwindCSS, and a mock backend (using db.json). The app displays a list of stores with their details like logos, names, and categories. You can also filter, search, and paginate the list of stores.

Table of Contents
Prerequisites

Getting Started

How to Run

App Features

Folder Structure

Tech Stack

Troubleshooting

License

Prerequisites
Make sure you have the following installed:

Node.js (v14 or above)

npm (v6 or above)

Getting Started
Clone this repository to your local machine:

bash
Copy
Edit
git clone https://github.com/yourusername/ecommerce-store-app.git
Navigate to the project directory:

bash
Copy
Edit
cd ecommerce-store-app
Install dependencies:

bash
Copy
Edit
npm install
Run the application:

bash
Copy
Edit
npm start
The app should open in your browser at http://localhost:3000.

How to Run
Backend Mock Data: The app uses a mock backend via json-server to simulate a RESTful API for stores.

Start the Backend:

In the project root directory, run:

bash
Copy
Edit
json-server --watch db.json --port 3001
This will start the backend at http://localhost:5000 and serve the data from db.json.

Start the Frontend:

In a separate terminal, run:

bash
Copy
Edit
npm start
This will start the React development server at http://localhost:3000.

App Features
Store Cards: Display a list of stores with their logos, names, and categories.

Category Filter: Filters the list of stores by category.

Search: Search stores by name.

Pagination: Paginate through the list of stores with a page limit.

Store Details: View details for each store by clicking on a store card.

TailwindCSS: Responsive design and easy customization.

Folder Structure
graphql
Copy
Edit
src/
│
├── components/          # React components (StoreCard, Pagination, etc.)
│   ├── StoreCard.jsx    # Component to display a single store card
│   ├── Pagination.jsx   # Component for pagination controls
│   ├── Filters.jsx      # Component to filter stores by categories
│   ├── StoreForm.jsx    # Component for adding/editing stores (optional)
│
├── api/                 # API calls (fetch data from the backend)
│   └── api.js           # Contains functions like getStores(), etc.
│
├── App.js               # Main App component where everything is tied together
├── index.js             # Entry point for the React app
├── index.css            # Global styles (TailwindCSS)
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration for Tailwind
├── db.json              # Mock database used for the backend
└── README.md            # This file
Tech Stack
React: Frontend library

TailwindCSS: Utility-first CSS framework

json-server: Mock backend for API

React-Router: For navigation (optional for multi-page routing)

Axios: For API calls (optional)

Troubleshooting
1. Backend API Not Working
Make sure you've started the json-server using json-server --watch db.json --port 3001.

If you're getting a 404 error, check that the URL in your API file matches http://localhost:5000 for the API base.

2. React App Not Starting
Run npm install to ensure all dependencies are installed.

Make sure you've installed json-server globally or locally.

3. TailwindCSS Not Loading
Ensure that you’ve installed the tailwindcss and postcss dependencies correctly by running npm install.

Double-check the tailwind.config.js and postcss.config.js files are correctly set up.

4. Data Not Showing in Cards
Check your api.js to ensure that the API request is correctly fetching data from the backend (http://localhost:5000/stores).

Ensure that the data format in db.json matches what is expected in your React components.

