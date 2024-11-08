import Wrapper from "@/component/shared/wrapper"
import Quaterbox from "../shared/Quaterbox"
const Specliazed = () => {
  return (
<section>
    <Wrapper>
        {/* header */}
        <div>
        <h2 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
        <p className="mt-6 text-xl text-slate-600 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
        </div>
<div className="mt-10 flex gap-x-6 gap-y-8">

        {/* Contant left */}
        <div className="shadow-xl flex-1 basis-8/12 rounded-xl border-slate-200 py-8 px-6">
<h4 className=" text-primary text-lg font-semibold">Specialized Track</h4>
<h3 className="text-2xl font-semibold ">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
<p className="text-lg text-slate-600 mt-2">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
<button className=" text-primary text-xl mt-2 underline flex gap-x-2 items-end ">learn more
<svg  width="10" height="13" viewBox="0 0 24 24" focusable="false" className="mb-1.5 chakra-icon group-hover:translate-x-0.5 duration-300 css-onkibi" aria-hidden="true"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
</button >
<div className="flex gap-4 mt-8">
  <Quaterbox headre="Quarter IV"
  descrption="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

"
  number={4} 

  haveBorder={false}
  />
  <Quaterbox headre="Quarter V"
  descrption="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
  number={5} 
  haveBorder={false}
  />
</div>
</div>
        {/* Contant Right */}
<div className="px-4 py-6 gap-x-3 items-center basis-4/12 bg-slate-100 flex-1">
  <div className=" flex gap-x-3 items-center cursor-pointer">
    <div>
         <div className="w-20 h-16 bg-red-500 rounded"></div>
         </div>
      <div>
         <h4 className="text-primary font-medium">Specialized Track</h4>
         <h3 className="text-xl font-semibold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
        </div>
      </div>

      <div className=" flex gap-x-3 items-center cursor-pointer">
    <div>
         <div className="w-20 h-16 bg-red-500 rounded"></div>
         </div>
      <div>
         <h4 className="text-primary font-medium">Specialized Track</h4>
         <h3 className="text-xl font-semibold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
        </div>
      </div>


      
  </div>
</div>
    </Wrapper>
</section>



  )
}

export default Specliazed