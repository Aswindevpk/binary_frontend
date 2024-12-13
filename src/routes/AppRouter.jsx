import React,{Suspense,lazy}from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//route warpper
import PrivateRoute from "@utils/PrivateRoute";
import PrivateRouteLoggedIn from "@utils/PrivateRouteLoggedIn";

//contains authentication related
import { AuthProvider } from "@context/AuthContext";
import { Navbar } from "@components/layouts";

import {
  Login,
  VerifyOtp,
  PasswordResetConfirm,
  PasswordResetRequest,
  Test
} from "@pages/auth";

const Register = lazy(()=>import("@pages/auth/Register/Register"))


import {
  Home,
  BlogDetails,
  Settings,
  Plans,
  Payment,
  Profile,
  AuthorDetails,
  PaymentSuccess,
  PaymentFailed,
  Library,
  Tags,
  ExploreTopics,
  Stories,
  ReadingList,
  CreateStory,
  EditStory,
  Followers,
  Following,
  Notifications,
} from "@pages/protected";

import PageNotFound from "@pages/PageNotFound/PageNotFound";


function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route element={<PrivateRouteLoggedIn />}>
            <Route path="/register" element={<Register />} />
            <Route path="/test" element={<Test />} />
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
            <Route path="/create-story" element={<CreateStory />} />
            <Route path="/edit-story/:id" element={<EditStory />} />
            <Route path="/followers/" element={<Followers />} />
            <Route path="/following/" element={<Following />} />
            <Route path="/notifications" element={<Notifications />} /> 
          </Route>
           {/* Catch-all route for 404 Page */}
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
