import React from 'react'

const Tugas7 = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col mt-10 mr-10 bg-white rounded-lg shadow-lg md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div className="flex flex-col justify-start p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Card title</h5>
                    <p className="text-xs text-gray-600">2011</p>
                    <p className="mb-4 text-base text-gray-700">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <div className='flex'>
                        <p className="text-lg text-gray-700">Last updated 3 mins ago</p>
                        <span type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tugas7
