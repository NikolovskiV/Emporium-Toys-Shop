import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginModal from './components/Login/LoginModal';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ToyCard from './pages/ToyCard/ToyCard';
import ToyDetail from './pages/ToyCard/ToyDetail';
import Welcome from './pages/WelcomePage/welcome';
import Home from './pages/home/Home';
import toys from './data/toysData.js';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      document.body.classList.add('logged-in'); // Add class when logged in
    } else {
      setShowLoginModal(false); // Ensure modal is not shown on initial load
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    document.body.classList.add('logged-in'); // Add class when logged in
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowLoginModal(false);
    document.body.classList.remove('logged-in'); // Remove class when logged out
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Router>
      <div>
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onLoginClick={handleLoginClick}
        />
        <div className={isLoggedIn ? 'main-content' : ''}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Welcome />} />
            <Route
              path="/toys"
              element={
                <div className="toy-list">
                  {toys.map(toy => (
                    <ToyCard key={toy.id} {...toy} />
                  ))}
                </div>
              }
            />
            <Route path="/toy/:id" element={<ToyDetail toys={toys} />} />
          </Routes>
          {showLoginModal && (
            <LoginModal
              onLoginSuccess={handleLoginSuccess}
              onClose={handleCloseModal} // Pass the onClose prop
            />
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// import './App.css';
// import LoginModal from './components/Login/LoginModal';
// import Footer from './components/footer/Footer';
// import Navbar from './components/navbar/Navbar';
// import Welcome from './pages/WelcomePage/welcome';
// import Home from './pages/home/Home';

// import { useEffect, useState } from 'react';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       document.body.classList.add('logged-in'); // Add class when logged in
//     } else {
//       setShowLoginModal(false); // Ensure modal is not shown on initial load
//     }
//   }, []);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setShowLoginModal(false);
//     document.body.classList.add('logged-in'); // Add class when logged in
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setShowLoginModal(false);
//     document.body.classList.remove('logged-in'); // Remove class when logged out
//   };

//   const handleLoginClick = () => {
//     setShowLoginModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowLoginModal(false);
//   };

//   return (
//     <div>
//       <Navbar
//         isLoggedIn={isLoggedIn}
//         onLogout={handleLogout}
//         onLoginClick={handleLoginClick}
//       />
//       <div className={isLoggedIn ? 'main-content' : ''}>
//         {isLoggedIn ? <Home /> : <Welcome />}
//         {showLoginModal && (
//           <LoginModal
//             onLoginSuccess={handleLoginSuccess}
//             onClose={handleCloseModal} // Pass the onClose prop
//           />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
