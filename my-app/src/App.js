import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "./Admin";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { NewProducts } from "./Components/NewProducts";
import { NoMatch } from "./Components/NoMatch";
import { OrderSummary } from "./Components/OrderSummary";
import { Pagination1 } from "./Components/Pagination1";
import { Products } from "./Components/Products";
import { UserDetails } from "./UserDetails";
import { Users } from "./Users";
import { Userspagination } from "./Userspagination";
const LazyAbout = React.lazy(() => import('./Components/About'))


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Userspagination />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="usersPagination" element={<Pagination1 />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
