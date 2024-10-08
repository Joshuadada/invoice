import { Table } from "flowbite-react"
import Header from "../../../components/Header"
import IMoneyCard from "../../../components/IMoneyCard"
import IActionCard from "../../../components/IActionCard"
import MoneyImg from '../../../assets/images/money.svg'
import SettingImg from '../../../assets/images/setting.svg'
import UserImg from '../../../assets/images/profile-2user.svg'
import AvatarImg from '../../../assets/images/avatar.svg'
import { useState } from "react"
import InvoiceModal from "../modals/InvoiceModal"
import IButton from "../../../components/IButton"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../../components/Loader"



const Invoice = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const sendDataToModal = (status: boolean, data: any) => {
        setOpenModal(status);
        setModalData(data)
    }

    const { data: invoice, isPending } = useFetch('http://localhost:3000/invoice')

    if (isPending) return <Loader />

    return (
        <>
            <Header pageTitle="Invoice" />

            <div className="my-4 sm:my-6 md:my-8 lg:my-10">
                <div className="flex items-center justify-between flex-wrap gap-4 md:gap-6 lg:gap-8">
                    <h4 className="font-medium text-[#1F1F23] text-base sm:text-xl md:text-2xl lg:text-3xl">Invoice</h4>

                    <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
                        <IButton className="bg-white text-[#697598] border border-[#E3E6EF]" btnText="see what’s new" />
                        <IButton className="bg-[#003EFF] text-white" btnText="see what’s new" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10">
                    <IMoneyCard cardTitle="total paid" count={invoice?.totalPaidCount} countBgClass="bg-[#B6FDD3]" amount={invoice?.totalPaidAmount} />
                    <IMoneyCard cardTitle="total overdue" count={invoice?.totalOverdueCount} countBgClass="bg-[#FFB7BD]" amount={invoice?.totalOverdueAmount} />
                    <IMoneyCard cardTitle="total draft" count={invoice?.totalDraftCount} countBgClass="bg-[#D9D9E0]" amount={invoice?.totalDraftAmount} />
                    <IMoneyCard cardTitle="total unpaid" count={invoice?.totalUnpaidCount} countBgClass="bg-[#F8E39B]" amount={invoice?.totalUnpaidAmount} />
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10">
                    <h5 className="text-[#1F1F23] font-medium text-sm sm:text-base md:text-lg lg:text-xl">Invoice Actions</h5>

                    <div className="mt-2 md:mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                        <IActionCard title="Create New Invoice" subTitle="Create new invoices easily" imgSrc={MoneyImg} />
                        <IActionCard title="Change Invoice settings" subTitle="Customise your invoices" imgSrc={SettingImg} />
                        <IActionCard title="Manage Customer list" subTitle="Add and remove customers" imgSrc={UserImg} />
                    </div>
                </div>

                <div className="mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
                    <div className="bg-white p-3 sm:p-4 md:p-6 xl:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] lg:w-7/12 overflow-auto">
                        <div className="flex items-center justify-between">
                            <h5 className="text-[#1F1F23] text-sm sm:text-base md:text-lg xl:text-xl font-medium">Recent Invoices</h5>
                            <IButton className="bg-white text-[#003EFF] border border-[#E3E6EF]" btnText="View All invoices" />
                        </div>

                        <div className="mt-3 md:mt-4 lg:mt-6">
                            <h5 className="uppercase text-[#1F1F23] text-[0.6rem] lg:text-xs font-medium">today - 27th November, 2022</h5>
                            <div className="overflow-x-auto">
                                <Table>
                                    <Table.Body>
                                        {invoice?.invoices.map((item: any) => (item?.paymentDate === 'today - 27th November, 2022' &&
                                            <Table.Row key={item?.id} className="bg-white cursor-pointer" onClick={() => sendDataToModal(true, item)}>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="w-28">
                                                        <span className="text-[#373B47] text-[0.6rem] md:text-xs lg:text-sm font-medium">{item?.invoiceDetails?.invoiceName}</span>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="flex flex-col md:gap-1 w-32">
                                                        <span className="text-[#666F77] text-[0.4rem] md:text-[0.6rem] uppercase">Due date</span>
                                                        <span className="text-[#697598] text-[0.6rem] md:text-xs lg:text-sm font-medium">{item?.invoiceDetails?.dueDate}</span>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="flex flex-col gap-2 items-end w-36">
                                                        <span className="text-[#373B47] font-medium text-xs md:text-sm lg:text-base">{item?.itemDetails?.totalAmountDue}</span>
                                                        {item?.paymentType === 'paid' && <span className="bg-[#E6FFF0] border border-[#12904333] text-[#129043] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'partial payment' && <span className="bg-[#F2FBFF] text-[#003EFF] border border-[#E3E6EF] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'overdue' && <span className="bg-[#FFF4F5] border border-[#FF566333] text-[#FF5663] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'draft' && <span className="bg-[#F6F8FA] border border-[#373B4733] text-[#373B47] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'pending payment' && <span className="bg-[#FFF8EB] border border-[#D98F0033] text-[#D98F00] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>

                        <div className="mt-3 md:mt-4 lg:mt-6">
                            <h5 className="uppercase text-[#1F1F23] text-[0.6rem] lg:text-xs font-medium">8th december, 2022</h5>
                            <div className="overflow-x-auto">
                                <Table>
                                    <Table.Body>
                                        {invoice?.invoices.map((item: any) => (item?.paymentDate === '8th december, 2022' &&
                                            <Table.Row key={item?.id} className="bg-white cursor-pointer" onClick={() => sendDataToModal(true, item)}>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="w-28">
                                                        <span className="text-[#373B47] text-[0.6rem] md:text-xs lg:text-sm font-medium">{item?.invoiceDetails?.invoiceName}</span>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="flex flex-col md:gap-1 w-32">
                                                        <span className="text-[#666F77] text-[0.4rem] md:text-[0.6rem] uppercase">Due date</span>
                                                        <span className="text-[#697598] text-[0.6rem] md:text-xs lg:text-sm font-medium">{item?.invoiceDetails?.dueDate}</span>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="p-2 md:p-4">
                                                    <div className="flex flex-col gap-2 items-end w-36">
                                                        <span className="text-[#373B47] font-medium text-xs md:text-sm lg:text-base">{item?.itemDetails?.totalAmountDue}</span>
                                                        {item?.paymentType === 'paid' && <span className="bg-[#E6FFF0] border border-[#12904333] text-[#129043] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'partial payment' && <span className="bg-[#F2FBFF] text-[#003EFF] border border-[#E3E6EF] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'overdue' && <span className="bg-[#FFF4F5] border border-[#FF566333] text-[#FF5663] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'draft' && <span className="bg-[#F6F8FA] border border-[#373B4733] text-[#373B47] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                        {item?.paymentType === 'pending payment' && <span className="bg-[#FFF8EB] border border-[#D98F0033] text-[#D98F00] text-[0.4rem] md:text-[0.6rem] font-medium uppercase px-2 md:px-4 py-0.5 md:py-1.5 rounded-2xl md:rounded-3xl lg:rounded-[2rem]">{item?.paymentType}</span>}
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-3 sm:p-4 md:p-6 xl:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] lg:w-5/12 max-h-[45.75rem] overflow-auto">
                        <div className="flex items-center justify-between">
                            <h5 className="text-[#1F1F23] text-sm sm:text-base md:text-lg xl:text-xl font-medium">Recent Activities</h5>
                            <IButton className="bg-white text-[#003EFF] border border-[#E3E6EF]" btnText="View All" />
                        </div>

                        <div className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-0.5 md:gap-1.5">
                            {invoice?.invoiceActivities.map((item: any) =>
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

            <InvoiceModal openModal={openModal} setOpenModal={setOpenModal} data={modalData} />
        </>
    )
}

export default Invoice