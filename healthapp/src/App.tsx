import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import TestPakage from "./second/TestPakage";
import Booking from "./Third/Booking";
import Report from "./ReportsPage/Report";
import OrderSummary from "./OrderSummary";
import ShowLabs from "./components/ShowLabs";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate,
} from "react-router-dom";
import BottomNavigationElement from "./components/BottomNavigationElement";
import Radiology from "./HealthTests/Radiology/Radiology";
import PrescriptionDialog from "./components/PrescriptionDialog";
import PakagesTab from "./second/PakagesTab";
import ListPakage from "./DesktopPages/ListPakage";
import Login from "./components/Login";
import SignupPage from "./components/SignupPage";
import Fotter from "./components/Fotter";
import Dashboard from './Dashboard/Dashboard'
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/AuthSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import ManagePackage from "./Dashboard/Manage/ManagePackage/ManagePackage";
import ManageCustomers from "./Dashboard/Manage/ManageCustomers/ManageCustomers";
import SlideShow from "./Dashboard/Appearance/SlideShow/SlideShow";
import AddPackage from "./Dashboard/Manage/ManagePackage/AddPackage";
import AddBanner from "./Dashboard/Appearance/SlideShow/AddBanner";

function App() {
  const loggedUser = useSelector(selectUser) || localStorage.getItem("user");
  const dispatch = useDispatch();
  const admin = true;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(login(user.providerData));
      localStorage.setItem("user", JSON.stringify(user.providerData));
    } else {
      dispatch(logout());
      localStorage.removeItem("user");
    }
  });
  return (
    <div className="App">
      {loggedUser ? (
        <BrowserRouter>
          {<Header />}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/MyReport" element={<Report />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/TestPakage" element={<PakagesTab />} />
            <Route path="/onSummary" element={<OrderSummary />} />
            <Route path="/Radiology" element={<Radiology />} />
            <Route path="/BookingPackages" element={<ListPakage />} />
            <Route path="/selectLab" element={<ShowLabs />} />

            {/* New routes  */}
            {
              admin &&
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='managePackage' element={<ManagePackage />} />
                <Route path='manageCustomers' element={<ManageCustomers />} />
                <Route path='slideShow' element={<SlideShow />} />
                <Route path='addPackage' element={<AddPackage />} />
                <Route path='addBanner' element={<AddBanner />} />
              </Route>
            }
            {/* ...............  */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {!admin && <Fotter />}
          {<BottomNavigationElement />}
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
