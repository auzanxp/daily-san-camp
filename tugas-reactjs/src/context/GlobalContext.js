import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext()
export const GlobalProvider = props => {
    const [student, setStudent] = useState(null);
    const [input, setInput] = useState({
        name: "",
        course: "",
        score: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentId, setCurrentId] = useState(-1)

    const getStudent = async () => {
        try {
            const response = await axios.get(
                "https://backendexample.sanbercloud.com/api/student-scores"
            );
            setStudent(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleIndexScore = (nilai) => {
        if (nilai >= 80) {
            return "A";
        } else if (nilai >= 70 && nilai < 80) {
            return "B";
        } else if (nilai >= 60 && nilai < 70) {
            return "C";
        } else if (nilai >= 50 && nilai < 60) {
            return "D";
        } else {
            return "E";
        }
    };

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, course, score } = input;

        if (currentId === -1) {
            axios.post("https://backendexample.sanbercloud.com/api/student-scores", {
                name,
                course,
                score
            })
                .then(() => {
                    setIsLoading(true);
                })
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
                name,
                course,
                score
            })
                .then(() => {
                    setIsLoading(true);
                })
        }

        setCurrentId(-1)

        setInput({
            name: "",
            course: "",
            score: ""
        });
    };

    const handleDelete = (e) => {
        let idData = parseInt(e.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then(() => {
                setIsLoading(true)
            })
    }

    const handleEditData = (e) => {
        let idData = parseInt(e.target.value)
        setCurrentId(idData)
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((response) => {
                let data = response.data
                setInput({
                    name: data.name,
                    course: data.course,
                    score: data.score
                })
            })
    }

    let datas = {
        student,
        setStudent,
        input,
        setInput,
        isLoading,
        setIsLoading,
        currentId,
        setCurrentId
    }
    let method = {
        handleIndexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEditData,
        getStudent
    }

    return (
        <GlobalContext.Provider value={{ datas, method }}>
            {props.children}
        </GlobalContext.Provider>
    )
}