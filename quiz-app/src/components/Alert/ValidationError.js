import React from 'react'

function ValidationError(props) {
  return (
    <div class="alert alert-danger" role="alert">
  {props.children}
</div>
  )
}

export default ValidationError