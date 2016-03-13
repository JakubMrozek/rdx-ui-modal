import React from 'react'

function isVisible(name, modal) {
  return Boolean(modal[name])
}

const IsVisible = ({name, modal, children}) => (
  <div className='is-visible'>
    {isVisible(name, modal) ? children : ''}
  </div>
)

export default IsVisible
