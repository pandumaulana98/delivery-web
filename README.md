# Delivery Web Application

A modern, full-stack delivery management system built with React, TypeScript, and Express.

## Project Structure

```
delivery-web/
├── frontend/          # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── public/
├── backend/           # Express + TypeScript backend
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── config/
│   │   └── index.ts
│   └── database/
│       └── migrations/
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

**Both simultaneously (from root):**
```bash
npm run dev
```

## Project Features

- User authentication and authorization
- Real-time order tracking
- Delivery status updates
- Customer notifications
- Admin dashboard
- Performance optimizations with TypeScript and Vite

## License

MIT
