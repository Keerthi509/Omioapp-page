import { Layout } from "antd";
import MainContent from "./MainContent";
import SideNav from "./SideNav";


const HomePage = () =>{

return(
    <>
    <Layout>
        <SideNav/>
        <MainContent />
      </Layout>
      </>
)

}

export default HomePage;