import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectPage from "../components/Projects";
import UnderDev from "../components/UnderDev";
import '../index.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ProjectPage/>
    </div>
  );
}

export default Home;
