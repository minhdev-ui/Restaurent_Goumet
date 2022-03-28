import {FaMapMarkerAlt, FaAt, FaMobileAlt} from 'react-icons/fa'
import MapComponent from "./map"
const Footer = () => {
    return(
        <div>
            <MapComponent/>
            <div className="py-14 px-3 bg-black text-white">
                <div className="flex flex-col laptop:flex-row w-full justify-center items-start laptop:w-3/4 mx-auto">
                    <div className="laptop:w-1/4 w-full flex flex-col justify-start p-3">
                        <h1 className="text-2xl">About us</h1>
                        <div className="py-2">
                            <div className="bg-gray-400 w-full h-px"></div>
                        </div>
                        <p>At in tellus integer feugiat scelerisque. Eu sem integer vitae justo eget magna. </p>
                    </div>
                    <div className="laptop:w-1/4 w-full flex flex-col justify-start p-3">
                        <h1 className="text-2xl">Find us</h1>
                        <div className="py-2">
                            <div className="bg-gray-400 w-full h-px"></div>
                        </div>
                        <ul>
                            <li className="pb-4 text-lg flex justify-start items-baseline"><FaMapMarkerAlt/><span className='pl-2'>Street Name, Fl 54785</span></li>
                            <li className="pb-4 text-lg flex justify-start items-baseline"><FaAt/><span className='pl-2'>youremail@ipsum.com</span></li>
                            <li className="pb-4 text-lg flex justify-start items-baseline"><FaMobileAlt/><span className='pl-2'>621-254-2147-97356</span></li>
                        </ul>
                    </div>
                    <div className="laptop:w-1/2 w-full flex flex-col justify-start p-3">
                        <h1 className="text-2xl">Subscribe to our newsletter</h1>
                        <div className="pt-4">
                            <div>
                                <label className="block">Your Email*</label>
                                <input type="text" className="p-4 block w-full"/>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button className="py-5 px-10 bg-red-600 text-lg hover:bg-red-700">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer