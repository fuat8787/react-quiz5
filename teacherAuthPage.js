import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function TeacherAuthPage({getTeacherId,getTeacherPassword,teacherId,teacherPassword}) {
    return (
        <div>
            
            <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1 authH1'>HOCA GİRİŞİ</h1>

                        <div className="containerLogin teacherContainer">

                            <p className='inputText'>Hoca Numarası:</p>

                            <input type="text" onChange={getTeacherId} className='form-control' style={{width: '100%'}} placeholder='  ' name="" id="" />

                            <p className='inputText mt-2'>Şifre:</p>

                            <input type="password" onChange={getTeacherPassword} className='form-control' style={{width: '100%'}} placeholder='  ' name="" id="" />

                            {teacherId === 'abc123' && teacherPassword === 'abc123' && <Link to='teacherDashboard'><button type='button' className='startBtn loginBtn'>Giriş</button></Link>}

                            {(teacherId !== 'abc123' || teacherPassword !== 'abc123') && <button type='button' onClick={()=>{alert('Invalid Credentials')}} className='startBtn loginBtn'>Giriş</button>}

                            <Link to='studentLogin'>

                                <button type='button' className='startBtn loginBtn studentBtn'>Öğrenci misin?</button>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}
