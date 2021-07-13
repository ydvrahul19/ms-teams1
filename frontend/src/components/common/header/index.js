import React from 'react';
import "./header.css";

function Header () {
        return <div className='header'>
            <div className='header-menu'>
            <i class="fi-rr-grid"></i>
            </div>
            <div className='hrader-leftFold'>
                <label className='header-label'>Microsoft Teams</label>
            </div>
            <div className='header-rightFold'>
                <div className='header-search'>
                <i class="fi-rr-search"></i>
                <input placeholder='Search' />
                </div>
                <div className='header-profile'>
                <div className='header-options'>
                <i class="fi-rr-menu-dots"></i>
                </div>
                 <img className='header-avatar' src='https://img-premium.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1625442232~hmac=e5a46d415698ad93ac780b08011aeaa2' />
                </div>
            </div>
        </div>;
            }

export default Header;
