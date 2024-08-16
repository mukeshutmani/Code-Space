import { useEffect, useState } from 'react';
import './App.css'
import './conf/conf'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice';
import {Header, Footer, Loader} from './components'
import {Outlet} from 'react-router-dom'
 

function App() {
  //  console.log(process.env.REACT_APP_APPWRITE_URL);
  // for(const key in conf ) {
  //      console.log(key ,":", conf[key]);
  // }
  
 const [loading , setLoading] = useState(true)
 const dispatch = useDispatch()
 
 useEffect(() => {
        authService.getCurrentUser()
        .then( (userData) => {
             if(userData){
              dispatch(login({userData}))
             } else {
                dispatch(logout())
             }
        })
        .finally(() => setLoading(false))
 },[])
  
 return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between '>
    <div className='w-full block'>
        <Header />
         <main>
           <Outlet />
         </main>
        <Footer />
    </div>
       
  </div>
 ): <div className='min-h-screen flex justify-center'> 
  <Loader />
 </div>
}

export default App
