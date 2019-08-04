import { MailOutline, Phone, Place } from "@material-ui/icons"
import React from "react"

import("../../static/scss/InfoBar.scss")

//icons

const InfoBar = () => {
  return (
    <div className="infoBar">
      <ul className="links">
        <li className="link">
          <Phone className="icon" />
          <a>555-555-555</a>
        </li>
        <li className="link">
          <MailOutline className="icon" />
          <a>info@gmail.com</a>
        </li>
        <li className="link">
          <Place className="icon" />
          <a>1234 West St.</a>
        </li>
      </ul>
    </div>
  )
}

export default InfoBar
