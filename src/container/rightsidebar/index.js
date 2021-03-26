import React from 'react';
import './styles/styels.scss';
import {withRouter} from 'react-router-dom'

const RightSidebar = (props) => {
  const appSetting = [
    {
      value: 1,
      label: "app mode"
    },
    {
      value: 2,
      label: "admin mode"
    }
  ];

  React.useState(() => {
    props?.history?.push(props.history.location.pathname);
  })

  const handleChange = (mode) => {
    props.setAppMode(mode.target.value);
    if(mode.target.value === 'app mode'){
      props?.history?.push('/entry-one');
    }else{
      props?.history?.push('/admin-one');
    }
  }
  return (
    <div className="rightSideBarWrapper">
    {
      appSetting.map((mode) => {
        return (
          <div key={mode.label}>
          <input
            type="radio" 
            id={mode.value} 
            name="appmode" 
            value={mode.label} 
            onChange={handleChange} 
            checked={props.appMode === mode.label ? "checked": null}
            />
            <label htmlFor="male">{mode.label}</label><br />
          </div>
          
        )
      })
    }
  
    </div>
  )
}
export default withRouter(RightSidebar)
