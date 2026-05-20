import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<NotFoundPage />} />
          <Route path="/oem-odm" element={<NotFoundPage />} />
          <Route path="/products" element={<NotFoundPage />} />
          <Route path="/quality" element={<NotFoundPage />} />
          <Route path="/news" element={<NotFoundPage />} />
          <Route path="/contact" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
