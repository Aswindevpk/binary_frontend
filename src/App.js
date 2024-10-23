import AppRouter from 'routes/AppRouter';
import './App.css';
import './index.css';
import { Toaster} from "sonner";



const App = () => {
  return (
    <>
      <AppRouter/>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;
