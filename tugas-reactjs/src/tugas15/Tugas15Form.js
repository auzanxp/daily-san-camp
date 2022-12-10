import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Tugas13 = () => {
    const {IdData} = useParams()
    const { datas, method } = useContext(GlobalContext)
    let {
        input,
        setInput,
        isLoading
    } = datas
    let {
            handleInput,
            handleSubmit,
        } = method
    
    useEffect(() => {
        if (IdData !== undefined) {
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`)
            .then((response) => {
                let data = response.data
                setInput({
                    name: data.name,
                    course: data.course,
                    score: data.score
                })
            })
        }
    }, []);

    return (
        <>
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
