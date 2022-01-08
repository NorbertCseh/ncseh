import type { NextPage } from 'next'
import Image from "next/image"
import Experience from "../components/experience"

const CV: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="border-2 col-span-1">
        <div className='text-center p-4'><Image src="/me.jpg" height={300} width={300} alt='CV profile image' className='rounded-full' /></div>
      </div>
      <div className="border-2 col-span-3">
        <div className='text-5xl capitalize text-center pt-4'>Norbert Istvan Cseh</div>
        <div className='pl-2 pt-5 text-3xl'>Experience</div>
        <Experience
          date={"2021.01 - Today"}
          companyAndRole={"LogMeIn - Software delevoper engineer in test"}
          tasks={["Automation tesing with TypeScript and Protactor", "Manual testing", "Test documentation in TestRail"]}
        />
      </div>
    </div>
  )
}

export default CV;