import imag1 from '../assets/Images/pixel4.webp';
import imag2  from '../assets/Images/pixel3.webp'
import imag3  from '../assets/Images/DALL·E 2024-11-25 07.51.03 - A beautiful winter donation campaign image featuring warm clothing such as scarves, mittens, hats, and coats being handed out in a snowy community set.webp'

const Banner = () => {
    return (
        <div className="carousel w-4/6 ml-60">
  <div id="slide1" className="carousel-item relative w-full">
    <img 
      src={imag1}
      className="w-[1170px] h-[480px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={imag2}
      className="w-[1170px] h-[480px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={imag3 }
      className="w-[1170px] h-[480px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
    );
};

export default Banner;