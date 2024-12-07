import Link from "next/link"
import Person from "../components/Person"

const Users = props => {
    let userCount = 9
    let businessName = 'Business Name'.toUpperCase()

    let people = [
        {name: 'Ben Spencer', date: '12-07-2024', inTime: '07:40', outTime: '17:14', attendance: ''},
        {name: 'Jammie Jonas', date: '12-07-2024', inTime: '07:43', outTime: '17:00', attendance: ''},
        {name: 'Radika Singh', date: '12-07-2024', inTime: '08:00', outTime: '17:02', attendance: ''},
        {name: 'Incon Sistent', date: '12-07-2024', inTime: '', outTime: '', attendance: ''},
        {name: 'Wonda Prime', date: '12-07-2024', inTime: '07:59', outTime: '17:00', attendance: ''}
    ]

    return (
        <>
            <main className="h-5/6 flex items-center justify-center">
                <div className="size-4/5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-[#010057]">DAYLOG SYSTEMS</h1>
                        <Link href='/profile' className="hover:scale-110 duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-xl font-bold my-4 text-[#d51a18] ">Users List for {businessName}</h2>
                        <h2><span className="text-[#d51a18]">{userCount}</span> users</h2>
                    </div>
                    <div className="bg-[#010057] flex p-4">
                        <div className="text-white font-bold text-xl mr-4 w-36"><h2>Date</h2></div>
                        <div className="text-white font-bold text-xl mr-4 w-80">Name</div>
                        <div className="text-white font-bold text-xl mr-4 w-36">Sign in time</div>
                        <div className="text-white font-bold text-xl mr-4 w-38">Sign out time</div>
                        <div className="text-white font-bold text-xl mr-4 w-48">Attendance</div>
                    </div>
                    <div className="w-full h-4/6 flex flex-col overflow-auto">
                        {people.map(p => <Person
                            key={p.name.split(' ')[0]}
                            name={p.name} 
                            date={p.date} 
                            inTime={p.inTime} 
                            outTime={p.outTime} 
                            attendance={p.inTime && p.outTime ? 'Present' :
                                <span className="text-[#d51a18]">Absent</span> 
                            } 
                        />)}
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