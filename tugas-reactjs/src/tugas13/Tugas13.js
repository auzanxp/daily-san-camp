import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Tugas13 = () => {
    const { datas, method } = useContext(GlobalContext)
    let {
        student,
        input,
        isLoading
    } = datas
    let {
            handleIndexScore,
            handleInput,
            handleSubmit,
            handleDelete,
            handleEditData,
            getStudent
        } = method
    
    useEffect(() => {
        getStudent();
    }, [isLoading]);

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-3/4 m-auto text-sm text-left text-gray-500 shadow-xl mt-7 dark:text-gray-400">
                    <thead className="text-xs text-white bg-purple-500 upperase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                N0
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NAMA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                MATA KULIAH
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NILAI
                            </th>
                            <th scope="col" className="px-6 py-3">
                                INDEX NILAI
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {student !== null &&
                            student.map((item, i) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.course}</td>
                                        <td className="px-6 py-4">{item.score}</td>
                                        <td className="px-6 py-4">
                                            {handleIndexScore(item.score)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                type="button"
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                value={item.id}
                                                onClick={handleEditData}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                value={item.id}
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center">
                <div className="mt-10 mb-14 xl:w-3/4">
                    <form onSubmit={handleSubmit}>
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Nama :
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Mata Kuliah :
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            name="course"
                            value={input.course}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Nilai :
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="number"
                            name="score"
                            value={input.score}
                            onChange={handleInput}
                            required
                        />
                        <button
                            type="submit"
                            className="inline-block mt-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            {isLoading ? "Submiting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Tugas13;
