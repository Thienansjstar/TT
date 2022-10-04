import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://github.com/Thienansjstar' target='blank'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/thienan-tran-0a9803233' target='blank'><BsLinkedin/></a>
    </div>

  )
}

export default HeaderSocials
