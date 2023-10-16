import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    Space,
    message,
    Divider,
    Layout,
    Input,

} from "antd";
import {
    BellOutlined,
    DownOutlined,
    UserOutlined,
    AntDesignOutlined,
    ArrowRightOutlined,
    SettingOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import MeetingSchedule from "./MeetingSchedule";
import MeetingDetails from "./MeetingDetails";
import RevenueOverview from "./RevenueOverview";
import Greeting from "./Greeting";
import type { ColumnsType } from 'antd/es/table';


const { Search } = Input;
const { Content, Footer } = Layout;

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
};

const items: MenuProps["items"] = [
    {
        label: "My Account",
        key: "1",
        icon: <UserOutlined />,
    },
    {
        label: "Settings",
        key: "2",
        icon: <SettingOutlined />,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

const MainContent = () => {
    return (
        <Layout>
            <Content style={{ margin: '24px 16px 0' }}>

                <div className="flex justify-between items-center md:flex-wrap">
                    <Greeting />

                    <div className="flex items-center">
                        <Search placeholder="input search text" enterButton />
                        <div className="ml-5">
                            <Badge
                                dot
                                size="small"
                                overflowCount={99}
                                className="text-zinc-600"
                            >
                                <BellOutlined
                                    className="text-zinc-600"
                                    style={{ fontSize: "20px" }}
                                />
                            </Badge>
                        </div>
                    </div>

                    <div>
                        <Dropdown menu={menuProps}>
                            <Button className="flex items-center">
                                <Avatar size={24} src="profilepics/keerthi.jpeg" />
                                <Space className="font-bold ml-2">
                                    Keerthi
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                </div>

                <div className="flex justify-between md:flex-wrap">
                    <RevenueOverview />
                    <div className="mt-5">

                        <div>
                            <p className="mb-0 text-violet-500 test-sm">Premium Access</p>

                            <h1 className="text-4xl font-bold text-black">
                                Take Break <br />
                                Your Creative <br />
                                Control
                                <Avatar.Group className="ml-4">
                                    <Avatar style={{ backgroundColor: '#f56a00' }}>S</Avatar>
                                    <Avatar style={{ backgroundColor: '#6E62E5' }}>I</Avatar>
                                    <Avatar style={{ backgroundColor: '#f63500' }}>S</Avatar>
                                    <Avatar style={{ backgroundColor: '#6G22E5' }}>A</Avatar>                                    

                                </Avatar.Group>
                            </h1>

                            <Dropdown menu={menuProps}>
                                <Space className="text-md ml-2 text-zinc-400 mt-4">
                                    The Profesional Platform
                                    <DownOutlined />
                                </Space>
                            </Dropdown>
                            <Button block style={{ color: '#6E62E5' }} className="text-md mt-8">
                                Upgrade Now
                                <ArrowRightOutlined className="ml-4" />
                            </Button>

                            <Divider />
                            <MeetingSchedule />

                            <div>
                                <MeetingDetails />
                                <MeetingDetails />
                                <MeetingDetails />
                            </div>

                        </div>

                    </div>

                </div>



            </Content>

           
        </Layout>
    );
};

export default MainContent;