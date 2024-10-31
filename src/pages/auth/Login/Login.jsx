import { AuthLayout } from "@components/layouts";
import LoginForm from "./LoginForm";
import { AuthHeader } from "@components/ui";



const Login = () => {
  return (
    <AuthLayout>
      <div>
        <AuthHeader>Login to Binary</AuthHeader>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default Login;
