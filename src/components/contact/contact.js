import {FaMapSigns, FaPhoneVolume} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <div>
            <div className="block relative overflow-hidden bg-black min-h-30vh">
                <div className="bg-overlay-theme absolute bg-black w-full h-full bg-center opacity-20"></div>
                <div className="container mx-auto relative p-3 text-center text-white flex flex-col justify-center min-h-30vh">
                <h1 className="text-6xl tracking-4">Contact</h1>
                <p className="pt-2">Contact us via mobile, email or use our online form.</p>
                </div>
            </div>
            <div className="py-12 px-5">
                <div className="laptop:w-2/3 mx-auto w-full">
                    <div className="text-center">
                        <h1 className="uppercase tracking-5 text-40p">contact us</h1>
                    </div>
                    <div className='flex laptop:justify-around z-10 flex-col laptop:flex-row items-start'>
                        <div className='py-12 px-7 laptop:m-5 border-y-hoverBtn border-y-2 text-center laptop:w-1/3 leading-loose flex flex-col justify-between bg-white w-full '>
                            <div className='text-5xl flex justify-center text-hoverBtn'>
                                <FaMapSigns/>
                            </div>
                            <span className='block'>Street Name, FL 54785</span>
                        </div>
                        <div className='py-12 px-7 laptop:m-5 border-y-hoverBtn border-y-2 text-center laptop:w-1/3 leading-loose flex flex-col justify-between bg-white w-full'>
                            <div className='text-5xl flex justify-center text-hoverBtn'>
                                <FaPhoneVolume/>
                            </div>
                            <span className='block'>621-254-2147-973</span>
                        </div>
                        <div className='py-12 px-7 laptop:m-5 border-y-hoverBtn border-y-2 text-center laptop:w-1/3 leading-loose flex flex-col justify-between bg-white w-full'>
                            <div className='text-5xl flex justify-center text-hoverBtn'>
                                <AiOutlineMail/>
                            </div>
                            <span className='block'>youremail@ipsum.com</span>
                        </div>
                    </div>
                    <div className='py-24 px-10 bg-gray-50 shadow-2xl -mt-16 w-full'>
                        <form className='p-8'>
                            <div>
                                <label>Your name (required)</label>
                                <input className='block p-4 mb-2 w-full border border-gray-300 focus:bg-gray-100 focus:outline-red-600' type='text' required/>
                            </div>
                            <div>
                                <label>Your Email (required)</label>
                                <input className='block p-4 mb-2 w-full border border-gray-300 focus:bg-gray-100 focus:outline-red-600' type='email' required/>
                            </div>
                            <div>
                                <label>Subject</label>
                                <input className='block p-4 mb-2 w-full border border-gray-300 focus:bg-gray-100 focus:outline-red-600' type='text'/>
                            </div>
                            <div>
                                <label>Your Message</label>
                                <textarea className='w-full block border border-gray-300 focus:bg-gray-100 focus:outline-red-600' rows='6'></textarea>
                            </div>
                            <div className='block'>
                                <button className='w-full laptop:w-1/3 mt-2 py-5 px-16 bg-red-600 hover:bg-hoverBtn text-white text-xl float-right'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact