import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">

      <Link
        href='/'
      >
        <span className={`${ titleFont.className } antialiased font-bold `}>Tacticos </span>
        <span>| Mason Chile </span>
        <span>© { new Date().getFullYear() }</span>
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Privacidad & Legal
      </Link>

      <Link
        href='https://www.google.com/maps/place/5+Ote.+318,+Vi%C3%B1a+del+Mar,+Valpara%C3%ADso/@-33.019563,-71.544039,16z/data=!4m6!3m5!1s0x9689dddec32c8951:0x2b77d87eff97fd92!8m2!3d-33.0196024!4d-71.5439731!16s%2Fg%2F11l76vdd3x?hl=es&entry=ttu'
        className="mx-3"
      >
        Ubicación: 5 Oriente 318, Viña del Mar.
      </Link>
      <span>
        <p className={`${ titleFont.className } antialiased font-bold `}>Desarrollado por Jorge Pilcante Devia</p>
      </span>


    </div>
  )
}