import Image from 'next/image'
import nclogo from '/src/app/images/nationchatlogo.png'

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          {/* Logo */}
          <div className="flex justify-center">
          <Image src={nclogo} width={500} height={500} alt="NationCHAT IRC Network" />
          </div>
          {/* End Logo */}
        </div>
      </div>
      {/* End Header */}
    </>
  )
}
