import React from "react";
import { doctorInfo } from '../../assets/data';
import { Popover } from "@headlessui/react";

export default function Home() {
  const info = doctorInfo;
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
            </Popover>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Find and book the</span>{" "}
                  <span className="block text-teal-600 xl:inline">
                    best doctors
                  </span>{" "}
                  <span className="block xl:inline">near you</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Search for doctors, hospitals, specialties, services, diseases,
                  medicines and more.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div>
                    <form className="flex items-center">
                      <label for="voice-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="voice-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-40 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                          placeholder=""
                          required
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center p-3 ml-2 text-sm font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 mr-2 -ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className='bg-teal-50 shadow-md p-10'>
          <div className="p-5">
            <h1 className="text-2xl font-bold text-teal-600">Doctors</h1>
            <p>Doctors with exceptional services and patients satisfaction.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-5">
            {info.map((items, key) => (
              <div>
                <img
                  className="w-40 h-40 rounded-full mx-10 mt-8"
                  src={items.img}
                  alt=""
                />
                <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-white" key={key}>
                  <div className="p-4 flex flex-col items-center">
                    <h4 className="text-lg">
                      {items.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {items.experience} year(s) experience
                    </p>
                    <p className="text-sm text-gray-600">
                      {items.profession}
                    </p>
                    <div className="grid grid-cols-2 mb-3 mt-3">
                      <div className="flex flex-col items-center justify-center">
                        <p className="mt-1">
                          {items.reviews}
                        </p>
                        <p className="text-sm text-gray-600">
                          Patient Reviews
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="mt-1">
                          {items.satisfaction}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Satisfaction Rate
                        </p>
                      </div>
                    </div>
                    <button className="shadow px-4 py-2 inline-flex items-center p-3 ml-2 text-sm font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='shadow-md'>
          <div className="grid grid-cols-2 p-5">
            <div className='flex flex-row shadow-md border-gray-200 border-2 m-5'>
              <img
                className='w-60 h-60 object-cover'
                src={require('../../assets/images/a.jpg')}
                alt=""
              />
              <div className='flex flex-col justify-center px-8'>
                <h1 className='text-2xl font-semibold py-2'>Doctor on Call</h1>
                <p>Connect through video consultation with verified general practitioner's and specialists.</p>
                <button className='mt-8 px-4 py-2 my-2 shadow text-sm items-center font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700'>Call Now</button>
              </div>
            </div>
            <div className='flex flex-row shadow-md border-gray-200 border-2 m-5'>
              <img
                className='w-60 h-60 object-cover'
                src={require('../../assets/images/b.jpg')}
                alt=""
              />
              <div className='flex flex-col justify-center px-8'>
                <h1 className='text-2xl font-semibold py-2'>Hospital at Home</h1>
                <p>Book hospital services online including doctor visits, nursing care and rehabilitation services.</p>
                <button className='mt-8 px-4 py-2 my-2 shadow text-sm items-center font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700'>Book Services Now</button>
              </div>
            </div>
            <div className='flex flex-row shadow-md border-gray-200 border-2 m-5'>
              <img
                className='w-60 h-60 object-cover'
                src={require('../../assets/images/c.jpg')}
                alt=""
              />
              <div className='flex flex-col justify-center px-8'>
                <h1 className='text-2xl font-semibold py-2'>Online Pharmacy</h1>
                <p>Get authentic medicines delivered at your doorsteps.</p>
                <button className='mt-8 px-4 py-2 my-2 shadow text-sm items-center font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700'>Order Medicines Now</button>
              </div>
            </div>
            <div className='flex flex-row shadow-md border-gray-200 border-2 m-5'>
              <img
                className='w-60 h-60 object-cover'
                src={require('../../assets/images/d.jpg')}
                alt=""
              />
              <div className='flex flex-col justify-center px-8'>
                <h1 className='text-2xl font-semibold py-2'>Online Laboratory</h1>
                <p>Get lab tests done with samples collected from the comfort of home.</p>
                <button className='mt-8 px-4 py-2 my-2 shadow text-sm items-center font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700'>Book Tests Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center p-3 my-3 shadow-md'>
            <h1 className='text-2xl font-semibold py-2 text-teal-600'>Top Searched Symptoms</h1>
            <img
              className="w-auto object-cover h-full"
              src={require('../../assets/images/mid-section-4.png')}
              alt=""
            />
            <button className="px-4 py-2 text-sm items-center shadow font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700">
              View All Symptoms
            </button>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center p-3 my-3 shadow-md'>
            <h1 className='text-2xl font-semibold py-2 text-teal-600'>Top Searched Specialties</h1>
            <p>150+ Specialties Available</p>
            <img
              className="w-auto object-cover h-full"
              src={require('../../assets/images/mid-section-5.png')}
              alt=""
            />
            <button className="px-4 py-2 text-sm items-center shadow font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700">
              View All Specialties
            </button>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center p-3 my-3 shadow-md'>
            <h1 className='text-2xl font-semibold py-2 text-teal-600'>Top Searched Diseases</h1>
            <p>Let's Find The <span className='font-semibold'>Right Doctor</span> For Your Disease!</p>
            <img
              className="w-auto object-cover h-full"
              src={require('../../assets/images/mid-section-6.png')}
              alt=""
            />
            <button className="px-4 py-2 text-sm items-center shadow font-medium text-white rounded-lg border bg-teal-600 border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700">
              View All Diseases
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-full object-cover h-full"
            src={require('../../assets/images/mid-section-1.png')}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-full"
            src={require('../../assets/images/mid-section-2.png')}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-full"
            src={require('../../assets/images/mid-section-3.png')}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
