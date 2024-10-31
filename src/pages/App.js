import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../Shared/Footer.jsx";
import Header from "../Shared/Header.jsx";

import Routers from "../routers/Routers.jsx";

export default function App() {
  return (
    <div>
      <Header />
      
      <Routers/>
      

      <Footer />
    </div>
  );
}
