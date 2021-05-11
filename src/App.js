import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PhotoBlog from './components/PhotoBlog/PhotoBlog';
import "./index.css";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <PhotoBlog />
      <Footer />      
    </div>
  )
}
