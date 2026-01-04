📦 Product Management App (React)

A Product Management Application built using React.js that allows users to view, search, add, edit, and manage products efficiently.
The application supports List View and Card View, real-time search with debounce, pagination, and form validation — all handled in memory (no backend).

✨ Features
🔁 Product List Display

Displays products in:

List View (Table format)

Card View (Grid layout)

Toggle button to switch between List View ↔ Card View

🔍 Search Functionality

Search products by product name

Real-time search

Implemented using 500ms debounce to reduce unnecessary re-renders

➕ Add & ✏️ Edit Product

Product form fields:

Name (required)

Price (number, required)

Category (required)

Stock (number)

Description (optional)

Image URL (optional)

Basic form validation with error messages

Product data is stored and updated using React state (in memory only)

📄 Pagination

Pagination implemented for the product list

Works in both List View and Card View

Includes:

Previous / Next buttons

Current page indicator

🖼️ Screenshots
📋 List View

🧱 Card View

ℹ️ Image Handling

If an image URL is provided, it is displayed in Card View

If no image is provided or the image fails to load, a default image is shown

🛠️ Tech Stack

React.js

JavaScript (ES6+)

HTML5

CSS3

📁 Project Structure
product-management/
│
├── src/
│   ├── components/
│   │   ├── Product.jsx
│   │   ├── Dummydata.jsx
│   │   ├── Product.css
│   │
│   ├── App.jsx
│   ├── index.js
│   └── Apps.css
│
├── screenshots/
│   ├── public\screencapture-localhost-5173-2026-01-04-18_02_49.png
│   └── public\screencapture-localhost-5173-2026-01-04-18_04_02.png
│
└── README.md

🚀 How to Run the Project

Clone the repository

git clone <repository-url>


Install dependencies

npm install


Start the development server

npm start


Open in browser

http://localhost:3000


👩‍💻 Author

Divyanshi Gupta