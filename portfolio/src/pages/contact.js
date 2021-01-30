import Hero from "../components/hero"
import devs from "../images/collabdevs.png";
function Contact() {
 
    function handleFormSubmit(e) {
        return (
            <div id='alert-popup' class='alert alert-primary' role='alert'>A simple primary alert—check it out!</div>
        )
    }
    
    return (
        <div>
        <Hero
            title="Contact"
            subtitle="Let's Code Together"
            imageUrl={devs}
            imageAlt="collaborating devs"
        >
        </Hero>
        <section class="contact">
            <div class="container w-75 justify-content-center">
            <form action="https://formsubmit.co/44ddfc39d3f394f842517e4211d4a75d" method="POST">
                <div class="form-group">
                <label for="name">Name</label>
                <input name="name" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Name"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input name="email" type="email" class="form-control" id="email" aria-describedby="eemail" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" class="form-control" id="message" rows="5" placeholder="Enter text here"></textarea>
                </div>
                <button onClick={handleFormSubmit}id="alert-btn" type="submit" value="submit" class="btn btn-primary btn-lg">Submit</button>
            </form>
            </div>
        </section>
        </div>
    )
}

export default Contact;