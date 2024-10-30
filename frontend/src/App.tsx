import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="flex flex-col items-center text-xl bg-slate-300">
      <Toaster position="bottom-left" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
