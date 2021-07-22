import React from 'react'
import "./body.css"
import About from "./about/index"
import Services from "./services/index"
import Work from "./work/index"
import Team from "./team/index"
import Contact from "./contact/index"
function Body() {
    return (
        <div className="body">
            <section id="home">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="projects">
                <Work />
            </section>
            <section id="team">
                <Team />   
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
