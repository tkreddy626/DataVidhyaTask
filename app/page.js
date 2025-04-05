import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PlatformSection from "@/components/PlatformSection";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen">
     
     <Navbar />
      <main className="pt-20 px-8">
     
      <HeroSection/>

      <CoursesSection/>

      <ProjectsSection/>
      <PlatformSection/>
      <CustomerTestimonials/>
      <FAQSection/>
      <Footer/>
       
      </main>
    </div>
  );
}
