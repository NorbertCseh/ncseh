
type ExperienceProps = {
    date: string,
    companyAndRole: string,
    tasks: string[]
}

const Experience = ({ date, companyAndRole, tasks }: ExperienceProps) => {
    return (
        <div className='flex pt-4'>
            <div className='pl-3 pt-6'>{date}</div>
            <div className=''>
                <div className='pl-3 pt-2 text-xl'>{companyAndRole}</div>
                <div className='pl-3 pt-2'>
                    <ul className='list-disc text-l pl-6'>
                        {tasks.map((element, index) => {
                            return (<li key={index}>{element}</li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;