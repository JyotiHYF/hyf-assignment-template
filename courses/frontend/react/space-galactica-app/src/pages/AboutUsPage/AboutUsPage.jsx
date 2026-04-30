import styles from "./AboutUsPage.module.css";
import OurValues from "./OurValues.jsx";
import OurCrew from "./OurCrew.jsx";
import OurPartners from "./OurPartners.jsx";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Mission</h2>
          <p>
            At Galactica, our mission is to unlock the wonders of the universe
            for everyone. We believe that space is the final frontier and that
            the opportunity to explore it should be within everyone’s reach. Our
            journeys are designed to inspire, educate, and provide a
            once-in-a-lifetime experience that transcends the ordinary.
          </p>
        </section>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
