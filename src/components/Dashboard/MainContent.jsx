import React from "react";
import "./Dashboard.css";

const MainContent = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src="" alt="hello"/>
                    <div className="main__greeting">
                        <h1>Hello Awesome</h1>
                        <p>welcome to your dashboard</p>
                </div>
                    
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Status</p>
                            <span className="font-bold text-title">$45</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Status</p>
                            <span className="font-bold text-title">$45</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Status</p>
                            <span className="font-bold text-title">$45</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Status</p>
                            <span className="font-bold text-title">$45</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default MainContent;