import { NavLink } from "react-router-dom";
import "./about.css";

export const About = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-inner">
                    <h1>Step-On: More Than Just Shoes</h1>
                    <p>Comfort. Style. Innovation.</p>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="about-story">
                <div className="story-inner">
                    <div className="story-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2020, Step-On was born to redefine comfort in footwear.
                            Every pair is crafted to support your steps, while keeping you stylish
                            wherever you go. From our first collection to our latest innovations,
                            our mission remains the same: your comfort matters.
                        </p>
                    </div>
                    
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="about-mission">
                <div className="mission-inner">
                    <div className="mission-card">
                        <h3>Our Mission</h3>
                        <p>To create shoes that combine style and comfort for every step you take.</p>
                    </div>
                    <div className="mission-card">
                        <h3>Our Vision</h3>
                        <p>To be the most loved footwear brand for active and lifestyle enthusiasts.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                       
                        <h4>John Doe</h4>
                        <p>Founder</p>
                    </div>
                    <div className="team-member">
                        <h4>Jane Smith</h4>
                        <p>Lead Designer</p>
                    </div>

                    {/* Add more team members */}
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <h2>Explore Our Collections</h2>
                <NavLink to="/product" className="btn-primary">Shop Now</NavLink>
            </section>

        </>
    );
};
