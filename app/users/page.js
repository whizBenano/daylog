import Link from "next/link"
import Person from "../components/Person"

const Users = props => {
    let userCount = 9
    let businessName = 'Business Name'.toUpperCase()
    let personInfo = {name: 'Ben Spencer', date: '12-07-2024', timeIn: '07:40', timeOut: '17:14'}
    return (
        <>
            <main className="h-5/6 flex items-center justify-center">
                <div className="size-4/5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-[#010057]">DAYLOG SYSTEMS</h1>
                        <Link href="/profile">&10094;</Link>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-xl font-bold my-4 text-[#d51a18] ">Users List for {businessName}</h2>
                        <h2><span className="text-[#d51a18]">{userCount}</span> users</h2>
                    </div>
                    <div className="bg-[#010057] flex p-4">
                        <div className="text-white font-bold text-xl mr-4 w-36"><h2>Date</h2></div>
                        <div className="text-white font-bold text-xl mr-4 w-80">Name</div>
                        <div className="text-white font-bold text-xl mr-4 w-36">Sign in time</div>
                        <div className="text-white font-bold text-xl mr-4 w-48">Sign out time</div>
                    </div>
                    <div className="w-full h-4/6 flex flex-col overflow-auto">
                        <Person 
                            date={personInfo.date}
                            name={personInfo.name}
                            inTime={personInfo.timeIn}
                            outTime={personInfo.timeOut}
                        />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                    <div className="flex justify-end pt-4">
                        <Link href="" className="text-[#d51a18] hover:underline font-bold text-xl">Edit Users</Link>
                    </div>

                        
                </div>

            </main>
        </>
    )
}

export default Users