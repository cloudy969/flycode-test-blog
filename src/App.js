import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './Components/Pages/Posts';
import MyPosts from './Components/Pages/MyPosts';
import MyComments from './Components/Pages/MyComments';
import Navigation from './Components/Common/Navigation';


function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/my-posts' element={<MyPosts />} />
        <Route path='/my-comments' element={ <MyComments /> } />
      </Routes>
    </>

  );
}

export default App;
