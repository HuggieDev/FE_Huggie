import { Route,Routes } from "react-router-dom"
import LandingPage from "./LandingPage"
import SearchPage from "./SearchPage"
import WritePage from "./WritePage 2"
import LoginPage from "./Login"
import LoginRedirectPage from "../components/unit/redirect/redirect"
import RestaurantDetailPage from "./RestaurantDetailPage"
import TestPage from "./Test"
export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/home" element={<LandingPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/write" element={<WritePage/>} />
            <Route path="/" element={<LoginPage/>} />
            <Route path="/social" element={<LoginRedirectPage/>} />
            <Route path="/myList" element={<RestaurantDetailPage/>} />
	        <Route path="/test" element={<TestPage/>} />
          </Routes>
        </>
    )
}