import React, { useState } from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="max-w-md mx-auto p-3">
      <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 1 ? "bg-blue-600 text-white" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 2 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Project
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 3 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Design
        </button>
      </div>

      <div
        className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
        style={{ display: openTab === 1 ? "block" : "none" }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">About Me</h2>
        <p className="text-gray-700">
          <strong>Name :</strong> Bintang Persada Alam
          <br />
          <strong>Work in:</strong> Administration Laboratory
          <br />
          <strong>Address:</strong> Tangerang - Banten, Indonesia
          <br />
          <strong>Tittle:</strong> S1 Teknik Informatika, Universitas Pelita
          Bangsa
        </p>

        {/* Map Card */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          {/* Google Maps Embed */}
          <iframe
            title="Tangerang Map"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5089274471794!2d106.6296632142653!3d-6.211540995495457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a25a0e4e6dce1%3A0x87514491d9701e4f!2sTangerang%2C%20Kota%20Tangerang%2C%20Banten!5e0!3m2!1sen!2sid!4v1649423615973!5m2!1sen!2sid"
            allowFullScreen // Just omitting the value will default to true
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-rose-600"
        style={{ display: openTab === 2 ? "block" : "none" }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">
          My Project
        </h2>
        <p className="text-gray-700">
          Proin non velit ac purus malesuada venenatis sit amet eget lacus.
          Morbi quis purus id ipsum ultrices aliquet Morbi quis.
        </p>

        {/* Card */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          {/* Image */}
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/400x250" // Ganti dengan URL gambar projek Anda
            alt="Project Image"
          />

          {/* Button */}
          <div className="p-4 bg-gray-100">
            <a
              href="https://www.example.com" // Ganti dengan URL alamat web projek Anda
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <div
        className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-600"
        style={{ display: openTab === 3 ? "block" : "none" }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">
          Design Collection
        </h2>
        <p className="text-gray-700">
          Fusce hendrerit urna vel tortor luctus, nec tristique odio tincidunt.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae.
        </p>

        {/* First Card */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          {/* Image */}
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/400x250" // Ganti dengan URL gambar koleksi 1
            alt="Design Collection 1"
          />

          {/* Button */}
          <div className="p-4 bg-gray-100">
            <a
              href="https://www.example.com" // Ganti dengan URL alamat web koleksi 1
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Collection
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          {/* Image */}
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/400x250" // Ganti dengan URL gambar koleksi 2
            alt="Design Collection 2"
          />

          {/* Button */}
          <div className="p-4 bg-gray-100">
            <a
              href="https://www.example.com" // Ganti dengan URL alamat web koleksi 2
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
