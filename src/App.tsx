import backgroundImage from "/src/assets/bg-image.webp"
import {Eye, EyeOff} from "lucide-react";
import * as React from "react";
import {useState} from "react";

const App = () => {
    function formHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    const toggleConfirmPassword=()=>{
        setShowConfirmPassword(!showConfirmPassword)
    }
    return (
        // container
        <div className={"w-screen h-screen flex bg-[#605A71] text-white"}>
            {/*form*/}
            <form className={"w-full h-full bg-[#2C2638]"} onSubmit={formHandler}>
            {/*    left section image*/}
            <div className={"left-section w-1/2 hidden "}>
                <img className={"bg-cover object-center w-"} src={backgroundImage} alt=""/>
            </div>
            {/*    right section from input fields*/}
            <div className={"right-section w-full h-full "}>
            {/*    Heading and paragraph*/}
                <h1 className={"text-center font-medium text-3xl py-4 uppercase"} >Create an account</h1>
                <div className={"flex gap-1  text-sm justify-center"}>
                <p className={"text-[#7F7B89]"}>Already have an Account?</p>
                <a href={"/"} className={"text-purple-300 font-medium"}>Log in</a>
                </div>
                {/*first and last name*/}
                <div className={"flex gap-4 mt-4 mb-4 mx-auto w-11/12"}>
                    <input name={"FirstName"} type={"text"} placeholder={"First Name "} className={"border-none bg-[#3C364C] w-1/2 p-2 rounded-md text-sm placeholder:text-[#7F7B89]"}/>
                    <input name={"LastName"} type={"text"} placeholder={"Last Name "} className={"border-none bg-[#3C364C] w-1/2 p-2 rounded-md text-sm placeholder:text-[#7F7B89]"}/>
                </div>
                {/*Age and gender*/}
                <div className={"flex gap-4 mb-4 mx-auto w-11/12"}>
                {/*    Age*/}
                <input name={"age"} type={"number"} placeholder={"Enter your age"} className={"border-none bg-[#3C364C] w-1/2 p-2 rounded-md text-sm placeholder:text-[#7F7B89]"}/>
                    {/*Gender*/}
                    <select   onChange={(e) => {
                    e.target.classList.toggle("text-[#7F7B89]", e.target.value === "");
                    e.target.classList.toggle("text-white", e.target.value !== "");
                }} defaultValue={""} className={"border-none bg-[#3C364C] w-1/2 p-2 rounded-md text-sm text-[#7F7B89]"}>
                    <option value="" disabled={true} className="text-[#7F7B89]">
                        Gender
                    </option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                </select>
            </div>
                {/*Email*/}
                <input type={"Email"} name={"Email"} autoComplete={"Email"} placeholder={"Email"} className={"border-none block mb-4 bg-[#3C364C] w-11/12  p-2 mx-auto rounded-md text-sm placeholder:text-[#7F7B89]"}/>
                {/*Password*/}
                <div className={"border-none block relative mb-3 bg-[#3C364C] mx-auto w-11/12  rounded-md text-sm"}>
                <input  type={showPassword ? "text" : "password"} name={"Password"} placeholder={"Password"} className={"border-none block mb-4 p-2 bg-[#3C364C] w-full  mx-auto rounded-md text-sm placeholder:text-[#7F7B89]"}/>
                    {showPassword ?
                    <EyeOff onClick={togglePassword} className={"absolute right-2 top-2 text-[#7F7B89] hover:text-white z-3 cursor-pointer"} />
                        :
                    <Eye onClick={togglePassword} className={"absolute right-2 top-2 text-[#7F7B89] hover:text-white z-3 cursor-pointer"} />
                    }
                </div>
                {/*Confirm Password*/}
                <div className={"border-none block relative mb-3 bg-[#3C364C] mx-auto w-11/12  rounded-md text-sm"}>
                    <input  type={showConfirmPassword ? "text" : "password"} name={"ConfirmPassword"} placeholder={"Confirm your Password"} className={"border-none block mb-3 p-2 bg-[#3C364C] w-full  mx-auto rounded-md text-sm placeholder:text-[#7F7B89]"}/>

                    {showConfirmPassword ?
                        <EyeOff onClick={toggleConfirmPassword} className={"absolute right-2 top-2 text-[#7F7B89] hover:text-white z-3 cursor-pointer "} /> :
                    <Eye onClick={toggleConfirmPassword} className={"absolute right-2 top-2 text-[#7F7B89] hover:text-white z-3 cursor-pointer"} />
                    }
                </div>
                {/*term and condition*/}
                <div className={"w-11/12 mx-auto"}>
                    <input type={"checkbox"}  id={"terms"} className={"mr-2 accent-purple-500 "} />
                    <label className={"text-sm text-[#7F7B89]"}>I agree to the <span className={" underline cursor-pointer text-purple-300 font-medium"}> terms & conditions</span></label>
                </div>
            {/*    or register with Line*/}
            <button className={"w-11/12 mx-auto py-2 bg-[#6D54B3] hover:bg-[#3c1f91] cursor-pointer rounded-md text-sm font-medium block mt-6"}>Create Account</button>
                <div className="flex items-center w-11/12 mx-auto justify-center text-[#7F7B89] text-sm my-6">
                    <div className="flex-grow border-t border-[#7F7B89]"></div>
                    <span className="mx-3">or register with</span>
                    <div className="flex-grow border-t border-[#7F7B89]"></div>
                </div>
                {/*//google and facebook button*/}
                <div className={"flex gap-4 w-11/12 mx-auto"}>
                    {/*google button*/}
                    <button className={"w-1/2 py-1 bg-[#3C364C] cursor-pointer rounded-md text-sm font-medium flex justify-center items-center"}>
                        <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>

                </button>
                    {/*facebook button*/}
                    <button className={"w-1/2 py-1 bg-[#3C364C] rounded-md text-sm font-medium cursor-pointer flex justify-center items-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        </svg>
                    </button>
                </div>


            </div>
            </form>
        </div>
    )
}
export default App
