// import './App.css';
import './index.css';
import { Toaster} from "sonner";
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <>
      <AppRouter/>
      <Toaster position="top-center" /> 
    </>
  );
};

export default App;
