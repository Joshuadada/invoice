import { Modal, Table } from "flowbite-react";
import CloseIcon from "../../../assets/icons/close-icon.svg"
import AvatarImg from '../../../assets/images/avatar.svg'
import SenderLogo from '../../../assets/images/sender-logo.svg'
import IButton from "../../../components/IButton";
import { memo } from "react";

const InvoiceModal = ({ openModal, setOpenModal, data }: { openModal: boolean; setOpenModal: any, data?: any }) => {
    return (
        <>
            <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)} className="h-screen">
                <div className="flex justify-end md:absolute md:-top-9 right-0">
                    <div className="md:bg-white p-1 rounded-full cursor-pointer" onClick={() => setOpenModal(false)}>
                        <img src={CloseIcon} className="h-6 w-6" alt="close-icon" />
                    </div>
                </div>

                <Modal.Body className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div>
                        <div className="flex items-start justify-between gap-3 md:gap-4 lg:gap-6 flex-wrap">
                            <div>
                                <h5 className="text-[#1F1F23] font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">{data?.invoiceDetails?.invoiceName}</h5>
                                <p className="text-[#697598] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">View the details and activity of this invoice</p>
                                <div className="mt-2 md:mt-4 lg:mt-6">
                                    {data?.paymentType === 'paid' && <span className="bg-[#E6FFF0] border border-[#12904333] text-[#129043] text-[0.4rem] md:text-[0.6rem] font-medium uppercase py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{data?.paymentType}</span>}
                                    {data?.paymentType === 'partial payment' && <span className="bg-[#F2FBFF] text-[#003EFF] border border-[#E3E6EF] text-[0.4rem] md:text-[0.6rem] font-medium uppercase py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{data?.paymentType}</span>}
                                    {data?.paymentType === 'overdue' && <span className="bg-[#FFF4F5] border border-[#FF566333] text-[#FF5663] text-[0.4rem] md:text-[0.6rem] font-medium uppercase py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{data?.paymentType}</span>}
                                    {data?.paymentType === 'draft' && <span className="bg-[#F6F8FA] border border-[#373B4733] text-[#373B47] text-[0.4rem] md:text-[0.6rem] font-medium uppercase py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{data?.paymentType}</span>}
                                    {data?.paymentType === 'pending payment' && <span className="bg-[#FFF8EB] border border-[#D98F0033] text-[#D98F00] text-[0.4rem] md:text-[0.6rem] font-medium uppercase py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{data?.paymentType}</span>}
                                </div>
                            </div>

                            <div className="flex items-center flex-wrap gap-3 md:gap-4 lg:gap-6">
                                <IButton className="bg-white text-[#003EFF] border border-[#E3E6EF]" btnText="Download as pdf" />
                                <IButton className="bg-[#003EFF] text-white" btnText="Send invoice" />
                                <IButton className="bg-white text-[#373B47] border border-[#E3E6EF]" btnText="More" />
                            </div>
                        </div>



                        <div className="p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center flex-wrap gap-1 md:gap-2 lg:gap-3 border border-[#E3E6EF] mt-4 md:mt-6 lg:mt-8">
                            <span className="text-[#666F77] text-[0.6rem] md:text-xs lg:text-sm uppercase">Reminders</span>
                            <div className="rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] px-3 py-2 lg:px-4 lg:py-3 cursor-pointer">
                                <span className="text-[#373B47] font-medium text-[0.6rem] md:text-xs lg:text-sm">14 days before due date</span>
                            </div>
                            <div className="rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] px-3 py-2 lg:px-4 lg:py-3 cursor-pointer">
                                <span className="text-[#373B47] font-medium text-[0.6rem] md:text-xs lg:text-sm">7 days before due date</span>
                            </div>
                            <div className="rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] px-3 py-2 lg:px-4 lg:py-3 cursor-pointer">
                                <span className="text-[#373B47] font-medium text-[0.6rem] md:text-xs lg:text-sm">3 days before due date</span>
                            </div>
                            <div className="rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] px-3 py-2 lg:px-4 lg:py-3 cursor-pointer">
                                <span className="text-[#373B47] font-medium text-[0.6rem] md:text-xs lg:text-sm">24 hrs before due date</span>
                            </div>
                            <div className="rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] px-3 py-2 lg:px-4 lg:py-3 cursor-pointer">
                                <span className="text-[#373B47] font-medium text-[0.6rem] md:text-xs lg:text-sm">On the due date</span>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
                            <div className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E3E6EF] lg:w-7/12">
                                <div className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#FCDDEC]">
                                    <div className="flex items-start flex-wrap justify-between gap-3">
                                        <div>
                                            <h4 className="text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium text-[#697598] uppercase">Sender</h4>
                                            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                                                <img src={SenderLogo} alt="" />
                                                <div className="flex flex-col md:gap-1 lg:gap-2">
                                                    <h5 className="text-[#1F1F23] font-medium text-xs md:text-sm lg:text-base">{data?.senderDetails?.senderName}</h5>
                                                    <p className="text-[#697598] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{data?.senderDetails?.senderPhone}</p>
                                                    <p className="text-[#697598] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{data?.senderDetails?.senderEmail}</p>
                                                    <p className="text-[#697598] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{data?.senderDetails?.senderAddress}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium text-[#697598] uppercase">Customer</h4>
                                            <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                                                <div className="flex flex-col md:gap-1 lg:gap-2">
                                                    <h5 className="text-[#1F1F23] font-medium text-xs md:text-sm lg:text-base">{data?.customerDetails?.customerName}</h5>
                                                    <p className="text-[#697598] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{data?.customerDetails?.customerPhone}</p>
                                                    <p className="text-[#697598] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{data?.customerDetails?.customerEmail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8">
                                        <h4 className="text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium text-[#697598] uppercase">Invoice details</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-1 md:mt-2">
                                            <div className="flex flex-col md:gap-1">
                                                <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">invoice no</h6>
                                                <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.invoiceDetails?.invoiceNo}</p>
                                            </div>

                                            <div className="flex flex-col md:gap-1">
                                                <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Issue date</h6>
                                                <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.invoiceDetails?.issueDate}</p>
                                            </div>

                                            <div className="flex flex-col md:gap-1">
                                                <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Due date</h6>
                                                <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.invoiceDetails?.dueDate}</p>
                                            </div>

                                            <div className="flex flex-col md:gap-1">
                                                <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Billing currency</h6>
                                                <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.invoiceDetails?.billingCurrency}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 md:mt-4 lg:mt-6">
                                    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                                        <h5 className="text-[#1F1F23] font-medium text-xs sm:text-sm md:text-base lg:text-xl">Items</h5>
                                        <hr className="flex-1" />
                                    </div>

                                    <div className="overflow-x-auto">
                                        <Table>
                                            <Table.Body>
                                                {data?.itemDetails?.items.map((item: any) =>
                                                    <Table.Row key={item?.id} className="bg-white">
                                                        <Table.Cell className="px-0 py-1 sm:py-2 md:py-3 lg:py-4">
                                                            <div className="flex flex-col md:gap-1 w-60">
                                                                <span className="text-[#1F1F23] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">{item?.itemTitle}</span>
                                                                <span className="text-[#666F77] text-[0.5rem] md:text-[0.6rem] lg:text-xs">{item?.itemDescription}</span>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell className="py-1 sm:py-2 md:py-3 lg:py-4">
                                                            <div className="">
                                                                <span className="text-[#1F1F23] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">{item?.itemNumber}</span>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell className="py-1 sm:py-2 md:py-3 lg:py-4">
                                                            <div className="">
                                                                <span className="text-[#1F1F23] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">{item?.itemDiscount}</span>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell className="py-1 sm:py-2 md:py-3 lg:py-4">
                                                            <div className="items-end">
                                                                <span className="text-[#1F1F23] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">{item?.itemPrice}</span>
                                                            </div>
                                                        </Table.Cell>
                                                    </Table.Row>)}
                                            </Table.Body>
                                        </Table>
                                    </div>

                                    <div className="max-w-[26.5rem] ml-auto flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-4 lg:mt-6">
                                        <div className="flex sm:gap-1 md:gap-2 lg:gap-3 justify-between items-center">
                                            <h6 className="text-[#B7BDCF] text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase">Subtotal</h6>
                                            <p className="text-[#373B47] text-xs sm:text-sm md:text-base lg:text-lg">{data?.itemDetails?.subTotal}</p>
                                        </div>

                                        <div className="flex sm:gap-1 md:gap-2 lg:gap-3 justify-between items-center">
                                            <h6 className="text-[#B7BDCF] text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase">Discount ({data?.itemDetails?.discountPercentage})</h6>
                                            <p className="text-[#373B47] text-xs sm:text-sm md:text-base lg:text-lg">{data?.itemDetails?.discount}</p>
                                        </div>

                                        <div className="flex sm:gap-1 md:gap-2 lg:gap-3 justify-between items-center">
                                            <h6 className="text-[#373B47] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-medium uppercase">Total amount due</h6>
                                            <p className="text-[#373B47] text-xs sm:text-base md:text-lg lg:text-xl font-bold">{data?.itemDetails?.totalAmountDue}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-[#E3E6EF] rounded-xl md:rounded-2xl lg:rounded-3xl py-2 md:py-3 lg:py-4 px-2 md:px-4 lg:px-6 mt-2 md:mt-4 lg:mt-6">
                                    <h4 className="text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium text-[#697598] uppercase">Payment information</h4>
                                    <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                                        <div className="flex flex-col md:gap-1">
                                            <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Account name</h6>
                                            <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.paymentInformation?.accountName}</p>
                                        </div>

                                        <div className="flex flex-col md:gap-1">
                                            <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">account number</h6>
                                            <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.paymentInformation?.accountNumber}</p>
                                        </div>

                                        <div className="flex flex-col md:gap-1">
                                            <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Ach routing no</h6>
                                            <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.paymentInformation?.achRoutingNo}</p>
                                        </div>

                                        <div className="flex flex-col md:gap-1">
                                            <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">Bank Name</h6>
                                            <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.paymentInformation?.bankName}</p>
                                        </div>

                                        <div className="flex flex-col md:gap-1">
                                            <h6 className="uppercase text-[#666F77] text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]">bank address</h6>
                                            <p className="text-[#1F1F23] text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium">{data?.paymentInformation?.bankAddress}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-[#E3E6EF] rounded-xl md:rounded-2xl lg:rounded-3xl py-2 md:py-3 lg:py-4 px-2 md:px-4 lg:px-6 mt-2 md:mt-4 lg:mt-6">
                                    <h4 className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm font-medium text-[#B7BDCF] uppercase">NOTE</h4>
                                    <p className="text-[#666F77] text-[0.6rem] sm:text-xs md:text-sm lg:text-base">{data?.note}</p>
                                </div>
                            </div>
                            <div className="lg:w-5/12">
                                <h5 className="text-[#1F1F23] text-sm sm:text-base md:text-lg xl:text-xl font-medium">Invoice Activity</h5>
                                <div className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-0.5 md:gap-1.5">
                                    {data?.invoiceActivities.map((item: any) =>
                                        <div key={item?.id} className="flex gap-2 md:gap-3 lg:gap-4 flex-start">
                                            <div>
                                                <img src={AvatarImg} className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 rounded-full object-cover" alt="" />
                                                {/* <img src="" alt="" /> */}
                                            </div>

                                            <div>
                                                <h5 className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium">{item?.activityTitle}</h5>
                                                <p className="mt-1 text-[#697598] text-[0.6rem] md:text-xs lg:text-sm">{item?.date}</p>
                                                <p className="p-2 md:p-3 lg:p-4 bg-[#F6F8FA] text-[grey] text-[0.6rem] md:text-xs lg:text-sm mt-1 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl">{item?.activityDetails}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default memo(InvoiceModal)