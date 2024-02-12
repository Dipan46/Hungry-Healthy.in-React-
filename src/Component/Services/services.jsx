import "./servicea.css"
function Services(props) {
    return (
        <section id="sContainer">
            <h1 class="secondary center">Services We Provide</h1>
            <div class="services">
                <h2 class="hSecondary center">Homemade-Food</h2>
                <div class="box">
                    <img src={props.img1} alt="Veg" />
                    <p class="center">Away from home! don't worry. Hungry & Healthy.in is here to save you.
                        You can find varity of home made food here.</p>
                </div>
                <h2 class="hSecondary center">Fast-Food</h2>
                <div class="box">
                    <p class="center">You can find the best quality fast food here. You will be able to find
                        any type of fastfood you want within reasonable price.</p>
                    <img src={props.img2} alt="Fast-Food" />
                </div>
                <h2 class="hSecondary center">Delivery</h2>
                <div class="box">
                    <img src={props.img3} alt="Delivery" />
                    <p class="center">We are just one click away from you. Instand delevary to your door. With our fast
                        and helpful delevary pertners you dont have to starve this time</p>
                </div>
            </div>
        </section>
    );
}
export default Services;