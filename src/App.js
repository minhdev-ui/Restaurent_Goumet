import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
// import About from "./components/about/about";
// import Menu from "./components/menu/menu";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import AdminLogin from './components/admin/admin'
import Users from './components/admin/users'
import Menus from './components/admin/menus'
import Chefs from './components/admin/chefs'
import NavbarAdmin from './components/admin/navbarAdmin'
import Gallery from "./components/gallery/gallery";
import AddUser from "./components/admin/addUser";
function App() {
  let location = useLocation();
  return (
    <div className='App'>
      <nav>
          {location.pathname.includes('/admin/adminPage') && <NavbarAdmin/>}
          {location.pathname.includes('/admin') || <Navbar/>}
      </nav>
        <Routes>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/admin/adminPage/users" element={<Users/>}/>
            <Route path="/admin/adminPage/users/addUser" element={<AddUser/>}/>
            <Route path="/admin/adminPage/menus" element={<Menus/>}/>
            <Route path="/admin/adminPage/chefs" element={<Chefs/>}/>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu/>}/> */}
            <Route path="contact" element={<Contact/>}/>
            <Route path="gallery" element={<Gallery/>}/>
        </Routes>
        <footer>
          {location.pathname.includes('/admin') || <Footer/>}
        </footer>
    </div>
  );
}
export default App;
