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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam justo nec justo lacinia, vel ullamcorper nibh tincidunt.
        </p>
      </div>

      <div
        className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
        style={{ display: openTab === 2 ? "block" : "none" }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">
          My Project
        </h2>
        <p className="text-gray-700">
          Proin non velit ac purus malesuada venenatis sit amet eget lacus.
          Morbi quis purus id ipsum ultrices aliquet Morbi quis.
        </p>
      </div>

      <div
        className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
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
      </div>
    </div>
  );
};

export default Tabs;
