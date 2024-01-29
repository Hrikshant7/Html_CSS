
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import Header from '../components/header/Header';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/dashboard/Dashboard';
const AppRoutes = () => {
    // trying to simulate the behavior
    const isUserAuthenticated = false;

    return(
        <>
          <Router>
          <Header />
            <Routes>
                {/* Public route */}
                <Route path="*" element={<PageNotFound />}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>

                {/* Private Route */}
                <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} isUserAuthenticated={isUserAuthenticated}/>}></Route>
            </Routes>
          </Router>
        </>
    )
};

export default AppRoutes;