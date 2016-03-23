import React from 'react'

function closeOnClick(name, closeModal) {
  return function close(e) {
    closeModal(name)
  }
}

const Close = ({children, name, closeModal}) => (
  <p className='close' onClick={closeOnClick(name, closeModal)}>
    {children}
  </p>
)

export default Close
