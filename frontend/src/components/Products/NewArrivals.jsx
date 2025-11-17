import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scanScrollRight, setScanScrollRight] = useState(false);
  const [scanScrollLeft, setScanScrollLeft] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/200/300?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "9",
      name: "Stylish Jacket",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/300?random=9",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setScanScrollLeft(leftScroll > 0);
      setScanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep you wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons  */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
          <button
            onClick={() => scroll("left")}
            disabled={!scanScrollLeft}
            className={`p-2 rounded   transition duration-300 ${
              scanScrollLeft
                ? "bg-white text-black border  cursor-pointer"
                : "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!scanScrollRight}
            className={`p-2 rounded  transition duration-300 ${
              scanScrollRight
                ? "bg-white text-black border  cursor-pointer"
                : "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content  */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll  flex space-x-6 relative custom-scroll ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newArrivals.map((product) => (
          <div
            key={product?._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product?.images[0]?.url}
              alt={product?.images[0]?.altText || product?.name}
              className="object-cover w-full h-[500px] rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product?._id}`} className="block">
                <h4 className="font-medium">{product?.name}</h4>
                <p className="mt-1">{product?.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
