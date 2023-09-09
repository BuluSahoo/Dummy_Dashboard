import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div>
      <div className="sidebar">
        <div className="top1">
          <Link to='/' style={{ textDecoration: "none" }} >
            <span className="logo">Bulladmin</span>
          </Link>

        </div>
        <hr />
        <div className="center">
          <ul>
            <p className='title'>MAIN</p>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className='title'>LIST</p>
            <Link to='/users' style={{ textDecoration: "none" }} >
              <li>
                <PersonOutlinedIcon className='icon' />
                <span>Users</span>
              </li>
            </Link>
            <Link to='/products' style={{ textDecoration: "none" }} >
              <li>
                <StoreIcon className='icon' />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className='icon' />
              <span>Order</span>
            </li>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Delevery</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
              <AssessmentIcon className='icon' />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className='icon' />
              <span>Notification</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className='icon' />
              <span>Settings</span>
            </li>
            <p className='title'>USER</p>
            <li>
              <AccountCircleOutlinedIcon className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppOutlinedIcon className='icon' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})} ></div>
          <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar