import React from 'react'

const Contact = () => {
    return (
      <section className="bg-Landingpages-card-color border border-solid rounded-2xl border-Landingpages-gray p-4 my-8 w-[100%] md:w-[60%] flex justify-center item-center ">
        <div className="w-full mx-4">
          <h2 className="text-paragraph font-Urbanist font-bold mb-8 text-center">Contact Us</h2>
          <form className="flex flex-col gap-6 font-Poppins text-small">
            <div>
              <label className="block mb-2  font-medium  text-Landingpages-textPrimary">
                Name
              </label>
              <input
                type="text"
                className=" bg-Landingpages-layer2 w-full px-3 py-2  rounded-lg  outline-none focus:border focus:border-Landingpages-gray"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-Landingpages-textPrimary">
                Email
              </label>
              <input
                type="email"
                className=" bg-Landingpages-layer2 w-full px-3 py-2  rounded-lg  outline-none focus:border focus:border-Landingpages-gray"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-Landingpages-textPrimary">
                Message
              </label>
              <textarea
                className=" bg-Landingpages-layer2 w-full px-3 py-2  rounded-lg  outline-none focus:border focus:border-Landingpages-gray"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-white font-Urbanist bg-Landingpages-dark-bleu rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact