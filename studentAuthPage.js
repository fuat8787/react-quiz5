import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function StudentAuthPage({filteredData,loginStudent,getStudentId,getStudentPassword}) {
    return (
        <div>
            
            <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1 authH1'>ÖĞRENCİ GİRİŞİ</h1>

                        <div className="containerLogin teacherContainer">

                            <p className='inputText'>Öğrenci Numarası:</p>

                            <input type="text" onChange={getStudentId} className='form-control' style={{width: '100%'}} placeholder='  ' name="" id="" />

                            <p className='inputText mt-2'>Şifre:</p>

                            <input type="password" onChange={getStudentPassword} className='form-control' style={{width: '100%'}} placeholder='  ' name="" id="" />

                            {filteredData.length != 0 && <Link to='studentDashboard'><button type='button' onClick={loginStudent} className='startBtn loginBtn'>Giriş</button></Link>}
                            
                            {filteredData.length == 0 && <button type='button' onMouseOver={loginStudent} onClick={()=>{alert('Invalid Credentials')}} className='startBtn loginBtn'>Giriş</button>}

                            <Link to='/'>

                                <button type='button' className='startBtn loginBtn studentBtn'>Hoca mısın?</button>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}
