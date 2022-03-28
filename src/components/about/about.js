import { Menu } from '@headlessui/react';
import { FaAngleUp } from 'react-icons/fa'
import { useCallback, useRef, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer'
import Footer from '../footer/footer';

const images = [
    'meat-steak-wooden-plate-with-black-pepper-rosemary.jpg',
    'registration-orders.jpg',
    'midsection-male-baker-s-hand-dusting-flour-wooden-desk-with-baked-bread.jpg',
    'front-view-burger-with-french-fries.jpg',
    'tuna-salad-presentation.jpg',
    'cook-tossing-vegetables-frying-pan.jpg',
    'jars-with-berries.jpg',
    'spaghetti-with-basil-leaf-frying-pan-wooden-table-with-ingredients.jpg',
    'dish-with-toast-with-cream-strawberries-coffee.jpg',
    'waiter-keeps-salver-with-snacks.jpg',
    'delicious-strawberry-tart.jpg',
    'chef-sprinkling-spices-prepared-dish_.jpg',
]

const chefs = [
    {
        name: "Carlos Morales",
        avatar: "carlos.jpg",
        desc: 'Eget lorem dolor sed viverra ipsum nunc. Pretium viverra suspendisse potenti nullam ac purus.'
    },
    {
        name: "Francheska Morales",
        avatar: "francheska.jpg",
        desc: 'Lectus sit amet est placerat in egestas erat. Ullamcorper a lacus vestibulum sed arcu non euismod lacinia.'
    },
    {
        name: "Michael Mardi",
        avatar: "michele.jpg",
        desc: 'Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Lectus sit amet est placerat in egestas erat.'
    },
    {
        name: "Pablo Veres",
        avatar: "pablo.jpg",
        desc: 'Consectetur lorem don. Non nisi est sit amet facilisis magna etiam tempor. Cras semper auctor neque vitae.'
    }
]

const About = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [more, setMore] = useState(false)
    const Menus = useRef(null)
    const openViewerImage = useCallback((index) => {
        setCurrentImage(index)
        setIsViewerOpen(true)
        console.log(index);
    }, [])
    const closeViewerImage = () => {
        setCurrentImage(0)
        setIsViewerOpen(false)
    }
    const handleMore = () => {
      Menus.current.style.maxHeight = '100%'
      setMore(true)
    }
    const handleUp = () => {
      Menus.current.style.maxHeight = '100vh'
      setMore(false)
    }
  return (
    <div>
      <div className="block relative overflow-hidden bg-black min-h-30vh">
        <div className="bg-overlay-theme absolute bg-black w-full h-full bg-center opacity-20"></div>
        <div className="container mx-auto relative p-3 text-center text-white flex flex-col justify-center min-h-30vh">
          <h1 className="text-6xl tracking-4">ABOUT</h1>
          <p className="pt-2">How to be a a professional Chef​.</p>
        </div>
      </div>
      <div className="py-12 px-5">
        <div className="max-w-1140p mx-auto">
          <div className='text-center'>
            <h1 className='laptop:text-40p text-3xl  laptop:tracking-5'>WELCOME TO GOURMET RESTAURANT</h1>
            <p className='leading-normal text-gray-500'>
              Eget lorem dolor sed viverra ipsum nunc. Pretium viverra
              suspendisse potenti nullam ac tortor vitae purus. Gravida rutrum
              quisque non tellus orci ac. Consectetur lorem donec massa sapien
              faucibus. Non nisi est sit amet facilisis magna etiam tempor. Cras
              semper auctor neque vitae.
            </p>
          </div>
          <div className='pt-10'>
              <img src={require('./images/restaurant-interior.jpg')}/>
          </div>
          <div className='flex laptop:flex-wrap laptop:flex-row flex-col max-h-screen overflow-hidden' ref={Menus}>
              {images.map((item, index) => (
                <div className='laptop:max-w-1/6 w-full mt-3 laptop:mt-0' key={index}>
                    <a>
                        <img src={require('./images/' + item)} onClick={() => openViewerImage(index)}/>
                    </a>
                </div>
              ))}
              {isViewerOpen && (
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeViewerImage}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
              )}
          </div>
          <div className='laptop:hidden flex justify-center pt-5'>
            <button className='py-5 px-12 bg-red-600 text-white text-xl hover:bg-hoverBtn duration-200'>
              <div className='block max-h-7 overflow-hidden hover:-translate-y-3 duration-300 hover:overflow-visible' onClick={more ? handleUp : handleMore}>
                <span className={more ? 'hidden' : 'block'}>More</span>
                <span className={more ? 'block' : 'hidden'}><FaAngleUp/></span>
                <span className={more ? 'hidden' : 'block'}>...</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='py-12 px-5 relative'>
          <div className='bg-chef-theme opacity-30 absolute h-full w-full inset-0 bg-center bg-cover'></div>
          <div className='max-w-1140p mx-auto relative'>
            <div className='text-center'>
                <h1 className='uppercase text-40p laptop:tracking-5'>
                    who are you
                </h1>
            </div>
            <div className='max-w-1140p'>
                    <div className='w-full flex laptop:justify-between laptop:flex-row flex-col py-2'>
                        {chefs.map((item, index) => (
                            <div className='laptop:w-1/4 w-full p-3 text-center flex flex-col items-center' key={index}>
                                <div className='p-2 border border-black overflow-hidden'>
                                    <img src={require('./images/' + item.avatar)} className="hover:scale-110 duration-300 hover:rotate-3 cursor-pointer"/>
                                </div>
                                <h3 className='text-2xl py-2'>{item.name}</h3>
                                <p className='text-gray-500'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
            </div>
          </div>
      </div>
      <div className="px-3 py-14 flex flex-col items-center justify-between">
        <div className="mb-8">
          <h1 className="text-4xl uppercase tracking-5 font-medium">
            testimonials
          </h1>
        </div>
        <div className="flex flex-col items-center justify-evenly laptop:flex-row container">
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                  src={require('../../images/johnDoe.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                 src={require('../../images/maria.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                  src={require('../../images/kelvin.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
