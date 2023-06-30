
// import React from 'react';
// import Login from './Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />}>  </Route>
//         <Route path='/signup' element={<Signup />}> </Route>
//         <Route path='/home' element={<Home />}> </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Staff from './Staff';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<Staff />} />

      </Routes>
    </Router>
  );
}

export default App;
