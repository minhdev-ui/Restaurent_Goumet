import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{...style, right: '10px'}}
        onClick={onClick}
      >
      </div>
    )
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{...style, left: '10px', zIndex:1}}
        onClick={onClick}
      >
      </div>
    )
  }

function Gallery(){
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    }
    return(
        <div>
            <div className="block relative overflow-hidden bg-black min-h-30vh">
                <div className="bg-overlay-theme absolute bg-black w-full h-full bg-center opacity-20"></div>
                <div className="container mx-auto relative p-3 text-center text-white flex flex-col justify-center min-h-30vh">
                <h1 className="text-6xl tracking-4">Gallery</h1>
                <p className="pt-2">Find the best place in your town​.</p>
                </div>
            </div>
            <div className="py-12 px-5">
                <div className="container mx-auto p-3">
                    <div className="text-center pb-8">
                        <h1 className="text-4xl tracking-5">THE RESTAURANT</h1>
                    </div>
                    <div>
                        <div className='flex flex-col laptop:flex-row'>
                            <div className='laptop:max-w-1/2'>
                                <Slider {...settings}>
                                    <div>
                                        <img alt='' src={require('./images/anh1.jpg')}/>
                                    </div>
                                    <div>
                                        <img alt='' src={require('./images/anh1.1.jpg')}/>
                                    </div>
                                    <div>
                                        <img alt='' src={require('./images/anh1.2.jpg')}/>
                                    </div>
                                </Slider>
                            </div>
                            <div className='p-5 flex flex-col justify-center laptop:max-w-1/2 text-justify laptop:text-left'>
                                <h2 className='text-3xl text-center laptop:text-left'>Our Restaurant</h2>
                                <p className='leading-relaxed text-gray-800'>Augue neque gravida in fermentum. Ornare suspendisse sed nisi lacus sed viverra tellus in. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Montes nascetur ridiculus mus mauris vitae ultricies. Turpis massa tincidunt dui ut ornare lectus. Et tortor consequat id porta nibh. </p>
                                <p className='leading-relaxed text-gray-800'>Vitae et leo duis ut diam quam nulla porttitor massa. Cursus mattis molestie a iaculis at erat pellentesque. Id faucibus nisl tincidunt eget. Cras sed felis eget velit aliquet sagittis id consectetur purus.</p>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='bg-red-600 w-full h-px'></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-1/2 p-3'>
                                <img className='w-full' src={require('./images/anh2.jpg')}/>
                            </div>
                            <div className='w-1/2 p-5 flex flex-col justify-center'>
                                <h2 className='text-3xl'>Our Garden</h2>
                                <p className='leading-relaxed text-gray-800'>Augue neque gravida in fermentum. Ornare suspendisse sed nisi lacus sed viverra tellus in. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Montes nascetur ridiculus mus mauris vitae ultricies. Turpis massa tincidunt dui ut ornare lectus. Et tortor consequat id porta nibh. </p>
                                <p className='leading-relaxed text-gray-800'>Vitae et leo duis ut diam quam nulla porttitor massa. Cursus mattis molestie a iaculis at erat pellentesque. Id faucibus nisl tincidunt eget. Cras sed felis eget velit aliquet sagittis id consectetur purus.</p>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='bg-red-600 w-full h-px'></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-1/2 p-3'>
                                <img className='w-full' src={require('./images/anh3.jpg')}/>
                            </div>
                            <div className='w-1/2 p-5 flex flex-col justify-center'>
                                <h2 className='text-3xl'>Events</h2>
                                <p className='leading-relaxed text-gray-800'>Augue neque gravida in fermentum. Ornare suspendisse sed nisi lacus sed viverra tellus in. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Montes nascetur ridiculus mus mauris vitae ultricies. Turpis massa tincidunt dui ut ornare lectus. Et tortor consequat id porta nibh. </p>
                                <p className='leading-relaxed text-gray-800'>Vitae et leo duis ut diam quam nulla porttitor massa. Cursus mattis molestie a iaculis at erat pellentesque. Id faucibus nisl tincidunt eget. Cras sed felis eget velit aliquet sagittis id consectetur purus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;