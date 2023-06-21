import ReactDOM from 'react-dom/client'
import { Route,Routes,BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'
import LandingPage from './pages/LandingPage'
import TestPage from './pages/Test'
import SearchPage from './pages/SearchPage'
import WritePage from './pages/WritePage'
import LoginPage from './pages/Login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/landing" element={<LandingPage/>} />
    <Route path="/search" element={<SearchPage/>} />
    <Route path="/write" element={<WritePage/>} />
    <Route path="/login" element={<LoginPage/>} />
	  <Route path="/test" element={<TestPage/>} />
  </Routes>
	</BrowserRouter>,
)
