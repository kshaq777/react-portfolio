import { useEffect, useState } from "react";
import Hero from "../components/hero";
import Project from "../components/project";
import PortCoder from "../images/portfoliocoder.png";
import API from "../util/API";

function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjects()
          .then(res => {
            // console.log(res);
            setProjects(res);
          })
          .catch(err => console.error(err));
      }, []);


    return (
        <div>
        <Hero
            title="Portfolio"
            subtitle="Full Stack Web Development"
            imageUrl={PortCoder}
            imageAlt="coding developer"
        >
        </Hero>
        <section class="portfolio">
        {projects && projects.map(proj => <Project proj={proj}></Project>)}

        </section>
        </div>
    )
}

export default Portfolio;