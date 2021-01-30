// import Container from "../components/container";
// import Row from "../components//row";
// import Col from "../components//row";
import Hero from "../components/hero";
import Coder from "../images/coderhome.png";
import Headshot from "../images/kyle_headshot.jpg";

function About() {


return (
    <div>
    <Hero
        title="Kyle Schacher"
        subtitle="Welcome to my Github Page"
        imageUrl={Coder}
        imageAlt="coding developer"
    >
    </Hero>
    <section class="about-1">
    <div class="container hero-cta">
        <div class="card-deck">
            <div class="card">
                <i class="material-icons">person_pin</i>
                <div class="card-body">
                    <a href="#bio"><h5 class="card-title">About Me</h5></a>
                </div>
            </div>    
            <div class="card">
                <i class="material-icons">integration_instructions</i>
                <div class="card-body">
                <a href="/portfolio"><h5 class="card-title">View Projects</h5></a>
                </div>
            </div>            
            <div class="card">
                <i class="material-icons">alternate_email</i>
                <div class="card-body">
                <a href="/contact"><h5 class="card-title">Reach Out</h5></a>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section id="bio" class="bio">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <aside class="col-12 col-lg-4">
                    <div id="sidebar" class="card text-center shadow">
                        <div class="card-body">
                            <h2 class="card-title">About Me</h2>
                            <img id="bio-img" class="card-img-top" src={Headshot} alt="headshot"></img>
                          <p class="card-text">Here's me at Philly Tech Week, B.C. (Before COVID)</p>
                        </div>
                      </div>
                </aside>
                <div class="col-12 col-lg-8">
                    <h3><i class="material-icons">description</i>Meta Data</h3>
                    <p>You know that feeling when you get so impassioned by something, so focused on something, that you get lost? That you forget about time, space, the world? I love that feeling, and that's what brough me to coding.</p>
                    <p></p>
                    <h3><i class="material-icons">psychology</i>Beliefs & Values</h3>
                    <div class="row">
                        <div class="col-6 col-lg-4">
                            <ul>
                                <li>Gratitude</li>
                                <li>Open Mindedness</li>
                                <li>Integrity</li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-4">
                            <ul>
                                <li>Always Be Learning</li>
                                <li>Seek to Listen, Not be Heard</li>
                                <li>Commitment</li>
                            </ul>
                        </div>
                        <div class="col"></div>
                    </div>
                    <h3><i class="material-icons">flight</i>Hobbies & Interests</h3>
                    <div class="row">
                        <div class="col-6 col-lg-4">
                            <ul>
                                <li>Cooking</li>
                                <li>Eating New Foods</li>
                                <li>Traveling</li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-4">
                            <ul>
                                <li>Biking (bicycle)</li>
                                <li>Golfing (I'm terrible)</li>
                                <li>Hiking / Outdoors</li>
                            </ul>
                        </div>
                    </div>
                    <h3><i class="material-icons">work</i>Professional Info</h3>
                    <h5>Education</h5>
                    <p>Bachelor's Degree in Advertising from Rowan University</p>
                    <h5>Career</h5>
                    <p>As I got into advertising, I pursued a niche in digital marketing. Email Marketing and Google Adwords lead me into Google Analytics and Website Design with content management systems.</p>
                    <p>Doing such at tech startups with the "next man up" culture, I started wearing Project Mangement and Business Analyst hats. And hence, I got hooked on software developent.</p>

                </div>
            </div>
        </div>
    </section>
    </div>
)

}

export default About;