import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Home";
import ListOfDegrees from "./components/ListOfDegrees";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";
import Banner from "./components/common/Banner";
import Students from "./components/Students";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact2 from "./components/ContactMain";
import Engineering from "./components/details/Engineering";
import Medical from "./components/details/Medical";
import ArtsAndScience from "./components/details/ArtsAndScience";
import TermsAndConditions from "./components/Terms/Termsandcon";
import Download from "./components/Download/Download";

function App() {
  const [showHeader, setShowHeader] = useState(true); // Initially visible
  const [isAtTop, setIsAtTop] = useState(true); // Tracks if the page is at the top
  const [isMobile, setIsMobile] = useState(false); // Tracks if the device is mobile
  let scrollTimeout; // Timer for detecting scroll inactivity

  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
    };

    // Check initial state
    checkMobile();

    // Add resize listener to update mobile state
    window.addEventListener("resize", checkMobile);

    Aos.init({ disable: "mobile" });

    // Check initial position
    setIsAtTop(window.pageYOffset === 0);

    const handleScroll = () => {
      // If mobile device, always show header and return
      if (isMobile) {
        setShowHeader(true);
        return;
      }

      const scrollPosition = window.pageYOffset;
      const isTop = scrollPosition === 0;
      setIsAtTop(isTop);

      if (isTop) {
        setShowHeader(true); // Always show header when at the top
        return;
      }

      // If scrolled just a little (less than 20px), keep header visible
      if (scrollPosition > 0 && scrollPosition <= 100) {
        setShowHeader(true);
        return;
      }

      setShowHeader(true); // Show header when scrolling
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Don't hide header on mobile devices
        if (isMobile) return;

        // Double-check current scroll position before hiding
        const currentPos = window.pageYOffset;
        if (currentPos > 0 && currentPos > 20) {
          setShowHeader(false); // Hide header after inactivity only if scrolled past threshold
        }
      }, 1500); // Adjust delay as needed
    };

    // Initial call to set up correct state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  return (
    <Router>
      <div className="">
        <div
          style={{
            position: isMobile ? "static" : "sticky",
            top: 0,
            zIndex: 1000,
            // On mobile devices, always keep header visible
            transform: isMobile
              ? "translateY(0)"
              : showHeader
                ? "translateY(0)"
                : "translateY(-100%)",
            transition: "transform 0.3s ease-in-out",
            backgroundColor: isAtTop ? "transparent" : "white", // Optional: Change background when scrolling
          }}
        >
          <Banner />
          <Header />
        </div>
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/arts-and-science" element={<ArtsAndScience />} />
          <Route path="/list-of-degrees" element={<ListOfDegrees />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<Contact2 />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/download" element={<Download />} />


          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
