import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    const info = [
        {
            id: 1,
            name: 'Dr. Asem Jawaid',
            profession: 'General Physician',
            qualification: 'MBBS, MSc Human Nutrition & Dietetics, Certified Sports Nutritionist, ISSA',
            description1: 'Dr. Asem Jawaid is a qualified Nutritionist in Lahore with over 8 years in the food and nutrition field. With numerous qualifications, the doctor provides the best treatment for all nutrition plans and weight loss.',
            description2: 'Dr. Asem Jawaid has treated over 64 number of patients through MedxCure and has 96 number of reviews. You can book an appointment with doctor Dr. Asem Jawaid through MedxCure.',
            img: require('../../assets/images/doctors/a.jpg'),
            reviews: 96,
            experience: 8,
            satisfaction: 98,
            fees: 2000,
        },
        {
            id: 2,
            name: 'Dr. Umer Mushtaq',
            profession: 'Dermatologist',
            qualification: 'MBBS, FCPS (Dermatology), CAAAM(USA)',
            description1: 'Dr. Umer Mushtaq is a qualified Dermatologist in Lahore with over 15 years of experience in the field. With numerous qualifications, the doctor provides the best treatment for all Dermatologist related diseases.',
            description2: 'Dr. Umer Mushtaq has treated over 4292 patients through MedxCure and has 3684 reviews. You can book an appointment with Dr. Umer Mushtaq through MedxCure.',
            img: require('../../assets/images/doctors/g.png'),
            reviews: 3684,
            experience: 15,
            satisfaction: 97,
            fees: 5000,
        },
        {
            id: 3,
            name: 'Dr. Aafia Malik',
            profession: 'Psychiatrist',
            qualification: 'MBBS, FCPS (Psychiatry)',
            description1: 'Dr. Aafia Malik is a qualified Psychiatrist in Lahore with over 13 years in the field of psychiatry. With numerous qualifications, the doctor provides the best treatment for all psychological disorders.',
            description2: 'Dr. Aafia Malik has treated over 824 number of patients through MedxCure and has 647 number of reviews. You can book an appointment with doctor Dr. Aafia Malik through MedxCure.',
            img: require('../../assets/images/doctors/h.jpg'),
            reviews: 644,
            experience: 13,
            satisfaction: 96,
            fees: 3000,
        },
        {
            id: 4,
            name: 'Dr. Ayesha Khan',
            profession: 'Dentist',
            qualification: 'BDS, RDS, C-Endo, C-Ortho, C-implants',
            description1: 'Dr. Ayesha Khan practices through MedxCure. The Dentist has treated 246 patients and has 497 published reviews on MedxCure.',
            description2: 'Diseases treated by Dr. Ayesha Khan include: Cross Bites, Tooth Sensitivity, Cavities, and among others',
            img: require('../../assets/images/doctors/j.jpg'),
            reviews: 497,
            experience: 12,
            satisfaction: 100,
            fees: 1000,
        },
        {
            id: 5,
            name: 'Dr. Gohar Saeed',
            profession: 'Cardiologist',
            qualification: 'MBBS , Diplomate American Board Interventional Cardiology, Diplomate American Board Cardiovascular Disease',
            description1: 'Dr. Gohar Saeed is a qualified Cardiologist in Lahore with over 20 years in the field. With numerous qualifications, he provides the best treatment for all heart-related diseases.',
            description2: 'Dr. Gohar Saeed has over 461 through MedxCure and has 396 number of reviews. You can book his appointment now by calling MedxCure.',
            img: require('../../assets/images/doctors/d.png'),
            reviews: 396,
            experience: 20,
            satisfaction: 94,
            fees: 3500,
        },
    ]
    return (
        <div className="p-10 m-10">
            {/* Card 1 */}
            <div className=" w-full border lg:max-w-full lg:flex my-10 border-gray-400 lg:border-gray-400 bg-gray-100 rounded">
                <img className="w-40 h-40 rounded-full m-10" src={info[0].img} alt="Avatar" />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info[0].name}</div>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[0].profession}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[0].qualification}
                        </p>
                        <div className="text-base bg-teal-100 rounded my-2 p-2">
                            <p className="text-gray-700">{info[0].description1}</p>
                            <p className="text-gray-700">{info[0].description2}</p>
                        </div>
                        <p className="text-gray-700 text-base my-2 p-2 font-semibold"><span className="font-bold">Fee: </span>{"Rs."}{info[0].fees}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Reviews</p>
                            <p className="text-gray-900 font-semibold">{info[0].reviews}</p>
                        </div>
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Experience</p>
                            <p className="text-gray-900 font-semibold">{info[0].experience} year(s)</p>
                        </div>
                        <div className="flex flex-col text-sm items-center justify-center">
                            <p className="text-gray-600">Satisfaction</p>
                            <p className="text-gray-900 font-semibold">{info[0].satisfaction}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Video Consultation
                        </Link>
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Book Appointment
                        </Link>
                    </button>
                </div>
            </div>
            {/* Card 2 */}
            <div className=" w-full border lg:max-w-full lg:flex my-10 border-gray-400 lg:border-gray-400 bg-gray-100 rounded">
                <img className="w-40 h-40 rounded-full m-10" src={info[1].img} alt="Avatar" />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info[1].name}</div>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[1].profession}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[1].qualification}
                        </p>
                        <div className="text-base bg-teal-100 rounded my-2 p-2">
                            <p className="text-gray-700">{info[1].description1}</p>
                            <p className="text-gray-700">{info[1].description2}</p>
                        </div>
                        <p className="text-gray-700 text-base my-2 p-2 font-semibold"><span className="font-bold">Fee: </span>{"Rs."}{info[1].fees}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Reviews</p>
                            <p className="text-gray-900 font-semibold">{info[1].reviews}</p>
                        </div>
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Experience</p>
                            <p className="text-gray-900 font-semibold">{info[1].experience} year(s)</p>
                        </div>
                        <div className="flex flex-col text-sm items-center justify-center">
                            <p className="text-gray-600">Satisfaction</p>
                            <p className="text-gray-900 font-semibold">{info[1].satisfaction}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Video Consultation
                        </Link>
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Book Appointment
                        </Link>
                    </button>
                </div>
            </div>
            {/* Card 3 */}
            <div className=" w-full border lg:max-w-full lg:flex my-10 border-gray-400 lg:border-gray-400 bg-gray-100 rounded">
                <img className="w-40 h-40 rounded-full m-10" src={info[2].img} alt="Avatar" />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info[2].name}</div>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[2].profession}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[2].qualification}
                        </p>
                        <div className="text-base bg-teal-100 rounded my-2 p-2">
                            <p className="text-gray-700">{info[2].description1}</p>
                            <p className="text-gray-700">{info[2].description2}</p>
                        </div>
                        <p className="text-gray-700 text-base my-2 p-2 font-semibold"><span className="font-bold">Fee: </span>{"Rs."}{info[2].fees}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Reviews</p>
                            <p className="text-gray-900 font-semibold">{info[2].reviews}</p>
                        </div>
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Experience</p>
                            <p className="text-gray-900 font-semibold">{info[2].experience} year(s)</p>
                        </div>
                        <div className="flex flex-col text-sm items-center justify-center">
                            <p className="text-gray-600">Satisfaction</p>
                            <p className="text-gray-900 font-semibold">{info[2].satisfaction}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Video Consultation
                        </Link>
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Book Appointment
                        </Link>
                    </button>
                </div>
            </div>
            {/* Card 4 */}
            <div className=" w-full border lg:max-w-full lg:flex my-10 border-gray-400 lg:border-gray-400 bg-gray-100 rounded">
                <img className="w-40 h-40 rounded-full m-10" src={info[3].img} alt="Avatar" />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info[3].name}</div>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[3].profession}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[3].qualification}
                        </p>
                        <div className="text-base bg-teal-100 rounded my-2 p-2">
                            <p className="text-gray-700">{info[3].description1}</p>
                            <p className="text-gray-700">{info[3].description2}</p>
                        </div>
                        <p className="text-gray-700 text-base my-2 p-2 font-semibold"><span className="font-bold">Fee: </span>{"Rs."}{info[3].fees}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Reviews</p>
                            <p className="text-gray-900 font-semibold">{info[3].reviews}</p>
                        </div>
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Experience</p>
                            <p className="text-gray-900 font-semibold">{info[3].experience} year(s)</p>
                        </div>
                        <div className="flex flex-col text-sm items-center justify-center">
                            <p className="text-gray-600">Satisfaction</p>
                            <p className="text-gray-900 font-semibold">{info[3].satisfaction}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Video Consultation
                        </Link>
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Book Appointment
                        </Link>
                    </button>
                </div>
            </div>
            {/* Card 5 */}
            <div className=" w-full border lg:max-w-full lg:flex my-10 border-gray-400 lg:border-gray-400 bg-gray-100 rounded">
                <img className="w-40 h-40 rounded-full m-10" src={info[4].img} alt="Avatar" />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info[4].name}</div>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[4].profession}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                            {info[4].qualification}
                        </p>
                        <div className="text-base bg-teal-100 rounded my-2 p-2">
                            <p className="text-gray-700">{info[4].description1}</p>
                            <p className="text-gray-700">{info[4].description2}</p>
                        </div>
                        <p className="text-gray-700 text-base my-2 p-2 font-semibold"><span className="font-bold">Fee: </span>{"Rs."}{info[4].fees}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Reviews</p>
                            <p className="text-gray-900 font-semibold">{info[4].reviews}</p>
                        </div>
                        <div className="flex flex-col text-sm border-r-2 items-center justify-center">
                            <p className="text-gray-600">Experience</p>
                            <p className="text-gray-900 font-semibold">{info[4].experience} year(s)</p>
                        </div>
                        <div className="flex flex-col text-sm items-center justify-center">
                            <p className="text-gray-600">Satisfaction</p>
                            <p className="text-gray-900 font-semibold">{info[4].satisfaction}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Video Consultation
                        </Link>
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 m-6 rounded-lg flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <Link to="/appointment" className='truncate'>
                            Book Appointment
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
