import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import RightFold from "./right-fold";
import LeftFold from "./left-fold";
import "./calls.css";

function Calls () {
        return (
        <div className='calls-container'>
            <Header />
            <div className='calls-body' >
                <div className='calls-sidebar'>
                <Sidebar />
                </div>
                <div className='calls-LeftFold'>
                    <LeftFold />
                </div>
                <div className='calls-RightFold'>
                    <RightFold />
                </div>
            </div>
        </div>
        );
            
    }

export default Calls;
