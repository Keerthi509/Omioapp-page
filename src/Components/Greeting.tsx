import { Avatar } from "antd"

const Greeting = () => {

    return(
      <div className="flex items-center">
                    <Avatar size={64} src="profilepics/keerthi.jpeg" />
                    <div className="flex-col ml-4">
                        <h2 className=" font-bold text-xl">Good Evening Team!</h2>
                        <p className="mb-0 text-zinc-400 text-sm">
                            Have an in-depth look at all the metrics within your dashboard.
                        </p>
                    </div>
                </div>  
             
    );

}

 export default Greeting;