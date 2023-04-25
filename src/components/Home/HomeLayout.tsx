import Hero from "./Hero/Hero"
import Button from "../Common/OutlinedButton"
import Navbar from "./Navbar/Navbar"

const HomeLayout = () => {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default HomeLayout