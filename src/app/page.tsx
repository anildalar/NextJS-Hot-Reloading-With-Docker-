//1 Import Area
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Section from "./components/Section";


//2 Function defination area
function Home() {
  //2.1 Hook Variable


  //2.2  Function defination


  //2.3 Return statemnt
  return (
   <>
      <div className="container-fluid a_tbdr">
        <Header />
        <main className="row m-0">
            <Aside />
            <Section />
        </main>
        <Footer />
      </div>
   </>
  );
}


//3. Export area
export default Home;
