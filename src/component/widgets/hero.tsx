import wrapper from "@/component/shared/wrapper"
import Wrapper from "@/component/shared/wrapper"
import HeroPoster from "@/assets/image/hero-poster.png"
import Image from "next/image"
// component
import Button from "@/component/shared/button"
const hero = () => {
  return (
    
  <section >
  <Wrapper>
<div className="flex flex-col md:flex-row items-center ">
<div className="flex-1 ">
  {/*left side*/}
  <h4 className="text-[#00616C] font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
  <h1 className="text-5xl font-semibold leading-normal text-gray-900 sm:text-6xl">Certified Web 3.0 and Metaverse Developer</h1>
  <p className="mt-6 text-xl text-slate-700">
    A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
  </p>
  
  <p className="mt-6 text-xl text-slate-700 ">
    Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
  </p>

<div className="mt-6"> 
<Button text={"Learn More"}/>
</div>




</div>


{/*Right side*/}
<div>
  <Image src={HeroPoster} alt="Hero poster" />
</div>

</div>
  </Wrapper>   


  </section>
    
  )
}

export default hero