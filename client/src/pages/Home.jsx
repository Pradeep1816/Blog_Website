import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection";
import UserRegistration from "../Auth/UserRegistration";
import UserLogin from "../Auth/UserLogin";
import CreatePost from "./CreatePost";
import Dashboard from "./admin/Dashboard";
import AdminLogin from "./admin/AdminLogin";
function Home() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}

export default Home;
