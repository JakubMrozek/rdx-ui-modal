import React from 'react'

function closeOnClick(name, closeModal) {
  return function close(e) {
    if (e.target.getAttribute('data-clickcatcher')) {
      e.stopPropagation()
      closeModal(name)
    }
  }
}

const Container = ({children, name, disableHideOnClick, closeModal}) => (
  <div className='modal' onClick={!disableHideOnClick && closeOnClick(name, closeModal)} data-clickcatcher='true'>
    {children}
  </div>
)

export default Container
