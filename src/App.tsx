import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Suspense ,lazy } from "react";
import Loader from "./components/Loader";
const Dashboard =lazy(()=>import ('./pages/Dashboard'));
const Customers =lazy(()=>import ('./pages/Customers'));
const Transaction =lazy(()=>import ('./pages/Transaction'));
const Products =lazy(()=>import ('./pages/Products'));


const App = () => {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        {/* App */}
        
        {/* charts */}
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
