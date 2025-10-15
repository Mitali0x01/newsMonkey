import React, { Component } from 'react'
import loading from '../Loading.gif'

const Spinner =() => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img src={loading} alt="Loading..." />
      </div>
    )
  }

export default Spinner