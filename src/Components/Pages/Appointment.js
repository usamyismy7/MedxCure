import React from 'react';

export default function Appointment() {
    return (
        <div className='py-10 bg-gray-50'>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
                <div>
                    <h3 className="text-4xl font-semibold text-center">
                        Doctor Appointment Request Form
                    </h3>
                    <p className='text-center'>Fill the form below and we will get back soon to you for more updates and plan your appointment.</p>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-row items-start">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='First Name'
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-5"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Last Name'
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='myname@example.com'
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="birthday"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Date of Birth
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="date"
                                    name="birthday"
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row justify-between">
                            <div className="flex flex-col items-start">
                                <label
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Gender
                                </label>
                                <select className="block text-sm font-medium text-gray-700 undefined pr-20 p-3" name="gender" id="gender">
                                    <option value="">Please Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-start">
                                <label className="block text-sm font-medium text-gray-700 undefined" for="phone">Phone Number:</label>
                                <input className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-10" type="tel" id="phone" name="phone" placeholder=' (000)000-0000' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Address
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="address"
                                    name="address"
                                    placeholder='House, Street, City, State, Zip'
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="specialist"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Which Specialist do you want to make an appointment for?
                            </label>
                            <select className="block text-sm font-medium text-gray-700 undefined pr-20 mb-4 p-3" name="specialist" id="specialist">
                                <option value="">Please Select</option>
                                <option value="Dermatologists">Dermatologists</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Family Physicians">Family Physicians</option>
                                <option value="Neurologists">Neurologists</option>
                                <option value="Gynecologists">Gynecologists</option>
                                <option value="Psychiatrists">Psychiatrists</option>
                                <option value="Urologists">Urologists</option>
                                <option value="Plastic Surgeons">Plastic Surgeons</option>
                                <option value="Child Specialist">Child Specialist</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="appointment"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Preferred Appointment Date
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="time"
                                    name="time"
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 my-2"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 my-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600">
                                Submit Form
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
