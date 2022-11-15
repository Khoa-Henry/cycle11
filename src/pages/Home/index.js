import { Link } from "react-router-dom";
import CommonButton from "../../components/CommonButton/index.js";

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <Link to="aboutyou">
        <CommonButton />
      </Link>
    </div>
  );
};

export default Home;
