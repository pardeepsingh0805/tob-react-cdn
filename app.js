const { useEffect, useState } = React;

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
        <a href="/">
          <img
            src="https://trekkersofbengaluru.co.in/Static/Images/logo.png"
            className="h-14 w-14"
          />
        </a>
        <a href="/">
          <h1 className="text-2xl mt-3">Trekkers of Bengaluru</h1>
        </a>
      </div>
      <div className="flex gap-8 hidden md:flex ml-auto text-black mt-2">
        <a
          href="#"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
          onClick={toggleHref}
        >
          Home
        </a>
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
                <a
                  href="#"
                  key={index}
                  className="block px-4 py-2 text-sm hover:bg-[#FEF502]"
                  role="menuitem"
                >
                  {destination.title}
                </a>
              ))}
            </div>
          </div>
        )}
        <a
          href="#"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
          onClick={toggleHref}
        >
          About
        </a>
        <a
          href="#"
          className="px-2 py-2 hover:bg-[#FEF502] hover:rounded-lg transition-all"
          onClick={toggleHref}
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
    <div className="flex text-xl gap-4 w-full bg-[#FEF502] h-16 fixed left-0 right-0 bottom-0 md:hidden justify-between items-center p-4 z-10 ">
      <div className="flex justify-absolute w-full">
        <a href="/" className="flex flex-col items-center p-2 mx-1">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
        <button
          className="flex flex-col items-center p-2 mx-2"
          onClick={toggleDestination}
        >
          <i class="fa-solid fa-route"></i>
          <span>Destinations</span>
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center overflow-scroll">
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
                  <a
                    href="#"
                    key={index}
                    className="block px-4 py-2 hover:bg-[#FEF502]"
                    role="menuitem"
                    onClick={toggleHref}
                  >
                    {destination.title}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}
        <a className="flex flex-col items-center p-2 mx-2">
          <i class="fa-solid fa-address-card"></i>
          <span>About</span>
        </a>
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
            <a
              href="#"
              className=" w-full h-16 p-2 bg-[#7f7eff] text-white rounded-lg hover:bg-[#FEF502] hover:text-black text-xl"
            >
              view package
            </a>
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
      <Navbar destinations={destinations} />
      <MobileNavbar destinations={destinations} />
      <HomePage destinations={destinations} />
      <Footer />

      <h1>thiis form app</h1>
    </div>
  );
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
