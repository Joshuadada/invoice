import { memo } from "react"
import OverviewIcon from "../assets/icons/overview-icon.svg"

type Properties = {
    cardTitle: string,
    count: string,
    countBgClass: string,
    amount: string
}

const IMoneyCard = ({cardTitle, count, countBgClass, amount}: Properties) => {
  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 xl:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl">
        <img src={OverviewIcon} className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" alt="" />
        <div className="mt-4 flex items-center gap-2">
            <p className="uppercase text-[0.6rem] md:text-xs text-[#697598]">{cardTitle}</p>
            <span className={"px-2 md:px-4 py-1 md:py-2 rounded-2xl md:rounded-3xl lg:rounded-[2rem] text-[#373B47] text-[0.6rem] md:text-xs font-medium " + countBgClass}>{count}</span>
        </div>
        <h4 className="text-[#1F1F23] font-medium text-base sm:text-lg md:text-xl lg:text-2xl mt-2">{amount}</h4>
    </div>
  )
}

export default memo(IMoneyCard);