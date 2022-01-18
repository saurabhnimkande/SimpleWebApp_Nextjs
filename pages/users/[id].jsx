import { withRouter } from "next/router";
import { Navbar } from "../navbar";

const UserID = (props) => {
  console.log(props.data.data);
  return (
    <div>
      <Navbar></Navbar>
      <h1>Single Profile</h1>
      <img src={props.data.data.avatar}></img>
      <h3>
        Name : {props.data.data.first_name} {props.data.data.last_name}
      </h3>
      <h3>Email: {props.data.data.email}</h3>
    </div>
  );
};

export const getStaticProps = async (props) => {
  const res = await fetch(`https://reqres.in/api/users/${props.params.id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://reqres.in/api/users/`);
  const data = await res.json();
  const paths = data.data.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default withRouter(UserID);
