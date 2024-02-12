import "./contact.css"

function Contact() {
    return (
        <section id="contact">
            <h1 classNameName="center">Contact Us</h1>
            <div id="contactBox">
                <form action="">
                    <div className="form">
                        <label for="Name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form">
                        <label for="Name">Email: </label>
                        <input type="email" name="email" id="name" placeholder="Enter your email" />
                    </div>
                    <div className="form">
                        <label for="Name">Phone: </label>
                        <input type="number" name="phone" id="name" placeholder="Enter your phone number" />
                    </div>
                    <div className="form">
                        <label for="Name">Date: </label>
                        <input type="Date" name="phone" id="name" />
                    </div>
                    <div className="form">
                        <label for="Name" id="name">Complain: </label>
                        <textarea name="complain" id="complain" cols="41" rows="5"></textarea>
                    </div>
                    <div id="lbtn">
                        <input type="submit" value="Submit" className="lbtn" />
                        <input type="reset" value="Reset" className="lbtn" />
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;