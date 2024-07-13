import Link from "next/link"

const Profile = () => {
    let businessName = 'Business Name'.toUpperCase()
    let ownerName = 'Benjamin Michaels'.toUpperCase()
    let userCount = 9
    return (
        <>
            <main className="h-5/6 flex items-center justify-center">
                <div className="size-4/5 flex">
                    <div className="w-3/5 h-full">
                        <h1 className="text-3xl font-bold text-[#010057]">DAYLOG SYSTEMS</h1>
                        <h2 className="text-xl font-bold my-4 text-[#d51a18] ">Dashboard</h2>
                        <h1 className="text-7xl mt-36 mb-12">{businessName}</h1>
                        <Link href="/users" className="bg-[#ccc] flex flex-col items-center justify-center w-60 p-4 rounded-lg ">
                            <h2 className="text-4xl">Users</h2>
                            <h1 className="text-[#d51a18] font-bold text-6xl">{userCount}</h1>
                        </Link>
                    </div>
                    <div className="w-2/5 h-full bg-[#ccc] py-8 flex flex-col items-center justify-between">
                        <div className="bg-[#010057] size-60 rounded-full"></div>
                        <h1 className="text-4xl">{ownerName}</h1>
                        <div className="w-full h-1/3 flex flex-col items-end justify-end">
                            <Link href="" className="text-[#d51a18] hover:underline font-bold text-xl">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile