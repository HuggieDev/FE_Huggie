import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,Routes,BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'
import LandingPage from './pages/LandingPage'
import TestPage from './pages/Test'
import SearchPage from './pages/SearchPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/landing" element={<LandingPage/>} />
    <Route path="/search" element={<SearchPage/>} />
	  <Route path="/test" element={<TestPage/>} />
  </Routes>
	</BrowserRouter>
  </React.StrictMode>,
)
