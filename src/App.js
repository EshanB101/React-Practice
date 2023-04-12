import React from 'react';
import {Route, Routes} from 'react-router-dom';

//COMPONENTS
import Home from './Components/Home';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProduct';
import NewProducts from './Components/NewProducts';
import Users from './Components/Users';
import UserDetail from './Components/UserDetail';
import Profile from './Components/Profile';
import Login from './Components/Login';
import {AuthProvider} from "./Components/utils/auth";
import RequireAuth from "./Components/utils/RequireAuth";
const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
    return(
     <AuthProvider>
       <Navbar />
       <Routes>
         <Route path={'/'} element={<Home/>} />
         <Route path={'about'} element={
           <React.Suspense fallback={'Loading..'}>
             <LazyAbout/>
           </React.Suspense>
         } />
         <Route path={'order-summary'} element={<OrderSummary/>} />
         <Route path={'products'} element={<Products/>} >
           <Route index element={<FeaturedProducts/>}/>
           <Route path={'featured'} element={<FeaturedProducts/>}/>
           <Route path={'new'} element={<NewProducts/>}/>
         </Route>
         <Route path={'users'} element={<Users/>} />
         <Route path={'users/:userId'} element={<UserDetail/>} />
         <Route path={'profile'} element={
           <RequireAuth>
             <Profile/>
           </RequireAuth>}/>
         <Route path={'login'} element={<Login/>} />
         <Route path={'*'} element={<NoMatch/>} />
       </Routes>
     </AuthProvider>
    );
}

export default App;
