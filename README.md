
---

# 📦 Product Management App (React)

A **Product Management Application** built using **React.js** that allows users to view, search, add, edit, and manage products efficiently.
The application supports **List View** and **Card View**, real-time search with debounce, pagination, and form validation — all handled **in memory** (no backend).

---

## 🔗 Live Demo & Source Code

* 🚀 **Live Demo:**
  [https://product-management-black.vercel.app/](https://product-management-black.vercel.app/)

* 💻 **GitHub Repository:**
  [https://github.com/DivyanshiGupta-18/Product_Management](https://github.com/DivyanshiGupta-18/Product_Management)

---

## ✨ Features

### 🔁 Product List Display

* Displays products in:

  * **List View** (Table format)
  * **Card View** (Grid layout)
* Toggle button to switch between **List View ↔ Card View**

---

### 🔍 Search Functionality

* Search products **by product name**
* **Real-time search**
* Implemented using **500ms debounce**

---

### ➕ Add & ✏️ Edit Product

* Product form fields:

  * **Name** (required)
  * **Price** (number, required)
  * **Category** (required)
  * **Stock** (number)
  * **Description** (optional)
  * **Image URL** (optional)
* **Basic form validation** with error messages
* Product data is stored and updated using **React state (in memory only)**

---

### 📄 Pagination

* Pagination implemented for the product list
* Works in **both List View and Card View**
* Includes:

  * Previous / Next buttons
  * Current page indicator

---

## 🖼️ Screenshots

### 📋 List View

![List View](./public/list-view.png)

### 🧱 Card View

![Card View](./public/card-view.png)

> ℹ️ **Image Handling**
>
> * If an image URL is provided, it is displayed in **Card View**
> * If no image is provided or the image fails to load, a **default image** is shown

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

---

## 📁 Project Structure

```
product-management/
│
├── src/
│   ├── components/
│   │   ├── Product.jsx
│   │   ├── Dummydata.jsx
│   │   ├── Product.css
│   │
│   │
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── screenshots/
│   ├── list-view.png
│   └── card-view.png
│
└── README.md
```

---

## 🚀 How to Run the Project Locally

1. Clone the repository

   ```bash
   git clone https://github.com/DivyanshiGupta-18/Product_Management.git
   ```
2. Navigate to project folder

   ```bash
   cd Product_Management
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Start the development server

   ```bash
   npm start
   ```
5. Open in browser

   ```
   http://localhost:3000
   ```

---

