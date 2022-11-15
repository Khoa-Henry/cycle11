import { Link } from "react-router-dom";
import CommonButton from "../../components/CommonButton/index.js";
import MuiButton from "../../components/MuiButton/index.js";

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <Link to="aboutyou">
        <CommonButton buttonName="button 1" color="buttonColorRed" />
        <CommonButton buttonName="butkjfksdjaofjsal" color="buttonColorRed" />
        <CommonButton buttonName={test} color="buttonColorRed" />
        <MuiButton buttonName="MUI button" variant="contained" />
      </Link>
    </div>
  );
};

export default Home;
