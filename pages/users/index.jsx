import { withRouter } from "next/router";
import { Navbar } from "../navbar";

const Users = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Users List</h1>
      {props.data.data.map((e) => (
        <div key={e.id} onClick={() => props.router.push(`/users/${e.id}`)}>
          <>
            <img src={e.avatar} alt="avatar"></img>
            <h4>Email : {e.email}</h4>
          </>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const posts = await res.json();
  return {
    props: {
      data: posts,
    },
  };
};

export default withRouter(Users);
