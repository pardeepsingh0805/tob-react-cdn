const { useEffect, useState } = React;
const { HashRouter, Routes, Route, useParams, Link } = ReactRouterDOM;
// Loading screen Component
const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FEF502]">
      <div className="flex flex-col items-center">
        <div className="border-t-4 border-black rounded-full w-16 h-16 animate-spin"></div>
        <h2 className="text-black text-xl mt-4 p-8">
          “Travel isn’t just about the places you visit, but the memories you
          create while waiting for the next adventure to unfold.”
        </h2>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ destinations }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const toggleHref = () => {
    setIsDropdown(false);
  };
  return (
    <nav className="h-20 p-4 flex flex-col justify-center items-center flex md:flex-row md:items-start">
      <div className="flex gap-2">
        <Link to="/">
          <img
            src="https://trekkersofbengaluru.co.in/Static/Images/logo.png"
            className="h-14 w-14"
          />
        </Link>
        <Link to="/">
          <h1 className="text-2xl mt-3">Trekkers of Bengaluru</h1>
        </Link>
      </div>
      <div className="flex gap-8 hidden md:flex ml-auto text-black mt-2">
        <Link
          to="/"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
        >
          Home
        </Link>
        <button
          onClick={toggleDropdown}
          className={`${
            isDropdown ? "bg-[#FEF502] rounded-lg p-2 " : ""
          }px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all`}
        >
          Destinations
          <i
            className={`${
              isDropdown ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
            } ml-1`}
          ></i>
        </button>
        {isDropdown && (
          <div className="absolute right-16 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-[#FEF502] ring-opacity-5 z-30">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {destinations.map((destination, index) => (
                <Link
                  to={`/destination/${destination.id}`}
                  key={index}
                  className="block px-4 py-2 text-sm hover:bg-[#FEF502]"
                  role="menuitem"
                  onClick={toggleHref}
                >
                  {destination.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <Link
          to="#"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
        >
          About
        </Link>
        <a
          href="https://wa.me/+917044118120?text=Hi%2C%20I%20was%20exploring%20your%20website%20and%20I%20m%20interested%20in%20getting%20some%20information%20about%20a%20destination."
          target="_blank"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

// Mobile Navbar Component
const MobileNavbar = ({ destinations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDestination = () => {
    setIsOpen(!isOpen);
  };
  const toggleHref = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex text-xl gap-4 w-full bg-[#FEF502] text-black h-16 fixed left-0 right-0 bottom-0 md:hidden justify-between items-center p-4 z-40 ">
      <div className="flex justify-absolute w-full">
        <Link to="/" className="flex flex-col items-center p-2 mx-1">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
        <button
          className="flex flex-col items-center p-2 mx-2"
          onClick={toggleDestination}
        >
          <i class="fa-solid fa-route"></i>
          <span>Destinations</span>
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center overflow-scroll text-black">
            <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2">
              <button
                onClick={toggleDestination}
                className="absolute text-black text-3xl right-10 rounded-lg"
              >
                &times;
              </button>
              <h2 className="text-2xl mb-4 text-center">Destinations</h2>
              <ul className="space-y-4">
                {destinations.map((destination, index) => (
                  <Link
                    to={`/destination/${destination.id}`}
                    key={index}
                    className="block px-4 py-2 hover:bg-[#FEF502]"
                    role="menuitem"
                    onClick={toggleHref}
                  >
                    {destination.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Link className="flex flex-col items-center p-2 mx-2">
          <i class="fa-solid fa-address-card"></i>
          <span>About</span>
        </Link>
        <a
          className="flex flex-col items-center p-2 mx-2"
          href="https://wa.me/+917044118120?text=Hi%2C%20I%20was%20exploring%20your%20website%20and%20I%20m%20interested%20in%20getting%20some%20information%20about%20a%20destination."
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp"></i>
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
};

//Rating Component
const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="mx-2">{text && text}</span>
    </div>
  );
};

// Memories Gallery Component
const MemoriesGallery = () => {
  const [memories, setMemories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("https://web-production-683a.up.railway.app/components/memories/")
      .then((response) => response.json())
      .then((data) => setMemories(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [memories.length]);

  return (
    <div className="mt-4 p-4">
      <h1 className="text-3xl text-center">
        Trip ends, but memories last forever...
      </h1>

      <div className="relative overflow-x-auto mt-2">
        <div
          className="flex space-x-4 transition-transform duration-500 ease-in-out mt-4"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / memories.length)
            }%)`,
          }}
        >
          {memories.map((image, index) => (
            <img
              key={index}
              src={image.imageURL}
              alt={`Image ${index + 1}`}
              className="w-64 h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <div className="h-20 bg-black">
      <div></div>
    </div>
  );
};

// Slider Component
const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://web-production-683a.up.railway.app/components/slider/")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => alert(error.message));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  if (loading || images.length === 0) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div
      className="flex items-center h-[50vh] md:h-[60vh] justify-center bg-gray-100 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentIndex].image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="bg-black opacity-60"></div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center justify between z-10">
        <div className="text-left text-white p-6 order-2 md:order-1">
          <h1 className="text-3xl text-center mb-3">
            {images[currentIndex].title}
          </h1>
          <h1 className="text-center ">{images[currentIndex].subTitle}</h1>
        </div>
        <div className="ml-6 order-1 md:order-2">
          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].title}
            className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-lg ml-10 lg:w-[70vh] lg:h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};

//Home Page
const HomePage = ({ destinations }) => {
  function getRandomNumber() {
    return (Math.random() + 4).toFixed(1);
  }

  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("https://web-production-683a.up.railway.app/components/globalFAQ/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFaq(data);
        } else {
          console.error("Unexpected API response format:", data);
          setFaq([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error.message);
        setFaq([]);
        setLoading(false);
      });
  }, []);

  if (loading || faq.length === 0) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div className="">
      <Slider />
      <h1 className="text-center mt-4 text-3xl">Explore our Packages</h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 p-2">
        {destinations.map((destination) => (
          <div className="rounded-lg p-6" key={destination.id}>
            <img src={destination.featured_image} className="rounded-lg mb-2" />

            <Rating
              value={getRandomNumber()}
              color="#7f7eff"
              text={`(${getRandomNumber()})`}
            />
            <h1 className="text-2xl mb-3">{destination.title}</h1>
            <Link
              to={`/destination/${destination.id}`}
              className=" w-full h-16 p-2 bg-[#7f7eff] text-white rounded-lg hover:bg-[#FEF502] hover:text-black text-xl"
            >
              view package
            </Link>
          </div>
        ))}
      </div>
      {/* faqs will go here */}
      <div className="mt-4 mb-4 bg-[#FAF9E1] p-4">
        <h1 className="text-3xl text-center">
          4 Reasons Why Trekkers of Bengaluru?
        </h1>
        <hr className="border-1 mt-2 border-[#7f7eff] mx-8 " />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
          <div className="grid">
            <div className="flex gap-2">
              <img
                src="https://trekkersofbengaluru.co.in/Static/Images/Icons/icon1.png"
                className="w-24 h-24"
              />
              <h1 className="font-bold my-6">
                Receive expert guidance before your trek even begins
              </h1>
            </div>
            <p>
              Get personalised support from our expert Experience Coordinators.
              From registration to departure, they'll prepare you every step of
              the way.
            </p>
          </div>
          <div className="grid mt-3 lg:mt-0">
            <div className="flex gap-2">
              <img
                src="https://trekkersofbengaluru.co.in/Static/Images/Icons/icon2.png"
                className="w-24 h-24"
              />
              <h1 className="font-bold my-6">
                Join any group, they are all women-friendly groups
              </h1>
            </div>
            <p>
              With around 30% of our trekkers being women, all women, including
              those traveling solo are comfortable to join any of our groups.
            </p>
          </div>
          <div className="grid mt-3 lg:mt-0">
            <div className="flex gap-2">
              <img
                src="https://trekkersofbengaluru.co.in/Static/Images/Icons/icon3.png"
                className="w-24 h-24"
              />
              <h1 className="font-bold my-6">Meet like-minded trekkers</h1>
            </div>
            <p>
              Trekkers of Bengaluru carries with it a strong spirit of trekking,
              one that comes with fitness, minimalism, mindfulness and a deep
              love for nature.
            </p>
          </div>
          <div className="grid mt-3 lg:mt-0">
            <div className="flex gap-2">
              <img
                src="https://trekkersofbengaluru.co.in/Static/Images/Icons/icon4.png"
                className="w-24 h-24"
              />
              <h1 className="font-bold my-6">Leave Treks better</h1>
            </div>
            <p>
              Our commitment to mindful trekking means not just leaving no trace
              but actively cleaning up the treks. With us, you're contributing
              positively to the environment.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-3xl">Frequently asked questions</h1>
        <hr className="border-1 mt-2 border-[#7f7eff] mx-8 " />
        <div className="grid grid-cols-1 gap-2 mt-2">
          {faq.length > 0 ? (
            faq.map((item, index) => (
              <div key={item.id} className="mb-2 border rounded-lg">
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full p-4 text-left bg-gray-100 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <span>{openIndex === index ? "-" : "+"}</span>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-screen p-4 bg-white"
                      : "max-h-0"
                  }`}
                >
                  {openIndex === index && (
                    <p className="text-gray-600">{item.answer}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No FAQs available.</p>
          )}
        </div>
      </div>
      <MemoriesGallery />
    </div>
  );
};

// Place gallery for the destination page
const PlaceGallery = ({ destination }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [];

  // Extracting all images
  destination.tour_itinerary.forEach((itinerary) => {
    itinerary.places.forEach((place) => {
      images.push(place.image);
    });
  });

  // Automatic slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative">
      <div className="flex justify-center items-center w-full h-[40vh] md:h-[60vh] bg-gray-100 overflow-hidden">
        <div
          className="carousel-inner flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 w-full h-full "
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Calendar component
const Calendar = ({ destination }) => {
  const [upcomingDates, setUpcomingDates] = useState([]);
  console.log(destination.tour_dates);
  useEffect(() => {
    const currentDate = new Date();
    const upcoming = destination.tour_dates
      .map((dates) => {
        const startDate = new Date(dates.start_date);
        console.log(startDate);
        if (startDate > currentDate) {
          return { ...dates, startDate };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => a.startDate - b.startDate)
      .slice(0, 4);
    setUpcomingDates(upcoming);
  }, [destination]);
  console.log(upcomingDates);
  const calculateDaysDiff = (startDate) => {
    const currentDate = new Date();
    const timeDiff = startDate - currentDate;
    return Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  };
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options); // Use 'en-GB' for DD-MMM-YYYY
  };

  return (
    <div className="tour-dates border border-[#7f7eff] border-2 rounded-lg p-4 md:h-full mt-4 md:mt-0">
      <h2 className="text-2xl text-center mb-2 ">Upcoming Tours</h2>
      <div className="tour-dates-list">
        {upcomingDates.length > 0 ? (
          upcomingDates.map((tour) => {
            const daysDiff = calculateDaysDiff(tour.startDate);
            const isEarlyBird = daysDiff > 5;

            return (
              <div
                key={tour.id}
                className="tour-date-item p-4 mb-4 border border-[#7f7eff] rounded-lg"
              >
                <h3>
                  {`${formatDate(tour.start_date)} to ${formatDate(
                    tour.end_date
                  )}`}
                </h3>
                <div className="price-info">
                  {isEarlyBird ? (
                    <div>
                      <span className="early-bird-price text-lg font-bold text-red-500">
                        ₹{tour.earlyBirdPrice}
                      </span>
                      <span className="regular-price text-sm text-gray-500 line-through">
                        ₹{tour.basePrice}
                      </span>
                    </div>
                  ) : (
                    <span className="regular-price text-lg font-bold">
                      ₹{tour.basePrice}
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            Hmm.... we don't have any dates right now for this tour
            <span className="text-xl">&#128532;</span>
          </p>
        )}
      </div>
    </div>
  );
};

// Destination Page
const DestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAccordions, setOpenAccordions] = useState({});
  useEffect(() => {
    fetch(`https://web-production-683a.up.railway.app/tours/tour/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDestination(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }, [id]);
  if (loading) {
    return <LoadingScreen />;
  }
  if (!destination) {
    return <div>Sorry, something went wrong, please check back again!!</div>; // If no destination is found, show an error message
  }
  function getRandomNumber() {
    return (Math.random() + 4).toFixed(1);
  }
  const toggleAccordion = (day) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [day]: !prevState[day], // Toggle the specific accordion
    }));
  };
  const inclusions = destination.tour_info[0].inclusions || [];
  const exclusions = destination.tour_info[0].exclusions || [];
  const pickupPoints = destination.tour_info[0].pickup_points || [];

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-3 p-2 rounded-lg text-center md:text-start">
        {destination.title}
      </h1>
      <div className="grid grid-cols-1 md:flex gap-2">
        <div className="md:w-[70%]">
          <PlaceGallery destination={destination} />
          <Rating
            value={getRandomNumber()}
            color="#7f7eff"
            text={`(${getRandomNumber()})`}
          />
        </div>
        <div className="md:w-[30%]">
          <Calendar destination={destination} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:flex gap-2 mt-4">
        <div className="md:w-[70%]">
          <h1 className="text-3xl">Itinerary</h1>
          <hr className="border-1 mt-2 border-[#7f7eff]" />
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: destination.description }}
          ></div>
          <div className="accordion-container mt-2">
            {destination.tour_itinerary.map((dayItinerary) => (
              <div
                key={dayItinerary.id}
                className="accordion-item border border-[#7f7eff] rounded-lg mb-4"
              >
                <button
                  onClick={() => toggleAccordion(dayItinerary.day)}
                  className="accordion-header w-full p-4 bg-gray-100 rounded-lg font-semibold flex justify-between items-center"
                >
                  <span>{`Day ${dayItinerary.day}`}</span>
                  <i
                    className={`fa-solid fa-chevron-down right-1 transform transition-transform duration-300 ${
                      openAccordions[dayItinerary.day] ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {openAccordions[dayItinerary.day] && (
                  <div className="accordion-content p-4 bg-white">
                    {dayItinerary.places.map((place) => (
                      <div
                        key={place.id}
                        className="place-item mb-4 md:flex md:items-center md:gap-4"
                      >
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-48 object-cover rounded-md mb-2 md:w-48 md:h-48"
                        />
                        <div>
                          <h3 className="text-lg font-bold mb-2">
                            {place.name}
                          </h3>
                          <p className="text-gray-700">{place.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2">
            <h1 className="text-3xl">Inclusions & Exclusion</h1>
            <hr className="border-1 mt-2 border-[#7f7eff]" />
            <p className="mt-4">
              When you join us on our tours, you can expect an unforgettable
              adventure filled with cozy accommodations, delicious meals, and
              expert guides who are ready to sprinkle some humor into your
              journey! We’ll whisk you away in comfortable transportation to all
              the exciting activities we’ve planned. However, while we cover a
              lot of ground, you’ll need to take care of your flights and any
              personal expenses like those irresistible souvenirs you’ll want to
              snag along the way. Check the details to know whats included and
              excluded during the trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 w-full">
              <div className="border rounded-lg p-6 h-full">
                <h2 className="text-xl text-center">Inclusions</h2>
                {inclusions.length > 0 ? (
                  inclusions.map((inclusion) => (
                    <div
                      key={inclusion.id}
                      className="flex items-center gap-2 mt-4 mb-2"
                    >
                      <span
                        className="text-xl text-green-600"
                        dangerouslySetInnerHTML={{ __html: inclusion.icon }}
                      ></span>
                      <span className="text-lg">{inclusion.name}</span>
                    </div>
                  ))
                ) : (
                  <div>No inclusions available</div>
                )}
              </div>
              <div className="border rounded-lg p-6 mt-2 md:mt-0 md:ml-2 h-full">
                <h2 className="text-xl text-center">Exclusions</h2>
                {exclusions.length > 0 ? (
                  exclusions.map((exclusion) => (
                    <div
                      key={exclusion.id}
                      className="flex items-center gap-2 mt-4 mb-2"
                    >
                      <span
                        className="text-xl text-red-600"
                        dangerouslySetInnerHTML={{ __html: exclusion.icon }}
                      ></span>
                      <span className="text-lg">{exclusion.name}</span>
                    </div>
                  ))
                ) : (
                  <div>No exclusions available</div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-3xl">Pick-up Points</h1>
            <hr className="border-1 mt-2 border-[#7f7eff]" />
            <div className="p-6">
              {pickupPoints.map((point) => (
                <div key={point.id} className="flex gap-2 mb-2">
                  <span>
                    <img
                      src="static/icons/googleMaps.webp"
                      className="h-10 w-10"
                    />
                  </span>
                  <a
                    href={`${point.url}`}
                    className="text-blue-500 underline text-xl"
                  >
                    {point.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[30%] md:hidden">
          <Calendar destination={destination} />
        </div>
      </div>
    </div>
  );
};

// Main app
const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://web-production-683a.up.railway.app/tours/tour/")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  if (loading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div className="">
      <ReactRouterDOM.HashRouter>
        <Navbar destinations={destinations} />
        <MobileNavbar destinations={destinations} />
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage {...props} destinations={destinations} />
          )}
        />
        <Route
          path="/destination/:id"
          exact
          render={(props) => <DestinationPage {...props} />}
        />
        <Footer />
      </ReactRouterDOM.HashRouter>
    </div>
  );
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
