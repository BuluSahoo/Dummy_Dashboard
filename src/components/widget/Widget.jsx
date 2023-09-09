import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


const Widget = ({title,isMoney,icon,link}) => {
   

    //temporary
    const amount = 100
    const diff = 20
    
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter"> {isMoney && "$"}{amount} </span>
        <span className="link"> {link} </span>

      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
            {diff} %
        </div>
        {icon}
      </div>
    </div>
  )
}

export default Widget
