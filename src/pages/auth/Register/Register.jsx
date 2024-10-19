import { AuthLayout } from "components/layouts";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <AuthLayout>
      <h2 className="auth__header">Register to Binary</h2>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
