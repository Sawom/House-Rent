import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty/AddProperty";
import Profile from "./components/Profile/Profile/Profile";
import NavLayout from "./layouts/NavLayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import PropertyInfo from "./pages/PropertyInfo/PropertyInfo";
import SavedProperty from "./components/SavedProperty/SavedProperty";

// tanstack query added
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from "./pages/Auth/AuthProvider/AuthProvider";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
         <QueryClientProvider client={queryClient} >
            <Router>
              <Routes>
                  <Route path="/" element={<NavLayout />}>
                    <Route index exact element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="add-property" element={<AddProperty />} />
                  </Route>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/property-info" element={<PropertyInfo />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/saved-property" element={<SavedProperty />} />
              </Routes>
          </Router>
         </QueryClientProvider>
    </AuthProvider>

    
  );
}

export default App;
