import React from "react";

export default function EmailSection() {
  return (
    <div className="bg-white px-4 rounded-lg w-full">
      {/* Email Small Navbar Section */}
      <div className="flex h-12 justify-between">
        <div className="flex items-center">
          <div className="flex">
            <div className="px-2  py-2 hover:bg-gray-100 rounded-sm hover:cursor-pointer">
              <input type="checkbox" />
            </div>
            <div className=" py-3 rounded-sm hover:bg-gray-100 hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div className="ml-5  hover:bg-gray-100 px-2 py-2 rounded-full hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-rotate-cw"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
          </div>

          <div className="hover:bg-gray-100 px-2 py-2 rounded-full hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </div>
        </div>
        <div className="flex items-center text-sm">
          <pre>1-50 of 90</pre>

          <div className="gap-2 hover:bg-gray-100 px-2 py-2 rounded-full ml-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>

          <div className="gap-2 hover:bg-gray-100 px-2 py-2 rounded-full mr-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          {/* have to change in Keybord icon */}
          <div className="py-2 px-2  rounded-md hover:bg-gray-100 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-clock"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>

          <div className="py-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Email List Item Section */}
      <div className="hover:cursor-pointer">
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Shivani Sharma</span>
          </div>

          <div className="flex justify-between items-center w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">3:30 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Shivani Sharma</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">3:30 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Jyotirmoy Bhattacharya</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">4:30 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Bikramjot Singh</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">10:45 AM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Jaskaran</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">12:18 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Sayed</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">2:00 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Mandeep Sidhu</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">4:05 PM</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Shivani Sharma</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 10</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Jyotirmoy Bhattacharya</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 10</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Shivani Sharma</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 9</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Sayed</span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 5</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>Mandeep Sidhu</span>
          </div>

          <div className="flex justify-between items-center  w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 4</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex hover:shadow-md">
          <div className="flex  items-center h-10 w-1/4">
            <input type="checkbox" />
            <div className="flex mx-2 px-2 py-2 rounded-full items-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span>SahebPret </span>
          </div>

          <div className="flex justify-between items-center  w-3/4 ml-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="flex justify-end w-44 text-sm">
              <div className=" hover:hidden">Oct 4</div>
            </div>
          </div>
        </div>
        <hr />
        {/* Email List Item Section End*/}
      </div>
    </div>
  );
}
