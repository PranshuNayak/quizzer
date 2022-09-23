import React from 'react'

function ValidationError(props) {
  return (
    <div className="alert alert-danger" role="alert">
  {props.children}
</div>
  )
}

export default ValidationError