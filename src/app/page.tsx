import Image from 'next/image'
import nclogo from '/src/app/images/nationchatlogo.png'
import Nav from '../app/navigation'

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
      <Nav />
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
      {/* Icon Block */}
      <a
        className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
        href="#"
      >
        <div className="flex justify-center items-center size-12 bg-red-600 rounded-xl">
          <svg
            className="shrink-0 size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width={10} height={14} x={3} y={8} rx={2} />
            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
            <path d="M8 18h.01" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
          Friendly chat
          </h3>
          <p className="mt-1 text-gray-600">
          When connecting to NationCHAT you will encounter friendly users that likes to chat & have fun!
          </p>
          <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Learn more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
        href="#"
      >
        <div className="flex justify-center items-center size-12 bg-red-600 rounded-xl">
          <svg
            className="shrink-0 size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx={17} cy={17} r={3} />
            <circle cx={7} cy={7} r={3} />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
          IPv4 & IPv6 Servers
          </h3>
          <p className="mt-1 text-gray-600">
          We provide for our visitors both IPv4 & IPv6 servers. Check the Servers list.
          </p>
          <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Learn more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
        href="#"
      >
        <div className="flex justify-center items-center size-12 bg-red-600 rounded-xl">
          <svg
            className="shrink-0 size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
          Applications
          </h3>
          <p className="mt-1 text-gray-600">
          If you want to be part of the NationCHAT IRC Network team, apply using the application form.
          </p>
          <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Learn more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
        href="#"
      >
        <div className="flex justify-center items-center size-12 bg-red-600 rounded-xl">
          <svg
            className="shrink-0 size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
            WebChat
          </h3>
          <p className="mt-1 text-gray-600">
          You can directly connect to our network servers & start chatting, by using our Webchat.
          </p>
          <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Learn more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </a>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Icon Blocks */}

    </>
  )
}
