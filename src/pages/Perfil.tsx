import { useParams, useHistory } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";

const Perfil = () => {

  const history = useHistory()
  const {user} = useParams<{user: string}>()



  if(user !== 'aline') {
    history.push('/')
  }

  return (
    <Layout>
      <Table />
    </Layout>
  );
};

export default Perfil;
