import "./about.css";
import AboutCIT from "../components/AboutCIT";
import AboutDepartment from "../components/AboutDepartment";
import AboutIntellina from "../components/AboutIntellina";
import StatsSection from "../components/StatsSection";
import EventHighlights from "../components/EventHighlights";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About</h1>
      </div>

      <AboutCIT />
      <AboutDepartment />
      <AboutIntellina />
      <StatsSection />
      <EventHighlights />
    </div>
  );
}
