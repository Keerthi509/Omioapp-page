import React from 'react'
import { Avatar, Button, Table, Dropdown, Space, MenuProps, message, Row, Col, Tag, Divider } from "antd";
import {
    BellOutlined,
    AntDesignOutlined,
    ArrowRightOutlined,
    SettingOutlined
} from "@ant-design/icons";
import { DownOutlined, CalendarOutlined, UserOutlined, CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { transcations } from '../MockData/transcations';

const items: MenuProps["items"] = [
    {
        label: "yet to Implement",
        key: "1",
    },
    {
        label: "yet to Implemen",
        key: "2",
    },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
};

const menuProps = {
    items,
    onClick: handleMenuClick,
};


const getProfilePic = (id: number) => {
    return "profilepics/" + id + ".jpg";
}


const RevenueTable = () => {
    return (


        <div className='mt-4'>
            <div className='flex items-center mt-4'>
                <div >
                    <Dropdown menu={menuProps} className="ml-4">
                        <Button className="flex items-center">
                            <Space className="font-bold ml-2">
                                Recepient
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown menu={menuProps} className="ml-4">
                        <Button className="flex items-center">
                            <Space className="font-bold ml-2">
                                Amount
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown menu={menuProps} className="ml-4">
                        <Button className="flex items-center">
                            <Space className="font-bold ml-2">
                                Status
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </div>
            <div className='mt-7'>

                <Row className='py-5' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={2}>

                    </Col>
                    <Col className="gutter-row" span={5}>
                        <p className='text-zinc-400'>Customer</p>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <p className='text-zinc-400'>Status</p>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <p className='text-zinc-400'>Date</p>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <p className='text-zinc-400'>Invoice</p>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <p className='text-zinc-400'>People</p>
                    </Col>
                </Row>

                {transcations.map(e => {
                    return (<Row className='justify-center'>
                        <Col className="gutter-row" span={2}>
                        <Avatar size={44} src={getProfilePic(e.id)} />
                    </Col>
                        <Col className="gutter-row" span={5}>
                            <h2 className=" font-bold text-xl">{e.first_name} {e.last_name}</h2>
                            <p className="mb-0 text-zinc-400 text-sm">
                                {e.email}
                            </p>
                        </Col>
                        <Col className="gutter-row" span={5}>
                            {e.status ? <Tag icon={<CheckCircleOutlined />} color="success">Success</Tag> : <Tag icon={<SyncOutlined />} color="warning">Pending</Tag>}

                        </Col>
                        <Col className="gutter-row" span={3}>
                            <p className='font-bold'>{e.date}</p>

                        </Col>
                        <Col className="gutter-row" span={5}>
                            <p className='font-bold'>{e.invoice}</p>

                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Avatar.Group className="ml-4">
                                <Avatar style={{ backgroundColor: '#f56a00' }}>S</Avatar>
                                <Avatar style={{ backgroundColor: '#6E62E5' }}>K</Avatar>
                                <Avatar className=" bg-green-300" icon={<UserOutlined />} />
                            </Avatar.Group>
                        </Col>

                        <Divider />


                    </Row>)
                })}
            </div>

        </div>

    )
}

export default RevenueTable