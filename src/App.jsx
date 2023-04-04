import DashBoard from "./Component/DashBoard/DashBoard"
import Navlink from "./Component/Navlink/Navlink"
import PhoneBar from "./Component/PhoneBar/PhoneBar"
import Pricing from "./Component/Pricing/Pricing"


function App() {
 

  return (
    <div className="App px-14">
      <Navlink></Navlink>
      
      <h3 className="text-center text-7xl text-blue-400">Hello Tailwind</h3>
      <Pricing></Pricing>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
