import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas11 = () => {

    const [student, setStudent] = useState([])

    const getStudent = async () => {
        try {
            const response = await axios.get('https://backendexample.sanbercloud.com/api/student-scores');
            setStudent(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    const handleIndexScore = (nilai) => {
        if (nilai >= 80) {
            return 'A';
        } else if (nilai >= 70 && nilai < 80) {
            return 'B'
        } else if (nilai >= 60 && nilai < 70) {
            return 'C';
        } else if (nilai >= 50 && nilai < 60) {
            return 'D';
        } else {
            return 'E';
        }
    }

    useEffect(() => {
        getStudent()
    }, [])

    return (
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
                    </tr>
                </thead>
                <tbody>
                    {student.length !== 0 && student.map((item, i) => {
                        return (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {i + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4">
                                    {item.course}
                                </td>
                                <td className="px-6 py-4">
                                    {item.score}
                                </td>
                                <td className="px-6 py-4">
                                    {handleIndexScore(item.score)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Tugas11;
