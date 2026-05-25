import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-indigo-600">Delivery Web</h1>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto p-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Delivery Web</h2>
                <p className="text-xl text-gray-600">Manage your deliveries efficiently</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
