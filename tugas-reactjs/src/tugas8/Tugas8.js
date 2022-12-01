import React from 'react'

const Tugas8 = (props) => {
    return (
        <div className='Container'>
            <div className='Card_head'>
                <h1>Data Diri Peserta Kelas Reactjs</h1>
            </div>
            <ul>
                <li><b>Nama Lengkap :</b> {props.name}</li>
                <li><b>Email :</b> {props.email}</li>
                <li><b>Batch Pelatihan :</b> {props.batch}</li>
            </ul>
        </div>
    )
}

export default Tugas8
