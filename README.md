# Delivery Web Application 🚚

Platform untuk menghubungkan pelanggan dengan penyedia jasa/barang dengan tracking real-time dan sistem pembayaran terintegrasi.

## 🌟 Fitur Utama

### Untuk Pelanggan
- ✅ Registrasi & login
- ✅ Browse produk/jasa dari penyedia
- ✅ Real-time tracking pesanan di peta
- ✅ Sistem pembayaran (dummy mode)
- ✅ Riwayat pembelian
- ✅ Notifikasi status pesanan

### Untuk Penyedia Jasa
- ✅ Registrasi & login sebagai penyedia
- ✅ Post produk/jasa yang ditawarkan
- ✅ Real-time share lokasi pengiriman
- ✅ Dashboard earnings
- ✅ Sistem penarikan dana
- ✅ Manajemen pesanan

## 💰 Sistem Biaya Admin

Pelanggan membayar: $100
- Admin fee (2.5%): $2.50
- Penyedia terima: $97.50

Penyedia tarik dana: $97.50
- Admin fee (2.5%): $2.44
- Penyedia terima: $95.06

Total fee aplikator: $4.94 ≈ 5%

## 🛠️ Tech Stack
- Frontend: React 18 + TypeScript + Tailwind CSS
- Backend: Node.js + Express.js
- Database: PostgreSQL
- Real-time: Socket.io
- Maps: Leaflet + OpenStreetMap
- Payment: Stripe (test mode)
- Auth: JWT + Refresh Token

## 📁 Project Structure
- frontend/ - React web app
- backend/ - API server
- docs/ - Documentation
