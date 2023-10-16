import { Avatar, Divider, Image } from "antd";
import { VideoCameraOutlined, ClockCircleOutlined } from "@ant-design/icons";



function getRndInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const MeetingDetails = () => {

    const profilepic ="profilepics/"+getRndInteger(1,12)+".jpg";


    return (
        <>
            <div className="flex md:flex-wrap">
                <div>
                    <Avatar size={64} src={profilepic}>                     
                    </Avatar>
                </div>
                <div>
                    <div className="flex-col items-center ml-4">
                        <h2 className="mb-0  text-xl ">
                            Meeting With Customer
                        </h2>
                        <div className="flex items-center mt-4">
                            <div className="flex items-center">
                                <VideoCameraOutlined className="mr-2 text-zinc-400 text-sm" />
                                <p className="mb-0 text-zinc-400">Google Meet</p>
                                <ClockCircleOutlined className="mr-2 ml-7 text-zinc-300 text-sm" />
                                <p className="mb-0 text-zinc-400">12 pm</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Divider />
        </>
    )

}

export default MeetingDetails;