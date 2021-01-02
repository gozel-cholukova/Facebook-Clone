import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

// import firebase from './firebase';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      
      {/* Widgets */}
      <Widgets />
      </div>     
      
    </div>
  );
}

export default App;
