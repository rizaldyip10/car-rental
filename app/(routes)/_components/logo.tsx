import Image from "next/image"
import carLogo from "@/public/car-rental-logo.png"

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src={carLogo} alt="logo" height={30} width={50}/>
        <h1>Cars</h1>
    </div>
  )
}

export default Logo