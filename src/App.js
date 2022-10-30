import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Listservice from "./pages/list/Listservice";
import Listvoucher from "./pages/list/Listvoucher";
import Listvendor from "./pages/list/Listvendor";
import Listtransaction from "./pages/list/Listtransaction";
import Listproduct from "./pages/list/Listproduct";
import Listpaymentmethod from "./pages/list/Listpaymentmethod";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, serviceInputs, voucherInputs, vendorInputs, methodInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {


  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Login />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="home">
              <Route index element={<Home />} />
            </Route>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
               <Route
                path="test"
                element={<Single inputs={userInputs} title="Edit" />}
              />
            </Route>
            <Route path="services">
              <Route index element={<Listservice />} />
              <Route path=":serviceId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={serviceInputs} title="Add New Service" />}
              />
              <Route
                path="test"
                element={<Single inputs={serviceInputs} title="Edit" />}
              />
            </Route>
            <Route path="vouchers">
              <Route index element={<Listvoucher />} />
              <Route path=":voucherId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={voucherInputs} title="Add New Voucher" />}
              />
              <Route
                path="test"
                element={<Single inputs={voucherInputs} title="Edit" />}
              />
            </Route>
            <Route path="vendors">
              <Route index element={<Listvendor />} />
              <Route path=":storeId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={vendorInputs} title="Add New Store" />}
              />
               <Route
                path="test"
                element={<Single inputs={vendorInputs} title="Edit" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<Listproduct />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
               <Route
                path="test"
                element={<Single inputs={productInputs} title="Edit" />}
              />
            </Route>
            <Route path="transactions">
              <Route index element={<Listtransaction />} />
              <Route path=":transactionId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Service" />}
              /> */}
            </Route>
            <Route path="paymentmethods">
              <Route index element={<Listpaymentmethod />} />
              <Route path=":methodId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={methodInputs} title="Add New Method" />}
              />
               <Route
                path="test"
                element={<Single inputs={methodInputs} title="Edit" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
