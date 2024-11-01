import { AuthLayout } from "@components/layouts";
import RegisterForm from "./RegisterForm";
import { AuthHeader,AuthPara } from "@components/ui";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthLayout>
      <AuthHeader>Register to Binary</AuthHeader>
      <RegisterForm />
      <AuthPara className="text-center mt-2">
        Already have an Account ?{" "}
        <Link className="ml-1 cursor-pointer hover:text-primary" to="/login">
          Log In
        </Link>
      </AuthPara>
    </AuthLayout>
  );
};

export default Register;
