import Wrapper from "@/component/shared/wrapper"
import Button from "@/component/shared/button"
import QuaterBox from "@/component/shared/Quaterbox"
const CoreTracks = () => {
const header=`Core Courses\n(Common in All Specializations)`
const CoreTracksData = [
{
  header:"Quarter I",
  descrption:"CS-101: Object-Oriented Programming using TypeScript",
  number:"1"
}
,
{
  header:"Quarter II",
  descrption:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  number:"2"
}
,
{
  header:"Quarter III",
  descrption:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
  number:"3"
}
  ]
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
      {/* Content */}

      <div className="max-w-screen-sm">
        <h4 className=" text-primary font-semibold text-lg mt-4">Program of Studies</h4>
        <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
        <p className="mt-6 text-xl text-slate-700">Every participant of the program will start by completing the following three core courses.</p>

      <div className="mt-5">
        <Button text="Enroll Now" />
      </div>
      </div>

{/* ------------------------------------------------------------------------- */}
  {/* Boxes */}
<div className="my-20 flex flex-col gap-x-8 mx-auto md:flex-row gap-y-6 space-x-8">  
      {CoreTracksData.map((item, i) => (       
//  <div className="border rounded-md flex flex-col  w-4/12 relative px-8 py-16 flex-1 justify-center">
//        <h4 className="font-bold text-lg ">{item.header}</h4>
//        <p  className="mt-2 text-slate-600 z-10">{item.descrption}</p>
//        <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">{1+i}</div>
// </div>

<QuaterBox
key={item.number}
 headre={item.header}
 descrption={item.descrption}
 number={i + 1}
 

 />
))}
</div>
      </Wrapper>
    </section>
  )
}

export default CoreTracks