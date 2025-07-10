# ShopHub – E-commerce Storefront UI Kit

A modern, responsive e-commerce storefront UI kit built with React, TypeScript, Vite, and Tailwind CSS. ShopHub provides a beautiful, customizable foundation for online stores, featuring product browsing, filtering, cart, checkout, authentication, and more.

## Features

- 🛒 **Product Catalog**: Browse, filter, and sort products by category, brand, price, and rating.
- 🔍 **Search**: Quickly find products with a search bar.
- 🛍️ **Product Details**: View detailed product info, images, reviews, and select options (color, size, quantity).
- 🛒 **Cart**: Add, update, and remove items; persistent cart with localStorage.
- 💳 **Checkout**: Simple checkout form with order summary.
- 👤 **Authentication**: Register, login, and account management (mocked for demo).
- 📦 **Categories**: Browse products by category.
- 🎨 **Modern UI**: Built with Tailwind CSS for easy customization.
- 📱 **Responsive**: Mobile-friendly design.
- ⚡ **Fast**: Powered by Vite for instant reloads and builds.

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router v6](https://reactrouter.com/)
- [Lucide React Icons](https://lucide.dev/icons/)

## Folder Structure

```
shophub/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Cart/           # Cart drawer and related UI
│   │   ├── Layout/         # Header, Footer, Layout
│   │   ├── Product/        # Product card, grid, filters
│   │   └── UI/             # Generic UI elements (Button, Badge, etc.)
│   ├── context/            # React Contexts (Auth, Cart)
│   ├── data/               # Static product/category data
│   ├── pages/              # Route pages (Home, Products, Cart, etc.)
│   ├── types/              # TypeScript types/interfaces
│   ├── index.css           # Tailwind/global styles
│   ├── main.tsx            # App entry point
│   └── App.tsx             # Main app and routing
├── public/                 # Static assets (if any)
├── index.html              # HTML entry point
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── tsconfig*.json          # TypeScript configs
└── vite.config.ts          # Vite config
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/shophub.git
   cd shophub
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Usage

- **Browse Products:** Use the navigation bar to explore products, categories, and featured items.
- **Search & Filter:** Use the search bar and filters to find products by name, brand, category, price, and rating.
- **Cart & Checkout:** Add products to your cart, update quantities, and proceed to checkout (demo only).
- **Authentication:** Register or log in to access account features (mocked, no real backend).

## Customization
- Update product and category data in `src/data/products.ts`.
- Adjust UI components in `src/components/`.
- Modify styles via Tailwind classes or `tailwind.config.js`.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License

[MIT](LICENSE)

---

> **Note:** This project is for demo and educational purposes. No real payment or user data is processed.
