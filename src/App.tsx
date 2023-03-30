import { Route,Routes,BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {

	return (
		<BrowserRouter>
		<Routes>
	      <Route path="/landing" element={<LandingPage/>} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;

