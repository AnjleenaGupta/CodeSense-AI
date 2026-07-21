import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Review from "./pages/Review";
import ReviewDetails from "./pages/ReviewDetails";

function Layout(){

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";


  return(
    <>

      {!hideNavbar && <Navbar />}


      <Routes>

      
<Route path="/" element={<Home />} />

        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/register" 
          element={<Register />} 
        />


        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
<Route
  path="/review"
  element={
    <ProtectedRoute>
      <Review />
    </ProtectedRoute>
  }
/>

        <Route
path="/review/:id"
element={
<ProtectedRoute>
<ReviewDetails/>
</ProtectedRoute>
}
/>

      </Routes>

    </>
  );

}



function App(){

  return(

    <BrowserRouter>

      <Layout />

    </BrowserRouter>

  );

}


export default App;