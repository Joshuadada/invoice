import Sidebar from "../../components/Sidebar"
import HomeIcon from "../../assets/icons/home-icon.svg"
import OverviewIcon from "../../assets/icons/overview-icon.svg"
import InvoiceIcon from "../../assets/icons/invoice-icon.svg"
import BeneficiaryIcon from "../../assets/icons/beneficiary-icon.svg"
import HelpCenterIcon from "../../assets/icons/help-center-icon.svg"
import SettingsIcon from "../../assets/icons/settings-icon.svg"
import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"

export const SidebarContext = createContext<any>(null);

const Dashboard = () => {
    const navItems = [
        {
            id: 1,
            imgSrc: HomeIcon,
            navText: 'Getting Started',
            navUrl: '/main/getting-started',
        },
        {
            id: 2,
            imgSrc: OverviewIcon,
            navText: 'Overview',
            navUrl: '/main/overview',
        },
        {
            id: 3,
            imgSrc: HomeIcon,
            navText: 'Accounts',
            navUrl: '/main/accounts',
        },
        {
            id: 4,
            imgSrc: InvoiceIcon,
            navText: 'Invoice',
            navUrl: '/main/invoice',
        },
        {
            id: 5,
            imgSrc: BeneficiaryIcon,
            navText: 'Beneficiary Management',
            navUrl: '/main/beneficiary-management',
        },
        {
            id: 6,
            imgSrc: HelpCenterIcon,
            navText: 'Help Center',
            navUrl: '/main/help-center',
        },
        {
            id: 7,
            imgSrc: SettingsIcon,
            navText: 'Settings',
            navUrl: '/main/settings',
        }
    ]

    const [sidebarState, setSidebarState] = useState(false);

    const handleSidebarState = (data: boolean) => {
        setSidebarState(data);
    };

    return (
        <SidebarContext.Provider value={{ handleSidebarState }}>
            <div className="flex h-full shadow-md">
                <div><Sidebar active={sidebarState} className="w-72" navItems={navItems} /></div>
                <div className="flex-1 px-4 sm-px-6 md:px-8 lg:px-10 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </SidebarContext.Provider>
    )
}

export default Dashboard