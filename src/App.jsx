import HomePage from './HomePage';
import WelcomePage from './WelcomePage';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Viewplace from './Pages/Viewplace';
import ForgotPassword from './Pages/ForgotPassword';
import ProfilePage from './Pages/ProfilePage';
function App() {
  

  return (
    <>
     <Routes>
        
          <Route path="home" element={<HomePage/>} />
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} /> 
          <Route path="/view" element={<Viewplace/>} /> 
          <Route path="/forgot" element={<ForgotPassword/>} /> 
          <Route path="/profile" element={<ProfilePage/>} /> 

          

    </Routes>
    </>
  );
}

export default App;