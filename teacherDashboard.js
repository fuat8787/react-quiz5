import React,{useState} from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherData from './teacherData'
import { Link } from 'react-router-dom';

export default function TeacherDashboard() {

    const [Data, setData] = useState(...TeacherData)
    
    return (
        <div>

            <div className="container-fluid teacherDashboard">

                <div className="row">

                    <div className="col-12">

                        <h1 className='welcomH1'>Hoş Geldiniz</h1>

                    </div>

                </div>

                <div className="row d-flex justify-content-between">

                    <div className="col-lg-4 col-12 pl-0 pr-0 d-flex justify-content-center align-items-center">

                        <div className="teacherDetailsSide" style={{paddingTop: '5rem', boxSizing: 'border-box'}}>

                            <div className="teacherImage"></div>

                            <h1>{Data.name}</h1>

                            <h2>({Data.qualificaton})</h2>

                            <p>----</p>

                            <h3>{Data.universityName}</h3>

                            <div className='hrLine'></div>

                            <p>Ders Adı</p>

                            <h4>{Data.subjectTeach}</h4>

                        </div>

                    </div>

                    <div className="col-lg-7 col-12 pl-0 pr-0">

                        <div className="teacherOperationsSide">

                            <Link to='addStudent'>
                            
                                <button className='addBtn' type='button'> <i className='fas fa-plus' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Yeni Öğrenci Ekle</span></button>
                            
                            </Link>

                            <button className='addBtn' onClick={()=>{alert('Bakım Yapılıyor')}} type='button'><i className='fas fa-user-graduate' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Sınav Sonuçlarını Göster</span></button>

                            <Link to='quizQuestion'>

                                <button className='addBtn' type='button'><i className='fas fa-tasks' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Yeni Sınav Ekle</span></button>

                            </Link>                            

                            <Link to='/'>
                            
                                <button className='addBtn' type='button'><i className='fas fa-sign-out-alt' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Çıkış Yap</span></button>

                            </Link>
                                                    
                        </div>

                    </div>

                </div>


            </div>
            
        </div>
    )
}
