
import {BlinkBlur} from "react-loading-indicators";
const Loader = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#605A71]">
            <BlinkBlur color="#2C2638   " size="large" text="wait karo" textColor="#000000" />
        </div>
    );
};
export default Loader
