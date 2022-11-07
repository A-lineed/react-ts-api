import { useParams, useHistory } from "react-router-dom";
import gitApi from "../api/github";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";

const Perfil = () => {

  const history = useHistory()
  const {user} = useParams<{user: string}>()



  gitApi.getUser(user)
      .then(response => console.log(response))
      .catch(error => {
        console.log(error)
      history.push('/')
      });

  return (
    <Layout>
      <Table />
    </Layout>
  );
};

export default Perfil;
