import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 md:w-[50%] w-[90%] bg-[#dde2e4] text-primary md:rounded-2xl rounded-xl p-4 md:px-6 md:py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src="/logo-black.png" width={40} height={100} alt="theo logo" />
          <div className="md:flex hidden flex-col">
            <p className="font-medium text-xl leading-none">THEO</p>
            <p className="font-normal text-sm leading-none">WEB DEVELOPER</p>
          </div>
        </div>
        <div className="md:flex hidden gap-6 text-xl font-medium">
          <Link href="#">+Project</Link>
          <Link href="#">+Gallery</Link>
          <Link href="#">+Video</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
