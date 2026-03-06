import React from 'react'

export default function Header() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

          <div className="container-fluid">

            <a className="navbar-brand" href="#">IdeaPulse</a>

            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">

                <li className="nav-item me-5">
                  <a className="nav-link active" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

        </nav>

    </div>
  )
}