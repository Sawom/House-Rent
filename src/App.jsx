import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty/AddProperty";
import Profile from "./components/Profile/Profile/Profile";
import NavLayout from "./layouts/NavLayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
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
import PrivateRoute from "./pages/Auth/PrivateRoute/PrivateRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminHome from "./pages/DashboardPage/Admin/AdminHome/AdminHome";
import LandlordHome from "./pages/DashboardPage/Landlord/LandlordHome/LandlordHome";
import TenantHome from "./pages/DashboardPage/Tenant/TenantHome/TenantHome";
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
                  {/* apartments */}
                  <Route path="/apartments" element={<Dashboard />} />
                  {/* dynamic route */}
                  <Route path="apartmentsinfo/:id" element={<PropertyInfo />} />

                  {/* dashboard page , nested route */}
                  <Route path='/dashboard' element={ 
                    <PrivateRoute>
                      <DashboardPage></DashboardPage>
                    </PrivateRoute>
                   } > 
                      {/* admin home */}
                      <Route path='adminhome' element={ <AdminHome></AdminHome> } > </Route>

                      {/* landlord home */}
                      <Route path='landlordhome' element={ <LandlordHome></LandlordHome> } > </Route>

                      {/* tenant home */}
                      <Route path='tenanthome' element={ <TenantHome></TenantHome> } > </Route>


                  </Route>

                  <Route path="/profile" element={<Profile />} />
                  <Route path="/saved-property" element={<SavedProperty />} />
              </Routes>
          </Router>
         </QueryClientProvider>
    </AuthProvider>

    
  );
}

export default App;
