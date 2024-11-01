import { AuthLayout } from "@components/layouts";
import LoginForm from "./LoginForm";
import { AuthHeader,AuthPara } from "@components/ui";
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <AuthLayout>
      <div>
        <AuthHeader>Login to Binary</AuthHeader>
        <LoginForm />
        <AuthPara className="text-center mt-2">
        Don't have an account?
        <Link className="ml-2 cursor-pointer hover:text-primary" to="/register">
          Sign up
        </Link>
      </AuthPara>
      </div>
    </AuthLayout>
  );
};

export default Login;
