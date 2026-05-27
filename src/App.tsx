import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/oem-odm" element={<NotFoundPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/quality" element={<NotFoundPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
