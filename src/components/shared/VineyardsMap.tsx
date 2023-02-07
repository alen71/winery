import React from 'react'
import { motion } from 'framer-motion'

import Title from './Title'

import PhoneIcon from 'src/assets/phoneIcon.svg'
import EmailIcon from 'src/assets/emailIcon.svg'
import LocationIcon from 'src/assets/locationIcon.svg'
import Link from 'next/link'

type Props = {}

const VineyardsMap = (props: Props) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-primary">
        <div className="group relative overflow-hidden w-full h-72 lg:h-[460px]"></div>

        <div className="px-5 sm:px-20 py-10 flex flex-col justify-center">
          <Title type="h2" highlightText="Rezervišite Vaš obilazak" />
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-10 h-[3px] bg-primary my-5"
          />

          <Link
            href="tel:+381601662158"
            className=" group flex items-center w-fit"
          >
            <PhoneIcon />
            <span className="text-sm group-hover:underline">
              Telefon: +381 60 16 62 158
            </span>
          </Link>

          <Link
            href="_mailto:office@vinarijaduno.rs"
            className=" group flex items-center w-fit"
          >
            <EmailIcon />
            <span className="text-sm group-hover:underline">
              e-mail: office@vinarijaduno.rs
            </span>
          </Link>

          <div className="flex items-center w-fit">
            <LocationIcon />
            <span className="text-sm">Popovica, Fruska Gora</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VineyardsMap
