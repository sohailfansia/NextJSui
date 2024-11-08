import { FC } from "react";
interface IProps{
    headre:string;
    descrption:string;
    number:number;
    haveBorder?:boolean
}
const Quaterbox:FC<IProps> = ({headre,descrption,number, haveBorder = true}) => {
  return (
    <div className={`rounded-md flex flex-col  w-4/12 relative px-8 py-16 flex-1 justify-center ${haveBorder && "border"}`}>
    <h4 className="font-bold text-lg ">{headre}</h4>
    <p  className="mt-2 text-slate-600 z-10">{descrption}</p>
    <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10 ">{number}</div>
</div>
  )
}

export default Quaterbox