import React, { useState, useEffect } from "react";
import "./Product.css";
import { dummyProducts, DEFAULT_IMAGE } from "./Dummydata";

const PAGE_SIZE = 5;

const initialProducts = dummyProducts;

export default function Product() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  /* Debounce Search*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  /* Filtered Products */
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  /* Pagination */
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  /* Validation */
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.category) newErrors.category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* Add / Edit */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (formData.id) {
      setProducts(products.map((p) => (p.id === formData.id ? formData : p)));
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }

    setFormData({
      id: null,
      name: "",
      price: "",
      category: "",
      stock: "",
      image: "",
      description: "",
    });
    setErrors({});
  };

  const handleEdit = (product) => setFormData(product);

  return (
    <div className="container">
      <h2>Product Management</h2>

      {/* Search & Toggle */}
      <div className="controls">
        <input
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setView(view === "list" ? "card" : "list")}>
          Switch to {view === "list" ? "Card" : "List"} View
        </button>
      </div>

      {/* Product View */}
      {view === "list" ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid">
          {paginatedProducts.map((p) => (
            <div className="card" key={p.id}>
              <img
                src={p.image ? p.image : DEFAULT_IMAGE}
                alt={p.name}
                className="product-image"
              />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <p>{p.category}</p>
              <p>{p.description}</p>
              <button onClick={() => handleEdit(p)}>Edit</button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <h3>{formData.id ? "Edit Product" : "Add Product"}</h3>

        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        {errors.price && <span>{errors.price}</span>}

        <input
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        {errors.category && <span>{errors.category}</span>}

        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
        />

        <input
          type="url"
          placeholder="Image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
