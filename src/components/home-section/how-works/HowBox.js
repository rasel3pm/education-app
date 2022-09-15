import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck ,faSignHanging} from "@fortawesome/free-solid-svg-icons";
const HowBox = (props) => {
  return (
    <div className='how_box_item my-5'>
        <div>
        <FontAwesomeIcon className='icons' icon={faSignHanging} />
        <h5>{props.title}</h5>
        <p>{props.des}</p>
        </div>
    </div>
  )
}

export default HowBox
