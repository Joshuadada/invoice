import { useContext } from 'react'
import Logo from '../assets/logo.svg'
import { SidebarContext } from '../pages/dashboard/Dashboard'
import { NavLink } from 'react-router-dom'

type Properties = {
    className?: string,
    navItems: Array<{
        id: number,
        imgSrc: string,
        navText: string,
        navUrl: string,
    }>,
    active: boolean
}

const Sidebar = ({ className, navItems, active }: Properties) => {
    const { handleSidebarState } = useContext(SidebarContext);

    return (
        <>
            {/* Large screen */}
            <div className={'bg-white h-full px-2 md:px-4 2xl:px-6 py-4 sm:py-6 md:py-8 2xl:py-10 hidden lg:block ' + className}>
                <img src={Logo} alt="logo" />

                <ul className="flex flex-col mt-6 md:mt-8 2xl:mt-10">
                    {navItems.map((navItem) => (
                        <NavLink
                            to={navItem.navUrl}
                            key={navItem.id}
                            className={({ isActive, isPending }) => `px-1.5 py-1 md:px-2 2xl:px-4 md:py-2.5 2xl:py-3.5 flex items-center gap-2 cursor-pointer text-xs md:text-sm text-[#697598] hover:text-[#4F4F4F] border-4 md:border-8 border-white hover:border-[#F5F6FA] rounded-[2rem] ${isActive ? "!text-[#4F4F4F] !border-[#F5F6FA]" : ""} ${isPending ? "" : ""}`}
                        >
                            <span>
                                <img src={navItem.imgSrc} alt={navItem.navText} />
                            </span>
                            <span>{navItem.navText}</span>
                        </NavLink>
                    ))}
                </ul>
            </div>

            {/* Small screen */}
            <div className={`bg-white h-full shadow-md px-2 md:px-4 2xl:px-6 py-4 sm:py-6 md:py-8 2xl:py-10 transition-all absolute top-0 left-0 z-50 block lg:hidden ${className} ${active ? 'ml-0' : '-ml-72'}`}>
                <div className='flex justify-end'>
                    <svg className="w-5 h-5 text-gray-800 cursor-pointer" onClick={() => handleSidebarState && handleSidebarState(false)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                </div>
                <img src={Logo} alt="logo" />

                <ul className="flex flex-col mt-6 md:mt-8 2xl:mt-10">
                    {navItems.map((navItem) => (
                        <NavLink
                            to={navItem.navUrl}
                            key={navItem.id}
                            className={({ isActive, isPending }) => `px-1.5 py-1 md:px-2 2xl:px-4 md:py-2.5 2xl:py-3.5 flex items-center gap-2 cursor-pointer text-xs md:text-sm text-[#697598] hover:text-[#4F4F4F] border-4 md:border-8 border-white hover:border-[#F5F6FA] rounded-[2rem] ${isActive ? "!text-[#4F4F4F] !border-[#F5F6FA]" : ""} ${isPending ? "" : ""}`}
                        >
                            <span>
                                <img src={navItem.imgSrc} alt={navItem.navText} />
                            </span>
                            <span>{navItem.navText}</span>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar