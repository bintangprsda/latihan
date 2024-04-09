import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200/80 bg-white p-4">
      {/* Avatar Container */}
      <div className="relative mb-4">
        {/* User Avatar */}
        <img
          className="rounded-md object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/testlab-8e47b.appspot.com/o/users%2F001?alt=media&token=e91d53f2-e8c1-4c5b-8771-91e247002bd8w=150&h=150"
          alt="User"
          style={{ maxWidth: "170px", maxHeight: "170px" }}
        />
      </div>

      {/* Username */}
      <a
        href="https://github.com/EgoistDeveloper/"
        target="_blank"
        className="text-lg font-semibold mb-2"
      >
        Bintang Persada Alam
      </a>

      {/* User Verified */}
      <svg
        className="h-5 fill-blue-400 mb-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
      </svg>

      {/* Badges (Role, Location, Email) */}
      <div className="flex flex-wrap justify-center mb-4">
        {/* Badge Role */}
        <div className="flex items-center mr-4 mb-2">
          <svg
            className="mr-2 h-4 w-4 fill-gray-500/80"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
          </svg>
          <div className="text-xs text-gray-400/80 hover:text-gray-400">
            Fullstack Developer
          </div>
        </div>

        {/* Badge Location */}
        <div className="flex items-center mr-4 mb-2">
          <svg
            className="mr-2 h-4 w-4 fill-gray-500/80"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
          </svg>
          <div className="text-xs text-gray-400/80 hover:text-gray-400">
            Tangerang, Banten
          </div>
        </div>

        {/* Badge Email */}
        <div className="flex items-center mr-4 mb-2">
          <svg
            className="mr-2 h-4 w-4 fill-gray-500/80"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
          </svg>
          <div className="text-xs text-gray-400/80 hover:text-gray-400">
            Bintangprsda@gmail.com
          </div>
        </div>
      </div>

      {/* Mini Cards (Comments, Projects, Downloads) */}
      <div className="flex flex-wrap justify-center">
        {/* Comments */}
        <a
          href="#"
          className="flex flex-col items-center justify-center w-32 h-24 rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80 mr-4 mb-2"
        >
          <div className="flex items-center justify-center">
            <svg
              className="mr-2 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
            </svg>
            <span className="font-bold text-gray-600">4.6K</span>
          </div>
          <div className="text-xs text-gray-400">Comments</div>
        </a>

        {/* Projects */}
        <a
          href="#"
          className="flex flex-col items-center justify-center w-32 h-24 rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80 mr-4 mb-2"
        >
          <div className="flex items-center justify-center">
            <svg
              className="mr-2 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.2 6 6.8 6 7.5V7.7L7.6 19.7C7.7 20.3 8.3 20.8 8.9 20.8C9.2 20.8 9.4 20.8 9.7 20.7L17.2 17.6C17.9 17.4 18.3 16.8 18.3 16.1V16L16.7 4C16.6 3.4 16.1 2.9 15.3 2.8M23 8V16C23 16.6 22.6 17 22 17H21V19C21 19.6 20.6 20 20 20H19V22H17V20H14V18H22V16H19V8H21C21.6 8 22 8.4 22 9V12.2L23 8Z" />
            </svg>
            <span className="font-bold text-gray-600">98</span>
          </div>
          <div className="text-xs text-gray-400">Projects</div>
        </a>

        {/* Downloads */}
        <a
          href="#"
          className="flex flex-col items-center justify-center w-32 h-24 rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80 mr-4 mb-2"
        >
          <div className="flex items-center justify-center">
            <svg
              className="mr-2 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,21H19V19H5M19,9H16V3H8V9H5L12,16L19,9Z" />
            </svg>
            <span className="font-bold text-gray-600">21K</span>
          </div>
          <div className="text-xs text-gray-400">Downloads</div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
