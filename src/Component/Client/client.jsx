import "./client.css"

function Client(props) {
    return (
        <section id="client">
            <h1 class="hSecondary center">Our Partners</h1>
            <div>
                <div class="clientID">
                    <img src={props.client1} alt="Our Client" />
                </div>
                <div class="clientID">
                    <img src={props.client2} alt="Our Client" />
                </div>
                <div class="clientID">
                    <img src={props.client3} alt="Our Client" />
                </div>
                <div class="clientID">
                    <img src={props.client4} alt="Our Client" />
                </div>
            </div>
        </section>
    );
}

export default Client;