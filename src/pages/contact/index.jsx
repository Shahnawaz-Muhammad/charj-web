import { useState } from "react";

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", contactData);
    setContactData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="flex justify-center py-20">
      <div className="md:w-2/3 w-full">
        <div className="bg-white rounded-lg shadow-lg text-center p-4">
          <div className="p-4">
            <h4 className="text-2xl">
              Engage With Us and See Positive Results
            </h4>
            <div className="pt-7">
              <p className="text-lg">
                Every business needs a sound operating plan to thrive.
              </p>
              <p className="text-lg">
                Contact us; together we will achieve your eMobility goals and
                objectives.
              </p>
            </div>
            <h4 className="text-2xl pt-9">Charj, llc</h4>
            <p className="text-lg pt-7">Hartford, Connecticut, United States</p>
            <p className="text-lg pt-10">
              The Other "C" State Leading the Evolution of eMobility
            </p>
          </div>
          <div className="flex justify-center p-4">
            <form onSubmit={handleFormSubmit}>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    for="name"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Name*
                  </label>
                </div>
              </div>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    for="email"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email*
                  </label>
                </div>
              </div>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.phone}
                    onChange={handleInputChange}
                  />
                  <label
                    for="phone"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div class="w-full px-2 mb-4">
                <div class="relative">
                  <textarea
                    id="interest"
                    name="message"
                    class="border border-gray-400  block w-full py-2 px-4 placeholder-gray-700 rounded-md text-gray-700 focus:outline-none"
                    rows="8"
                    placeholder="I'm interested in*"
                    value={contactData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col  items-center gap-5 text-gray-500">
                <button className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold px-6 py-3 border border-black rounded-md">
                  SEND
                </button>

                <p className="mb-5">
                  This site is protected by reCAPTCHA and the Google
                  <span className="text-gray-700">
                    {" "}
                    Privacy Policy
                  </span> and{" "}
                  <span className="text-gray-700">Terms of Service </span>
                  apply.
                </p>

                <p>
                  118 North Beacon Street, Hartford, Connecticut 06105, United
                  States
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
