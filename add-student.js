import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function AddStudent({getStdBasicInfo, sumUpData}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
            
                <div className="row w-100">

                    <div className="col-20">

                        <div className="loginPage">

                        <h1 className='loginH1 authH1'>ÖĞRENCİ BİLGİLERİ</h1>

                            <div className="containerLogin teacherContainer">

                                <p className='inputText'>Öğrenci Numarası:</p>

                                <input type="text" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder='  ' name="stdId" id="" />

                                <p className='inputText mt-2'>Öğrenci Şifresi:</p>

                                <input type="password" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder='  ' name="stdPass" id="" />

                                <p className='inputText mt-2'>Öğrenci Adı:</p>

                                <input type="text" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder="  " name="stdName" id="" />

                                <Link to='addMarks'>

                                    <button type='button' className='startBtn loginBtn'>Sonraki</button>

                                </Link>

                                <Link to='teacherDashboard'>

                                    <button type='button' className='startBtn loginBtn backBtn'>Önceki</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
