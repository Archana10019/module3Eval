import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from'./component/Login';
import AdminDashboard from'./pages/admin/AdminDashboard';
import CustomerDashboard from'./pages/customer/CustomerDashboard';

function App() {


  return (
    <BrowserRouter>
    <Routes>

      <Route path="/"element={<Login/>}/>

      
      <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
       <Route path="/customer/dashboard" element={<CustomerDashboard/>}/>
      

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
