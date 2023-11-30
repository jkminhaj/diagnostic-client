import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-white p-10 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6 text-center">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:border-blue-500"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
