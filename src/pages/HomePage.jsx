import React from "react";
import Hero from "../components/Hero";
import HomeCrads from "../components/HomeCrads";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/viewAllJobs";

function HomePage() {
  return (
    <div>
      <Hero />
      <HomeCrads />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
}

export default HomePage;
