import Link from "next/link"
import './login.css'

const Login = () => (
    <>
        <main className="h-4/5 py-5 flex items-center justify-center">
            <div className="size-4/5 flex items-start justify-between">
                <div className="w-2/3 h-full py-8">
                    <h1 className="text-3xl font-bold text-[#010057]">DAYLOG SYSTEMS</h1>
                    <h2 className="text-[#d51a18] text-xl font-bold my-4">Login</h2>
                    <div className="py-4 w-2/3 h-4/5">
                        <form>
                            <div className="relative mt-8 w-full box">
                                <input type="text" required/>
                                <label>Username</label>
                            </div>
                            <div className="relative mt-8 w-full box">
                                <input type="password" required/>
                                <label>Password</label>
                            </div>
                            <p className="text-[#010057] text-xl mt-4">
                                Forgot password? click <Link href="" className="text-[#d51a18] font-bold hover:underline">here</Link> to reset
                            </p>
                            <input type="submit" value='Login' className="text-white bg-[#010057] mt-8 px-4 py-3 rounded-sm duration-500 hover:scale-110" />
                        </form>
                    </div>

                </div>
                <Link href="/signup" className="text-white bg-[#d51a18] px-4 py-3 rounded-sm duration-500 hover:scale-110">Sign Up</Link>
            </div>
        </main>
    </>
)

export default Login