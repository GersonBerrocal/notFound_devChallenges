import React from 'react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="nf">
        <div className="text-center">
          <img className="nf-img" src="/img/Scarecrow.png" />
        </div>
        <div>
          <h1 className="nf-title">I have bad news for you</h1>
          <p className="nf-message">
            The page you are looking for might be removed or is temporarily
            unavailable.
          </p>
          <button className="btn">BACK TO HOMEPAGE</button>
        </div>
      </div>
    )
  }
}

export default NotFound
