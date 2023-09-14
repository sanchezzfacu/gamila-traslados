import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import QualitiesSection from "@/components/QualitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import SliderSection from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <NavBar />

      <SliderSection />

      <AboutSection />
    
      <ServicesSection />

      <QualitiesSection />

      <ReviewsSection />

      {/* <ContactInfo /> */}

      <ContactForm />
    </main>
  )
}
