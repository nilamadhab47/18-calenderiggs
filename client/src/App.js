import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SliderHeader from "./component/SliderHeader";
import Venue from "./component/Venue";
import AddEvent from "./components/Admin/AddEvent";
import AddBanner from "./components/Admin/AddBanner";
import ReportsAboutEvent from "./components/Admin/ReportsAboutEvent";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import ReportBanner from "./components/Admin/ReportBanner";
import Image from "./component/Image";
import Admin from "./components/Admin/Admin";
import BookTickets from './components/Admin/BookTickets'
import PutBanner from './components/Admin/PutBanner'
import PutEvent from './components/Admin/PutEvent'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/image" element={<Image/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/SliderHeader" element={<SliderHeader />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reportsEvents" element={<ReportsAboutEvent />} />
        <Route path="/addBanner" element={<AddBanner />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/reportsBanner" element={<ReportBanner/>}/>
        <Route path="/bookTickets" element={<BookTickets/>}/>
        <Route path="/putbanner/:_id" element={<PutBanner/>}/>
        <Route path="/putevent/:_id" element={<PutEvent/>}/>
        <Route />
      </Routes>
      <Routes>


      </Routes>
    </div>
  );
}

export default App;
