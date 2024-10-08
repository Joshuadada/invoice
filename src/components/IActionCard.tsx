import { memo } from "react"

type Properties = {
    title: string,
    subTitle: string,
    imgSrc: string
}

const IActionCard = ({title, subTitle, imgSrc}: Properties) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 xl:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl bg-white cursor-pointer">
        <img src={imgSrc} className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" alt="" />
        <h5 className="text-[#373B47] text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-4">{title}</h5>
        <p className="text-[#697598] text-[0.6rem] md:text-xs lg:text-sm">{subTitle}</p>
    </div>
  )
}

export default memo(IActionCard);