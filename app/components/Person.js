const Person = ({date, name, inTime, outTime}) => {
    return (
        <>
            <div className="text-[#010057] border-t-2 border-[#010057] w-full flex items-center py-4 h-12">
                <div className="pl-4 w-36 mr-4"><p>{date}</p></div>
                <div className="pl-4 w-80 mr-4"><p>{name}</p></div>
                <div className="pl-4 w-36 mr-4"><p>{inTime}</p></div>
                <div className="pl-4 w-48"><p>{outTime}</p></div>
            </div>
        </>
    )
}

export default Person