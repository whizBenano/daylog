import Link from "next/link"
import './signup.css'

const SignUp = () => {
    return (
        <>
            <main className="h-4/5 py-5 flex items-center justify-center">
                <div className="size-4/5 items-start">
                    <h1 className="text-3xl font-bold text-[#010057]">DAYLOG SYSTEMS</h1>
                    <h2 className="text-[#d51a18] text-xl font-bold my-4">Registration</h2>
                    <form>
                        <div className="w-full h-5/6 flex flex-row">
                            <div className="h-full pr-12 w-1/2">
                                <div className="relative mt-8 w-full box">
                                    <input type="text" required/>
                                    <label>Full Name</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="text" required/>
                                    <label>Phone number</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="email" required/>
                                    <label>Email</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="text" required/>
                                    <label>Organization/Business name</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="text" required/>
                                    <label>Organization/Business type</label>
                                </div>
                            </div>

                            <div className="pl-12 h-full w-1/2">
                                <div className="relative mt-8 w-full box">
                                    <input type="text" required/>
                                    <label>Username</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="password" required/>
                                    <label>Password</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="password" required/>
                                    <label>Confirm password</label>
                                </div>
                                <div className="relative mt-8 w-full box">
                                    <input type="file" className="some" />
                                </div>
                                <div className="relative mt-8 w-full box">
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Submit" 
                        className="bg-[#010057] text-white font-bold mt-4 duration-500 rounded-sm hover:scale-110 cursor-pointer float-right p-4" />
                    </form>
                </div>

            </main>
        </>
    )
}

export default SignUp