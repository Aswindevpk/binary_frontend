
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import VerifyOtp from './pages/VerifyOtp';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';
import PrivateRouteLoggedIn from './utils/PrivateRouteLoggedIn';
import ForgotPass from './pages/ForgotPass';
import ForgotPassConfirm from './pages/ForgotPassConfirm';
import ResetPass from './pages/ResetPass';
import BlogDetails from './pages/BlogDetails';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Author from './pages/Author';
import BlogEditor from './pages/BlogEditor';





const App = () => {
  // let { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar  />
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
              <Route exact path='/write' element={<BlogEditor />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/author" element={<Author />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
