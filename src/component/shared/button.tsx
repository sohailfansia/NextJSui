import { FC } from "react"
const button: FC<{text:string}> = (props) => {
    const{text}=props

  return (
    <button 
    className="bg-[#00616C] text-white px-8 py-4 rounded-full hover:shadow-lg text-xl font-medium 
       hover:scale-105 duration-300
    ">{text}</button>
  )
}

export default button