import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
import CreatePost from './views/Posts/CreatePost';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Feed from './views/Profile/Feed';
import Post from './views/Posts/Post';
import User from './views/User';
import Favorite from './views/Profile/Favorite';
import PartnersList from './views/Profile/PartnersList';

import FreelanceDialog from './components/popups/Freelance';
import NewsDialog from './components/popups/News';
import PurchaseDialog from './components/popups/Purchase';
import RaitingDialog from './components/popups/Raiting';

function App() {

  function Protected(element) {
    const navigate = useNavigate()
    useEffect(() => {
      if (!localStorage.getItem(btoa('token'))) return navigate('/auth')
    }, [])

    if (localStorage.getItem(btoa('token'))) return element.element
    else return (<></>)
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {localStorage.getItem(btoa('token')) ? (<Route index element={<Home />}></Route>) : (<Route index element={<Auth />}></Route>)}
          <Route path="/post" element={<Post />}></Route>
          <Route path="/user" element={<Protected element={<User />}></Protected>}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/feed" element={<Protected element={<Feed />}></Protected>}></Route>
          <Route path="/e-confirm" element={<EmailConfirmation />}></Route>
          <Route path="/pass-recover" element={<PasswordRecovery />}></Route>
          <Route path="/freelance-burse" element={<Protected element={<FreelanceBurse />}></Protected>}></Route>
          <Route path="/orders-burse" element={<Protected element={<OrdersBurse />}></Protected>}></Route>
          <Route path="/freelancer" element={<Protected element={<Freelancer />}></Protected>}></Route>
          <Route path="/create-post" element={<Protected element={<CreatePost />}></Protected>}></Route>
          <Route path="/order" element={<Protected element={<Order />}></Protected>}></Route>
          <Route path="/products" element={<Protected element={<Products />}></Protected>}></Route>
          <Route path="/product" element={<Protected element={<Product />}></Protected>}></Route>
          <Route path="/awards" element={<Protected element={<Awards />}></Protected>}></Route>
          <Route path="/followers" element={<Protected element={<Followers />}></Protected>}></Route>
          <Route path="/partners" element={<Protected element={<Partners />}></Protected>}></Route>
          <Route path="/partners-list" element={<Protected element={<PartnersList />}></Protected>}></Route>
          <Route path="/payment-type" element={<Protected element={<PaymentType />}></Protected>}></Route>
          <Route path="/profile" element={<Protected element={<Settings />}></Protected>}></Route>
          <Route path="/favorite" element={<Protected element={<Favorite />}></Protected>}></Route>
          <Route path="/statistics" element={<Protected element={<Statistics />}></Protected>}></Route>
          <Route path="/subscriptions" element={<Protected element={<Subscriptions />}></Protected>}></Route>
          <Route path="/team" element={<Protected element={<Team />}></Protected>}></Route>
          <Route path="/tests" element={<Protected element={<Tests />}></Protected>}></Route>
          <Route path="/wallets" element={<Protected element={<Wallets />}></Protected>}></Route>
          <Route path="/chat" element={<Protected element={<Chat />}></Protected>}></Route>
          <Route path="/main-statistics" element={<Protected element={<MainStatistics />}></Protected>}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="*" element={<PNF />}></Route>
        </Routes>
        <Footer />
        <Loader/>
        <FreelanceDialog/>
        <NewsDialog/>
        <PurchaseDialog/>
        <RaitingDialog/>
      </Router>
    </>
  );
}

export default App;
