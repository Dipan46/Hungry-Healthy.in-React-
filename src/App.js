import './App.css';
import Navbar from "./Component/Navbar/navbar";
import Home from "./Component/Home/home";
import Services from "./Component/Services/services"
import Client from "./Component/Client/client"

function App() {
  return (
    <div className="App">
      <Navbar
        logo="https://dipan46.github.io/Hungry-Healthy.in/img/icon.png"
      />
      <Home />
      <Services
        img1="https://dipan46.github.io/Hungry-Healthy.in/img/salad.png"
        img2="https://dipan46.github.io/Hungry-Healthy.in/img/fast-food.png"
        img3="https://dipan46.github.io/Hungry-Healthy.in/img/delivery.png"
      />
      <Client
        client1="https://dipan46.github.io/Hungry-Healthy.in/img/brand-image.png"
        client2="https://dipan46.github.io/Hungry-Healthy.in/img/brand-image.png"
        client3="https://dipan46.github.io/Hungry-Healthy.in/img/brand-image.png"
        client4="https://dipan46.github.io/Hungry-Healthy.in/img/brand-image.png"
      />
    </div>
  );
}

export default App;
