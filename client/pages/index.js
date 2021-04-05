// import axios from "axios";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.info(currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  const { data } = await buildClient({ req }).get("/api/users/currentuser");
  return data;
};

export default LandingPage;
