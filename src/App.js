
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import PostForm from './components/PostForm';

import PostList from './components/PostList';
import ReadMore from './components/ReadMore';


function App() {
  return (
  
<div className=' '>
<Navbar/>
<Routes>
<Route path='/PostForm' element={<PostForm/>}/>
<Route path='/' element={<PostList/>}/>
<Route path='/post/:id' element={<ReadMore/>}/>
</Routes>
       </div>
   
  );
}

export default App;
