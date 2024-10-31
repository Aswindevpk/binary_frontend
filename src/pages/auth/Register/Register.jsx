import { AuthLayout } from "@components/layouts";
import RegisterForm from "./RegisterForm";
import { AuthHeader } from "@components/ui";

const Register = () => {
  return (
    <AuthLayout>
      <AuthHeader>Register to Binary</AuthHeader>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
