import { Button } from "flowbite-react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section className="bg-white h-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#00468B]">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to={'/'} className="inline-flex my-4"><Button className='w-full bg-[#00468B] hover:!bg-[#00468B]'>Back to Login</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound