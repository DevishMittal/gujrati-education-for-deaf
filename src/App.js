import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import CourseHome from "./components/allcourse/CourseHome";
import CourseSections from "./components/allcourse/CourseSections";
import GujratiAlpha from "./components/allcourse/GujratiAlpha"
import QuizSection from "./components/assesment/QuizHome";
import Levels from "./components/assesment/Levels";
import Quiz from "./components/assesment/sections";
import Animals from "./components/allcourse/Animals";
import Team from "./components/team/Team";
import React from "react";
import EnglishAlpha from "./components/allcourse/EnglishAlpha";
import Fruits from "./components/allcourse/fruits";
import Count from "./components/allcourse/Count";
import 'bootstrap/dist/css/bootstrap.min.css';
 // New Component for the sections
// import SectionDetail from "./components/SectionDetail"; // New Component for each section

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/assessment" element={<QuizSection />} />
          <Route path="/levels/:category" element={<Levels />} />
          <Route path="/quiz/:category/:level" element={<Quiz />} />
          <Route path="/learn/:courseId" element={<CourseSections />} />
          <Route path="/learn/4/Alphabets" element={<GujratiAlpha />}/>
          <Route path="/learn/1/alphabets" element={<EnglishAlpha />}/>
          <Route path="/learn/3/animals" element={<Animals />}/>
          <Route path="/learn/1/fruits" element={<Fruits />}/>
          <Route path="/learn/2/counting" element={<Count />}/>
          <Route path="/team" element={<Team />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
