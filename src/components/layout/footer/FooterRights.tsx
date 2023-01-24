import React from 'react'

const FooterRights = () => {
  return (
    <div className="grid items-center justify-items-center lg:justify-items-start gap-y-4 lg:gap-y-0 lg:grid-cols-4 py-8">
      <div className="lg:col-start-1 lg:col-end-4 lg:pl-10 xl:pl-20">
        <p className="text-sm opacity-60">
          © Copyright 2022. Vinarija Dumo. All Rights Reserved
        </p>
      </div>
      <div className="lg:col-start-4 lg:col-end-5 lg:pl-10 xl:pl-20">
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
