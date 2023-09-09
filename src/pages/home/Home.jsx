import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import "./home.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget 
              title= "USERS"
              isMoney={false}
              link="See all users"
              icon={<PersonOutlineOutlinedIcon className='icon' 
              style={{ color:"crimson", background:"rgba(255,0,0,0.2)" }}/>}
              />
            <Widget 
              title= "ORDERS"
              isMoney={false}
              link="View all orders"
              icon={<ShoppingCartOutlinedIcon className='icon'
              style={{ color:"goldenrod", background:"rgba(218,165,32,0.2)" }}/>}
            />
            <Widget 
              title= "EARNINGS"
              isMoney={true}
              link="View net earnings"
              icon={<MonetizationOnOutlinedIcon className='icon'
              style={{ color:"green", background:"rgba(0,128,0,0.2)" }}/>}
            />
            <Widget 
              title= "BALANCE"
              isMoney={true}
              link="See details"
              icon={<AccountBalanceWalletOutlinedIcon className='icon'
              style={{ color:"purple", background:"rgba(128,0,128, 0.2)" }} />}
            />
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect= {2/1}  title= {'Last 6 months (Revenue)'} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home
