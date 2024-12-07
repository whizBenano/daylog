const About = () => (
    <>
        <main className="h-4/5 py-5 flex items-center justify-center">
            <div className="size-4/5 flex flex-col items-start justify-between">
                <h1 className="text-3xl font-bold text-[#010057]">ABOUT DAYLOG SYSTEMS</h1>
                <div className="h-full flex flex-col justify-between">
                    <p className="text-justify l text-xl leading-9">
                        Daylog systems is an automated attendance marking system that uses a biometric fingerprint scanner and system time to take the attendance
                        of its users. It is highly customizable to suit all organizations' needs both large and small, it works by fetching user data (precisely
                        names and fingerprint data) from the organization's main database into its own database. It exposes a fingerprint scanner at the entrance
                        of the organization (or anywhere deemed fit by the organization's management) for the users to interface with and a dashboard for the 
                        admin to interface with. <br/> <br/> When users of this system arrive at the office, they place their registered finger on the scanner,
                        if that is the first time of interfacing with the scanner for the day, the system takes it as the sign-in time and waits for a second
                        scan which is expected to be the sign-out time. At the end of each scan, the system just displays a success message and the attendance
                        is taken.
                        If a user's sign-in and sign-out time are provided, at the end of the day, the user is marked "present" 
                        otherwise, "absent" hence the name, Daylog. <br/> <br/> The admin from their dashboard can monitor their users' punctuality and 
                        avalability and can save the attendance logs on a daily weekly or monthly basis into their system's local storage in csv or xls formats
                        and can also print them if desired. <br/> <br/>
                    </p>
                    <p className="font-bold text-2xl">Login to get started.</p>
                </div>
            </div>

        </main>
    </>
)

export default About