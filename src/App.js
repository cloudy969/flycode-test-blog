import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './Components/Pages/Posts';
import MyPosts from './Components/Pages/MyPosts';
import MyComments from './Components/Pages/MyComments';
import Navigation from './Components/Common/Navigation';
import { useState } from 'react';


function App() {

  const [isAdded, setIsAdded] = useState(false);

  return (
    <>
      <Navigation setIsAdded={setIsAdded} />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/my-posts' element={<MyPosts isAdded={isAdded} setIsAdded={setIsAdded}/>} />
        <Route path='/my-comments' element={<MyComments />} />
      </Routes>
    </>

  );
}

export default App;
