import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function StudentMarks({getStdMarks,sumUpData}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
            
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage">

                        <h1 className='loginH1 marksH1'>Öğrenci Notları girin</h1>

                            <div className="containerLogin teacherContainer">

                                <p className='inputText'>Matematik:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder=' ' name="math" id="" />

                                <p className='inputText mt-2'>Fizik:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder=' ' name="comp" id="" />

                                <p className='inputText mt-2'>Elektrik:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder=" " name="phy" id="" />

                                <p className='inputText mt-2'>Elektronik:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder=" " name="che" id="" />

                                <Link to='teacherDashboard'>

                                    <button type='button' onClick={sumUpData} className='startBtn loginBtn'>Gönder</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
