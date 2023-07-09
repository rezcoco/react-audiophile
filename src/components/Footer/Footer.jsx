import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-cDark">
        <div className="ctr py-16 flex flex-col">
            <div className="flex flex-col lg:flex-row gap-y-8 justify-center items-center lg:justify-between">
                <a href="/">
                    <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
                </a>
                <nav>
                    <ul className="flex flex-col items-center md:flex-row md:items-start gap-8">
                        <li><NavLink className="text-[13px] tracking-[2px] text-white font-bold hover:text-cBrown" to="/">HOME</NavLink></li>
                        <li><NavLink className="text-[13px] tracking-[2px] text-white font-bold hover:text-cBrown" to="/headphones">HEADPHONES</NavLink></li>
                        <li><NavLink className="text-[13px] tracking-[2px] text-white font-bold hover:text-cBrown" to="/speakers">SPEAKERS</NavLink></li>
                        <li><NavLink className="text-[13px] tracking-[2px] text-white font-bold hover:text-cBrown" to="/earphones">EARPHONES</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="lg:max-w-[33.375rem]">
                <p className="text-cDarkGray text-center md:text-left mt-8 mb-14">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&rsquo;re open 7 days a week.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8">
                <p className="text-cDarkGray font-bold">Copyright 2023. All Rights Reserved</p>
                <div className="flex gap-4">
                    <a href=""><img className="hover:stroke-cBrown" src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" /></a>
                    <a href=""><img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" /></a>
                    <a href=""><img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer