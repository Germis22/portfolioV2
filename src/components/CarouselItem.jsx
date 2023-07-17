const CarouselItem = ({ id, src, alt, prevSlide, nextSlide }) => {
  return (
    <div id={id} className="carousel-item relative w-full justify-center">
      <img
        className="object-fill rounded-lg"
        width={"98%"}
        height={"98%"}
        src={src}
        alt={alt}
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={prevSlide} className="btn btn-circle">
          ❮
        </a>
        <a href={nextSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
