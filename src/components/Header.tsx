import { useContext } from 'react';
import BellIcon from '../assets/icons/bell-icon.svg'
import DownArr from '../assets/icons/down-arr.svg'
import { SidebarContext } from '../pages/dashboard/Dashboard';

const Header = ({ pageTitle }: { pageTitle: string }) => {

    const { handleSidebarState } = useContext(SidebarContext);

    return (
        <div className="flex items-center justify-between gap-2 py-2 md:py-3 lg:py-[1.1rem] border-b border-[#A1B8FF33] sticky top-0 bg-[#F5F6FA] z-40">
            <div className='flex items-center gap-2 mb-2'>
                <svg className="w-5 h-5 text-gray-800 cursor-pointer lg:hidden" onClick={() => handleSidebarState && handleSidebarState(true)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
                </svg>

                <h3 className="uppercase font-medium text-[#373B47] text-base sm:text-lg md:text-xl lg:text-2xl">{pageTitle}</h3>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                <div className="p-2 md:p-3 lg:p-5 rounded-full bg-white cursor-pointer">
                    <img src={BellIcon} alt="bell-icon" />
                </div>
                <div className="p-1.5 md:p-2 lg:p-3 rounded-[2rem] bg-white cursor-pointer flex items-center gap-2">
                    <div className="rounded-full bg-[#003EFF] flex items-center justify-center py-2 px-2 lg:py-2.5 lg:px-2.5">
                        <span className="font-bold text-xs lg:text-sm text-white">KO</span>
                    </div>
                    <img src={DownArr} alt="down-arr" />
                </div>
            </div>
        </div>
    )
}

export default Header;