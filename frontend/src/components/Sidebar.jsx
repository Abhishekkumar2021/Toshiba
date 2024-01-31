import React from 'react'
import '../styles/Sidebar.scss'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import dashboard from '../assets/dashboard.svg'
import customers from '../assets/customers.svg'
import report from '../assets/reports.svg'
import geography from '../assets/geography.svg'
import conversations from '../assets/conversations.svg'
import deals from '../assets/deals.svg'
import exports from '../assets/exports.svg'
import closed from '../assets/closed.svg'
import settings from '../assets/settings.svg'
import logout from '../assets/logout.svg'


function Sidebar() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
    <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar__top">
            <img src={logo} alt="logo" />
        </div>
        <div className="sidebar__mid">
          <div className="search">
            <img src={search} alt="search" />
            <input type="text" placeholder='Search'/>
          </div>
          <div className="item">
            <img src={dashboard} alt="dashboard" />
            <p>Dashboard</p>
          </div>
          <div className="item">
            <img src={customers} alt="customers" />
            <p>Customers</p>
            <img src={closed} alt="closed" className='closed'/>
          </div>
          <div className="item">
            <img src={report} alt="report" />
            <p>All Reports</p>
          </div>
          <div className="item">
            <img src={geography} alt="geography" />
            <p>Geography</p>
          </div>
          <div className="item">
            <img src={conversations} alt="conversations" />
            <p>Conversations</p>
          </div>
          <div className="item">
            <img src={deals} alt="deals" />
            <p>Deals</p>
          </div>
          <div className="item">
            <img src={exports} alt="exports" />
            <p>Export</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <div className="user">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
            <div className="user__info">
              <p>Gustavo Xavier</p>
              <p className='tag'>Admin</p>
            </div>
          </div>
          <div className="item">
            <img src={settings} alt="settings" />
            <p>Settings</p>
          </div>
          <div className="item">
            <img src={logout} alt="logout" />
            <p className='logout'>Log out</p>
          </div>
        </div>
    </div>
    <div className="menu" onClick={() => setOpen(!open)}>
      {
        open ? "X" : "Menu"
      }
    </div>
    </>
  )
}

export default Sidebar