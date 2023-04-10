import { Route,Routes,BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TestPage from "./pages/Test";

function App() {

	return (
		<BrowserRouter>
		<Routes>
	      <Route path="/landing" element={<LandingPage/>} />
	      <Route path="/test" element={<TestPage/>} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;

