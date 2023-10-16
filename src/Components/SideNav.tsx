import {  
    SettingOutlined,
    HomeOutlined,
    BarChartOutlined,
    CompassOutlined,
    ShoppingOutlined,
    MessageOutlined,
    QuestionCircleOutlined,
    FolderOutlined
    
  } from "@ant-design/icons";
  import type { MenuProps } from "antd";
  import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
  // import { purple } from '@ant-design/colors';
  
  type MenuItem = Required<MenuProps>["items"][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem;
  }
  
  const items: MenuProps['items'] = [
    getItem("Home", "1", <HomeOutlined />  ),
    getItem("Analytic", "2", <BarChartOutlined />),
    getItem("Explore", "3", <CompassOutlined />),
    getItem("Shop", "4", <ShoppingOutlined />),
    getItem("Inbox", "5", <MessageOutlined />),
    { type: "divider" },
    getItem(
      "Tools",
      "grp",
      null,
      [
        getItem("Setting", "6", <SettingOutlined />),
        getItem("Help", "7", <QuestionCircleOutlined />)
      ],
      "group"
    ),
    { type: "divider" },
    getItem(
      "Projects",
      "grp",
      null,
      [
        getItem("Amazon", "8", <FolderOutlined />),
        getItem("Invinity HQ", "9", <FolderOutlined />)
      ],
      "group"
    )
  ];
  
  const SideNav: React.FC = (props:any) => {
  
    return (
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ backgroundColor: "white" }}
      >


      <Menu onClick={props.fn} className=""
      items={items}
    />
</Sider>
    
   
    );
  };
  
  export default SideNav;
  
  