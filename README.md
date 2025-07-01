# Stock Market Management Platform

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)
![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)

A modern web application for real-time stock trading and portfolio management. Built with React.js, Node.js, and PostgreSQL, it features live market data, a sleek responsive UI, and robust backend services.

---

## ✨ Features

- **User Authentication**: Registration, login, password hashing, and validation
- **Real-Time Stock Data**: Live prices via web scraping, historical trends, analytics
- **Portfolio Management**: Real-time valuation, investment tracking, transaction history
- **Admin Dashboard**: Manage users, companies, and monitor system health
- **Interactive Charts**: Visualize portfolio and market data
- **Modern UI**: Responsive, animated, and user-friendly

---

## 🗂️ Project Structure

```
stock_market/
  backend/           # Node.js backend (API, DB, scraping)
    db/              # SQL schema
    templates/       # Report templates
    ...
  public/            # Static assets
  src/               # React frontend
    Components/      # Reusable UI components
    Pages/           # Main app pages
    lib/             # Utilities
  ...
```

---

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, Tailwind CSS, Chart.js, Framer Motion, Material UI, Aceternity UI

**Backend:** Node.js, Express.js, PostgreSQL, bcrypt, Cheerio, Puppeteer, Axios

**Other:** Web scraping, PDFKit (report generation), TypeScript (utils)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/stock_market.git
cd stock_market
```

### 2. Install dependencies

```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### 3. Set up PostgreSQL

- Create a database and user as per your environment variables (see below).
- Run the SQL schema in `backend/db/tables.sql` to create tables.

### 4. Configure Environment Variables

Create a `.env` file in `backend/` with:

```
DB_PORT=5432
PASSWORD=your_db_password
DATABASE=your_db_name
GROQ_API_KEY=your_groq_api_key
# ...other keys as needed
```

### 5. Start the servers

```bash
# In project root (for frontend)
npm start

# In backend/
npm start
```

---

## 🧩 Main Scripts

- `npm start` (frontend): Runs React app on [localhost:3000](http://localhost:3000)
- `npm start` (backend): Runs Node.js API on [localhost:4000](http://localhost:4000)

---

## 🗄️ Database Schema (Summary)

- **Users**: user_id, name, email, password_hash, total_balance
- **Companies**: company_id, name, ticker_symbol, stock_price, total_shares
- **Stocks**: stock_id, user_id, company_id, quantity, average_price
- **Transactions**: transaction_id, user_id, company_id, type, quantity, total_amount, date
- **Market Data**: id, symbol, date, open, high, low, close, volume

See [`backend/db/tables.sql`](backend/db/tables.sql) for full schema.

---

## 🔌 API Endpoints (Backend)

- `POST /api/register` — Register a new user
- `POST /api/login` — User login
- `GET /api/stocks` — Get real-time stock data
- `GET /api/portfolio` — Get user portfolio
- `POST /api/trade` — Buy/sell stocks
- `GET /api/transactions` — Transaction history
- ...and more (see `backend/server.js`)

---

## 📸 Screenshots

<!-- Add screenshots of your app here -->

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the ISC License.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## License

This project is MIT licensed.
