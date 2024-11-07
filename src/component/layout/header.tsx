import Link from "next/link"
import Logo from "/public/logo.png"
import Image from "next/image"
import Wrapper from "@/component/shared/wrapper"


const header = () => {
  return (
<Wrapper>
    <header className="flex justify-between  bg-white py-4 sticky top-0">
        {/* Logo */}
       
        <div>
      
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="-mt-[50px]" />
        
        </div>
        {/* Navigation bar */}
        <ul className="flex space-x-8 font-semibold">
        
            <li><Link href={"/"}>Home</Link> </li>
            <li><Link href={"/Courses"}>Courses</Link></li>
        </ul>
    </header>
    </Wrapper>
  )
}

export default header