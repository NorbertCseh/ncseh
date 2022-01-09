
type ExperienceProps = {
    date: string,
    companyAndRole: string,
    tasks: string[]
}

const Experience = ({ date, companyAndRole, tasks }: ExperienceProps) => {
    return (
        <div className='flex m-auto my-5'>
            <div className='w-1/2 mt-6 mr-6 text-right'>{date}</div>
            <div className='w-1/2'>
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