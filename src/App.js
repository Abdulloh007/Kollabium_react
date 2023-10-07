import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Auth from './views/Auth/Auth';
import Registration from './views/Auth/Registration';
import EmailConfirmation from './views/Auth/EmailСonfirmation';
import PasswordRecovery from './views/Auth/PasswordRecovery';
import FreelanceBurse from './views/Burse/FreelanceBurse';
import Freelancer from './views/Burse/Freelancer';
import OrdersBurse from './views/Burse/OrdersBurse';
import Order from './views/Burse/Order';
import Product from './views/Products/Product';
import Products from './views/Products/Products';
import Awards from './views/Profile/Awards';
import Followers from './views/Profile/Followers';
import Partners from './views/Profile/Partners';
import PaymentType from './views/Profile/PaymentType';
import Settings from './views/Profile/Settings';
import Statistics from './views/Profile/Statistics';
import Subscriptions from './views/Profile/Subscriptions';
import Team from './views/Profile/Team';
import Tests from './views/Profile/Tests';
import Wallets from './views/Profile/Wallets';
import Chat from './views/Chat';
import PNF from './views/PNF';
import MainStatistics from './views/Statistics';
import Terms from './views/Terms';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Feed from './views/Profile/Feed';

function App() {
  return (
    <>
      <Router>
          <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          {localStorage.getItem(btoa('token')) ? (
            <>
              <Route path="/feed" element={<Feed/>}></Route>
              <Route path="/e-confirm" element={<EmailConfirmation/>}></Route>
              <Route path="/pass-recover" element={<PasswordRecovery/>}></Route>
              <Route path="/freelance-burse" element={<FreelanceBurse/>}></Route>
              <Route path="/orders-burse" element={<OrdersBurse/>}></Route>
              <Route path="/freelancer" element={<Freelancer/>}></Route>
              <Route path="/order" element={<Order/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/awards" element={<Awards/>}></Route>
              <Route path="/followers" element={<Followers/>}></Route>
              <Route path="/partners" element={<Partners/>}></Route>
              <Route path="/payment-type" element={<PaymentType/>}></Route>
              <Route path="/profile" element={<Settings/>}></Route>
              <Route path="/statistics" element={<Statistics/>}></Route>
              <Route path="/subscriptions" element={<Subscriptions/>}></Route>
              <Route path="/team" element={<Team/>}></Route>
              <Route path="/tests" element={<Tests/>}></Route>
              <Route path="/wallets" element={<Wallets/>}></Route>
              <Route path="/chat" element={<Chat/>}></Route>
              <Route path="/main-statistics" element={<MainStatistics/>}></Route>
            </>
          ): (<></>)}
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="*" element={<PNF/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
