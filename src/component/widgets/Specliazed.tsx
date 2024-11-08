"use client"
import Wrapper from "@/component/shared/wrapper"
import Quaterbox from "@/component/shared/Quaterbox"
import web3Img from "@/assets/image/metaverse.webp"
import aiweb from "@/assets/image/ai.webp"
import amibient from "@/assets/image/ambient.webp"
import genomics from "@/assets/image/genomics.webp"
import network from "@/assets/image/network.webp"
import Image from "next/image"
import { useState } from "react"
export const programsData=[
  {
slug:"wmd",
header:"Web 3.0 (Blockchain) and Metaverse Specialization",
decription:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
image:web3Img,
quaters:[
   {header:"Quarter IV",
   decription:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
   number:"4"
   },
   {header:"Quarter V",
    decription:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    number:"5"
   },
  ]
},

{
  slug:"ai",
  header:"Ambient Computing and IoT Specialization",
  decription:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
  image:aiweb,
  quaters:[
    {header:"Quarter IV",
    decription:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    number:"4"
    },
    {header:"Quarter V",
      decription:"AC-361: Embedded Programming using C and Rust",
      number:"5"
    },
  ]
},


{
  header:"Genomics and Bioinformatics Specialization",
  decription:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
  image:amibient,
  quaters:[
    {header:"Quarter IV",
    decription:"Bio-351: Python for Biologists",
    number:"4"
    },
    {header:"Quarter V",
      decription:"Bio-361: Bioinformatics with Python",
      number:"5"
    },
  ]
},

{
  header:"Genomics and Bioinformatics Specialization",
  decription:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
  image:genomics,
  quaters:[
    {header:"Quarter IV",
    decription:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    number:"4"
    },
    {header:"Quarter V",
      decription:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
      number:"5"
    },
  ]
},


   {
    header:"Network Programmability and Automation Specialization",
    decription:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image:network,
    quaters:[
      {header:"Quarter IV",
      decription:"NPA-351: CCNA 200-301 Certification",
      number:"4"
      },
      {header:"Quarter V",
        decription:"NPA-361: Network Programmability and Automation",
        number:"5"
      },
    ]
  },
]
const Specliazed = () => {

  const [selectedItem, setselectedItem]=useState("wmd")
  console.log(selectedItem)
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
<div className="px-4 py-6 gap-x-3 space-y-4 items-center basis-4/12 flex-1">
{
  programsData.map((item,i)=>(

    <div key={item.slug} className=" flex gap-x-3 items-center cursor-pointer">
    <div className="flex-shrink-0 h-24 w-36">
         {/* <div className="w-20 h-16 bg-red-500 rounded"></div> */}
         <Image src={item.image} alt={item.header} className="h-24  object-cover rounded-md " />

         </div>
      <div>
         <h4 className="text-primary font-medium">Specialized Track</h4>
         <h3 className="text-xl font-semibold">{item.header}</h3>
        </div>
      </div>  
  ))
}
   
  </div>
</div>
    </Wrapper>
</section>



  )
}

export default Specliazed