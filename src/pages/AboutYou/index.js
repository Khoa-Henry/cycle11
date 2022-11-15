import { Link } from "react-router-dom";

const AboutYou = () => {
  return (
    <div>
      <h1>about you page</h1>
      <Link to="/">
        <button>back</button>
      </Link>
      <Link to="place holder for the next page">
        <button>next page</button>
      </Link>
    </div>
  );
};

export default AboutYou;
