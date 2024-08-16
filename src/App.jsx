import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCrads from "./components/HomeCrads";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/viewAllJobs";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCrads />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
