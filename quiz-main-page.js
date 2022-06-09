import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuizMainPage() {
    return (
        <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1'>Sınav uygulaması</h1>

                        <div className="containerLogin">

                            <h2>Sınava Gir <br /> <span>&</span> <br /> Kendini test et</h2>

                            <button className='startBtn' type='button'>Sınava Başla</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
