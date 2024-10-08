import { memo } from "react"

const IButton = ({btnText, className}: {btnText: string, className?: string}) => {
  return (
    <button className={'outline-none rounded-2xl md:rounded-3xl lg:rounded-[2rem] uppercase font-medium py-3 px-5 xl:py-4 xl:px-7 text-[0.6rem] sm:text-xs xl:text-sm ' + className}>{btnText}</button>
  )
}

export default memo(IButton);