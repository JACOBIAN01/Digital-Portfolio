import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import UnderDev from "../components/UnderDev";
import '../index.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <UnderDev/>
    </div>
  );
}

export default Home;
