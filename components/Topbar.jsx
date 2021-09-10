import { Search, Person, Chat, Notifications  } from '@material-ui/icons'
import Container from '../components/Container'

//import PersonIcon from '@material-ui/icons/Person';
import React from 'react'

const Topbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 w-full">
      <Container>
        <div className="topbarContainer flex justify-between items-center py-3">
          <div className="topbarLeft">
            <span className="logo font-bold text-2xl text-white">facebook</span>
          </div>
          <div className="topbarCenter">
            <div className="searchBar flex border rounded-3xl py-1 px-2 bg-white ">
              <Search className="text-gray-700" />
              <input type="text" placeholder="Search Friend, post or video" className="searchInput px-2" />
            </div>
          </div>
          <div className="topBarRight flex gap-24">
            <div className="topBarLinks flex gap-7 text-white">
              <span className="topBarLink">home page</span>
              <span className="topBarLink">time line</span>
            </div>
            <div className="flex text-white gap-2">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge bg-red-600 px-[10px] py-[5px] rounded-full text-xs relative top-[-12px] left-[-7px]">2</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge bg-red-600 px-[10px] py-[5px] rounded-full text-xs relative top-[-12px] left-[-7px]">1</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge bg-red-600 px-[10px] py-[5px] rounded-full text-xs relative top-[-12px] left-[-7px]">1</span>
              </div>
            </div>
          </div>
          <img src="/assets/profile/person3.jpg" alt="profle" className="topbarImg rounded-full object-cover w-[50px]" />
        </div>
      </Container>    
    </header>
  )
}

export default Topbar
