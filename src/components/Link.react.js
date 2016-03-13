import React from 'react'


function openOnClick(name, openModal) {
  return function open(e) {
    e.preventDefault()
    openModal(name)
  }
}


const Link = ({children, name, openModal, ...props}) => (
  <a {...props} onClick={openOnClick(name, openModal)}>
    {children}
  </a>
)


export default Link
