import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//route warpper
import PrivateRoute from "../utils/PrivateRoute";
import PrivateRouteLoggedIn from "../utils/PrivateRouteLoggedIn";

//contains authentication related
import { AuthProvider } from "../context/AuthContext";
import { Navbar } from "components/layouts";

import {
  Register,
  Login,
  VerifyOtp,
  PasswordResetConfirm,
  PasswordResetRequest,
} from "pages/auth";

import {
  Home,
  BlogDetails,
  Settings,
  Plans,
  Payment,
  Profile,
  AuthorDetails,
  WriteBlog,
  PaymentSuccess,
  PaymentFailed,
  Library,
  Tags,
  ExploreTopics,
  Stories,
  ReadingList,
} from "pages/protected";



function AppRouter(){
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route element={<PrivateRouteLoggedIn />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp/:username/" element={<VerifyOtp />} />
            <Route path="/password-reset" element={<PasswordResetRequest />} />
            <Route
              path="/reset-password/:uid/:token/"
              element={<PasswordResetConfirm />}
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/plans" element={<Plans />} />
            <Route path="/payment" element={<Payment />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/write" element={<WriteBlog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/library" element={<Library />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/author/:id" element={<AuthorDetails />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
            <Route path="/tag" element={<Tags />} />
            <Route path="/explore-topics" element={<ExploreTopics />} />
            <Route path="/reading-list" element={<ReadingList />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
