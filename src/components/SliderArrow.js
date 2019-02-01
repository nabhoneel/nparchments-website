import React from 'react'

export default ({icon, className, to, onClick}) => (

	<button 
		type="button" 
		onClick={onClick} 
		className={`button button--text button--icon ${className}`} 
		aria-label={to}
		style={{
			zIndex: "1000",
			color: "white",
			fontSize: "3em",
		}}>

		<i className={`${icon}`}></i>
		
  </button>

)