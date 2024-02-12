import "./home.css";

function Home(props) {
    return (
        <section id="home">
            <h1 className="primary animate__animated animate__backInDown">Welcome to Hungry & Healthy.in</h1>
            <p>We connect you to the helthyest options possibel near you</p>
            <p>Find the moms magic everyehere</p>
            <div id="topbtn">
                <button className="btn animate__animated animate__backInLeft"><a
                    href={props.homemade}>Homemade</a></button>
                <button className="btn animate__animated animate__backInRight"><a
                    href={props.restaurant}>Restaurant</a></button>
            </div>
        </section>
    );
}
export default Home;