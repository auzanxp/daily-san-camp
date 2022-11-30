import React from 'react'

const Tugas8 = (props) => {
    return (
        <div className='Container'>
            <div className='Card_head'>
                <h1>Data Diri Peserta Kelas Reactjs</h1>
            </div>
            <ul className='Text_bold'>
                <li>Nama Lengkap : {props.name}</li>
                <li>Email : {props.email}</li>
                <li>Batch Pelatihan : {props.batch}</li>
            </ul>
        </div>
    )
}

export default Tugas8
