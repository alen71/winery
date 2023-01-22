import React from 'react'

const FooterRights = () => {
  return (
    <div className="grid grid-cols-4 py-8">
      <div className="col-start-1 col-end-4 pl-20">
        <p className="text-sm opacity-60">
          © Copyright 2022. Vinarija Dumo. All Rights Reserved
        </p>
      </div>
      <div className="col-start-4 col-end-5 pl-20">
        <p className="text-sm">
          <span className="opacity-60">Designed by: </span>
          <a
            href="https://bluestudio.rs"
            rel="noflow noreferrer"
            target="_blank"
            className="text-primary font-bold hover:underline"
          >
            Blue Studio
          </a>
        </p>
      </div>
    </div>
  )
}

export default FooterRights
