import Slider from "react-slick";

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

const carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src={require('../../images/waiter-keeps-salver-with-snacks.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/tuna-salad-presentation.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/registration-orders.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/spaghetti-bolognese.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/prawn-top-with-cheese-underneath.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/delicious-strawberry-tart.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/restaurant-interior_1.jpg')}
          alt=""
        />
      </div>
      <div>
        <img
          src={require('../../images/sparkling-glassware-stands-long-table-prepared-wedding-di.jpg')}
          alt=""
        />
      </div>
    </Slider>
  );
};

export default carousel;
