import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi"
import { FaHeart } from "react-icons/fa"

const LeftNav = (props) => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context)
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  }
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all' style={{ background: props.theme === "dark" ? "black" : "white", color: props.theme === "dark" ? "white" : "#046ec4" }}>
      <div className="flex px-5 flex-col">
        {categories.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <LeftNavMenuItem text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type)
                  navigate("/")
                }}
                className={`${selectCategories === item.name ? "bg-[#046ec4]/[0.6]" : ""}`}
                theme={props.theme} />
              {item.divider && (
                <hr className="my-5 border-blue-600/[0.2]" />
              )}
            </React.Fragment>
          )
        })}
        <hr className="my-5 border-blue-600/[0.2]" />
        <div className="text-blue-800/[0.9] text-[11px] flex">Developed with <FaHeart className='mx-[3px] text-[red] mt-[2px]' /> by studioHammad.</div>

      </div>
    </div>
  )
}

export default LeftNav
