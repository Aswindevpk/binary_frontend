import { AuthLayout } from "components/layouts";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <div>
        <h2 className="auth__header">Login to Binary</h2>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default Login;
