import { Avatar, Button, Card, Col, Row,  Dropdown, Space,  message } from "antd";
import Analytic from "./Analytic";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import RevenueTable from "./RevenueTable";
import {
    BellOutlined,
    AntDesignOutlined,
    ArrowRightOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";

import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
    {
        label: "August",
        key: "1",
    },
    {
        label: "September",
        key: "2",
    },
    {
        label: "October",
        key: "3",
    },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("This functionality coming soon");
    console.log("click", e);
};

const menuProps = {
    items,
    onClick: handleMenuClick,
};


const RevenueOverview = () => {

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        message.info("Click on left button.");
        console.log("click left button", e);
    };

    return (
        <>
            <div className="mt-4
            ">
                <Card className="w-full mt-15" style={{ backgroundColor: '#6E62E5' }} >

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}>
                            <div ><div className="flex  justify-between items-center md:flex-wrap">
                                <div>
                                    <Avatar size={64} src="gifs/revenue.gif" />
                                </div>          <div>
                                    <div className="flex-col items-center ml-4">
                                        <p className="mb-0 text-zinc-300 text-sm">
                                            Monthly Revenue
                                        </p>
                                        <div className="flex  items-center mt-4">
                                            <h3 className="mb-0 text-white text-xl font-bold">$3.500</h3>


                                            <div className="w-12 h-7 rounded-lg bg-white flex items-center justify-center ml-4">
                                                <p className="text-violet-500 text-md font-bold">+2.4%</p>
                                            </div>

                                        </div>


                                        <div className="flex items-center" style={{ marginTop: '6%' }}>
                                            <p className="mb-0 text-zinc-300 text-sm">
                                                Previous month
                                            </p>
                                            <div className="">
                                                <h3 className="text-white font-bold ">$1.7k</h3>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div></div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div ><div className="flex  justify-between items-center md:flex-wrap">
                                <div>
                                    <Avatar size={64} src="gifs/sales.gif" />
                                </div>          <div>
                                    <div className="flex-col items-center ml-4">
                                        <p className="mb-0 text-zinc-300 text-sm">
                                            Monthly Sales
                                        </p>
                                        <div className="flex  items-center mt-4">
                                            <h3 className="mb-0 text-white text-xl font-bold">$6.750</h3>


                                            <div className="w-12 h-7 rounded-lg bg-white flex items-center justify-center ml-4">
                                                <p className="text-violet-500 text-md font-bold">+1.4%</p>
                                            </div>

                                        </div>


                                        <div className="flex items-center" style={{ marginTop: '6%' }}>
                                            <p className="mb-0 text-zinc-300 text-sm">
                                                Previous month
                                            </p>
                                            <div className="">
                                                <h3 className="text-white font-bold ">$3.1k</h3>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div></div>
                        </Col>
                        <Col className="gutter-row" span={8}  style={{paddingRight: '0px !important'}}>
                            <div ><div className="flex  justify-between items-center md:flex-wrap">
                                <div>
                                    <Avatar size={64} src="gifs/profit.gif" />
                                </div>          <div>
                                    <div className="flex-col items-center ml-4">
                                        <p className="mb-0 text-zinc-300 text-sm">
                                            Total Profit
                                        </p>
                                        <div className="flex  items-center mt-4">
                                            <h3 className="mb-0 text-white text-xl font-bold">$10.999</h3>


                                            <div className="w-12 h-7 rounded-lg bg-white flex items-center justify-center ml-4">
                                                <p className="text-violet-500 text-md font-bold">+4.3%</p>
                                            </div>

                                        </div>


                                        <div className="flex items-center" style={{ marginTop: '6%' }}>
                                            <p className="mb-0 text-zinc-300 text-sm">
                                                Previous month
                                            </p>
                                            <div className="">
                                                <h3 className="text-white font-bold ">$8.9k</h3>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div></div>
                        </Col>
                    </Row>

                </Card>
                <Card className="w-full mt-5">
                    <div className="flex justify-between items-center md:flex-wrap">
                        <div>
                            <div>
                                <h3 className="font-bold text-xl">Total Sales & Cost</h3>
                                <p className="mb-0 text-zinc-400 text-sm">
                                    Last 60 days
                                </p>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <h2 className="font-bold text-4xl" style={{ color: '#6E62E5' }}>$956.82k</h2>
                                <div className="w-12 h-7 rounded-lg bg-green-300 flex items-center justify-center ml-4">
                                    <p className="text-green-800 text-md font-bold">+5.4%</p>
                                </div>

                            </div>
                            <div className="mt-2">
                                <p className="mb-0 text-zinc-400 text-sm">
                                    <span className="text-green-300 mr-2">+8.20k</span>vs prev.60 days                     </p>
                            </div>
                        </div>

                        <div>
                            <Analytic />
                        </div>
                    </div>

                </Card>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-3xl">Transaction History</h1>
                        <div>
                            <Dropdown menu={menuProps}>
                                <Button className="flex items-center">
                                    <CalendarOutlined />
                                    <Space className="font-bold ml-2">
                                        Month
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>

                    </div>

                   <RevenueTable />
                </div>



            </div>


        </>
    )



}

export default RevenueOverview;