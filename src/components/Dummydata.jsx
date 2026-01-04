const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrA7AnzVfkvExs3rWGo4jL69PZTPbDsSnKLg&s";

const dummyProducts = [
  {
    id: 1,
    name: "Laptop Pro 15",
    price: 65000,
    category: "Electronics",
    stock: 12,
    image: "https://static.toiimg.com/thumb/msid-76401212,width-1280,height-720,resizemode-4/76401212.jpg",
    description: "High-performance laptop suitable for work, gaming, and productivity."
  },
  {
    id: 2,
    name: "Smartphone X",
    price: 28000,
    category: "Electronics",
    stock: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzjmeEEvMNB0vMPDw5hGPeKFhVMGkKpRMaw&s",
    description: "Latest smartphone with powerful processor and long battery life."
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 3500,
    category: "Accessories",
    stock: 30,
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495&width=400",
    description: "Noise-cancelling wireless headphones with premium sound quality."
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 4200,
    category: "Fashion",
    stock: 18,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/z/c/b/-original-imahgctgmugfhy9a.jpeg?q=90",
    description: "Comfortable running shoes designed for daily workouts."
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 9000,
    category: "Electronics",
    stock: 14,
    image: "https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048",
    description: "Smartwatch with fitness tracking and heart rate monitor."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 2500,
    category: "Accessories",
    stock: 22,
    image: "https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_b3503890-50f6-4cd1-9138-0bd90874391e_1300x.png?v=1709717442",
    description: "Portable Bluetooth speaker with deep bass and clear sound."
  },
  {
    id: 7,
    name: "Backpack",
    price: 1800,
    category: "Fashion",
    stock: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfuKPMSMIPlqczBknFe7ERCdNcoUQCXuwoQ&s",
    description: "Durable backpack suitable for college, travel, and office use."
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 1200,
    category: "Accessories",
    stock: 35,
    image: "https://www.portronics.com/cdn/shop/files/Toad321500X1500Blue1.jpg?v=1699100039",
    description: "Ergonomic wireless mouse with smooth tracking."
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 4500,
    category: "Accessories",
    stock: 16,
    image: "https://cdn.mos.cms.futurecdn.net/YS333JMytSFjFiRVPaWxWd.jpg",
    description: "Mechanical keyboard with RGB lighting and tactile keys."
  },
  {
    id: 10,
    name: "Gaming Monitor",
    price: 15500,
    category: "Electronics",
    stock: 9,
    image: "https://images.samsung.com/is/image/samsung/assets/nz/members/article-assets/gaming-monitors/img-kv-2.jpg?$ORIGIN_JPG$",
    description: "24-inch Full HD monitor with high refresh rate."
  },
  {
    id: 11,
    name: "USB-C Hub",
    price: 2200,
    category: "Accessories",
    stock: 28,
    image: "https://d3bqwgyjdqpe80.cloudfront.net/prod/9603861807134.jpg",
    description: "Multiport USB hub with HDMI and USB support."
  },
  {
    id: 12,
    name: "Office Chair",
    price: 8500,
    category: "Furniture",
    stock: 7,
    image: "https://urbancart.in/cdn/shop/files/tilt4.jpg?v=1701344130",
    description: "Ergonomic office chair with lumbar support."
  },
  {
    id: 13,
    name: "Study Table",
    price: 12000,
    category: "Furniture",
    stock: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8n-4MC56FL1ZNB4Qe3bXV5OvGcIhPz3Uqw&s",
    description: "Wooden study table with storage drawers."
  },
  {
    id: 14,
    name: "LED Desk Lamp",
    price: 1600,
    category: "Home",
    stock: 24,
    image: "https://orientelectric.com/cdn/shop/files/Artboard_1_4fb860e6-aa4e-4cbf-9e74-0e1a2e74edaa.png?v=1757074325",
    description: "LED lamp with adjustable brightness."
  },
  {
    id: 15,
    name: "Power Bank 20000mAh",
    price: 3200,
    category: "Electronics",
    stock: 19,
    image: "https://www.bbassets.com/media/uploads/p/l/40308987_5-duracell-power-bank-20000-mah.jpg",
    description: "Duracell Fast-charging power bank with large capacity."
  },
  {
    id: 16,
    name: "Bluetooth Earbuds",
    price: 2800,
    category: "Accessories",
    stock: 27,
    image: "https://www.portronics.com/cdn/shop/files/portronics_harmoncis_twins_s19_bluetooth_earbuds_online.jpg?v=1742469927",
    description: "True wireless earbuds with charging case."
  },
  {
    id: 17,
    name: "Water Bottle",
    price: 600,
    category: "Home",
    stock: 50,
    image: "https://pexpo.in/cdn/shop/files/Amaze-Group_4e57734e-e97c-41bd-b172-46aa83d2b48a.jpg?v=1767160356",
    description: "Reusable stainless steel water bottle."
  }
];

export { dummyProducts, DEFAULT_IMAGE };
