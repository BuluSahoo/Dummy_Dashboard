import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import img from './sample-avatar2.jpg'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="tittle">Information</h1>
            <div className="item">
              <img src={img} alt="avatar" className="itemImage" />
              <div className="details">
                <h1 className='itemTitle'>Jone Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jonedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 8093218768</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">LCR-267 Chend Rourkela . Odisha</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={'User Spending (Last 6 months)'} />
          </div>
        </div>
        <div className="bottom">
        <h1 className="tittle">Last Transaction</h1>
        <List/>
      </div>
      </div>
    </div>
  )
}

export default Single
