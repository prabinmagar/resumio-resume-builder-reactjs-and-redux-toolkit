import Banner from "../../components/screens/home/Banner/Banner";
import "./HomeScreen.scss";
import Benefits from "../../components/screens/home/Benefits/Benefits";
import TestimonySingle from "../../components/screens/home/TestimonySingle/TestimonySingle";
import ChooseResume from "../../components/screens/home/ChooseResume/ChooseResume";
import CascadeTemplate from "../../components/screens/home/CascadeTemplate/CascadeTemplate";
import Try from "../../components/screens/home/Try/Try";

const HomeScreen = () => {
return (
    <div className="pg-home">
      <Banner />
      <Benefits />
      <TestimonySingle />
      <CascadeTemplate />
      <ChooseResume />
      <Try />
    </div>
  )
}

export default HomeScreen
