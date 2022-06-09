import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function TeacherQuizQuestions({handleQuestion,saveData}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
                
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage quizPage">

                        <h1 className='loginH1 marksH1 quizQuestionH1'>SINAV GİRİŞİ</h1>

                            <div className="containerLogin teacherContainer containerQuestion" style={{marginTop: '2rem'}}>

                                <p className='inputText'>Soru:</p>

                                <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder='  ' name="soru" id="" />

                                <div className="flexDiv">

                                    <div className="leftSide w-50">

                                        <p className='inputText mt-2'>A:</p> 

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '90%'}} placeholder='  ' name="option1" id="" />

                                    </div>

                                    <div className="rightSide w-50">

                                        <p className='inputText mt-2'>B:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="  " name="option2" id="" />

                                    </div>

                                </div>

                                <div className="flexDiv">

                                    <div className="leftSide w-50">

                                        <p className='inputText mt-2'>C:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '90%'}} placeholder="  " name="option3" id="" />

                                    </div>

                                    <div className="rightSide w-50">

                                        <p className='inputText mt-2'>D:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="  " name="option4" id="" />

                                    </div>

                                </div>
                                
                                <p className='inputText mt-2'>Cevap:</p>

                                <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="  " name="correctOption" id="" />

                                <button type='button' onClick={saveData} className='startBtn loginBtn submitBtn'>Gönder</button>

                                <Link to='teacherDashboard'>

                                    <button type='button' className='startBtn loginBtn backBtn submitBtn'>Önceki</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
