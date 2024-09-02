
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

//route warpper
import PrivateRoute from './utils/PrivateRoute';
import PrivateRouteLoggedIn from './utils/PrivateRouteLoggedIn';

//contains authentication related
import { AuthProvider } from './context/AuthContext';
//importing pages
import {
  Home, Register, Login, VerifyOtp, ForgotPass, ForgotPassConfirm,
  ResetPass, BlogDetails, Plans, Payment, Profile, Author, WriteBlog,PaymentSuccess,PaymentFailed
} from './pages';
import { Navbar } from './components';


const App = () => {
  // let { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRouteLoggedIn />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify-otp" element={<VerifyOtp />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="/forgot-password-confirm/:token" element={<ForgotPassConfirm />} />
              <Route path="/reset-password" element={<ResetPass />} />
            </Route>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route path="/plans" element={<Plans />} />
              <Route path="/payment" element={<Payment />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='/write' element={<WriteBlog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/author" element={<Author />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failed" element={<PaymentFailed />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
