import './App.css'
import backgroundImageDesktop from './assets/bg-desktop.svg'
import backgroundImageMobile from './assets/bg-mobile.svg'
import logo from './assets/logo.svg'
import mockup from './assets/illustration-mockups.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react'

function App() {
    const [backgroundImage, setBackgroundImage] = useState(backgroundImageDesktop);

    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth < 768;
            setBackgroundImage(isMobile ? backgroundImageMobile : backgroundImageDesktop);
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [backgroundImageMobile, backgroundImageDesktop])

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    return (
        <div className="bg-violet font-poppins md:block xs:flex-col xs:h-full" style={styles} >
            <header className="w-36 pt-10 ml-20">
                <img src={logo} alt="logo" />
            </header>
            <div className="flex xs:flex-col md:flex-row">
                <div className="left-side md:w-6/12 xs:w-[300px]  mt-20 ml-20">
                    <img className="md:w-full" src={mockup} alt="mockup" />
                </div>

                <div className="right-side  md:w-5/12 xs:w-[300px] md:text-start xs:text-center  ml-20 mt-5 md:mt-32 text-white">
                    <h3 className="md:w-[400px] leading-snug md:text-3xl xs:text-2xl font-semibold">Build The Community Your Fans Will Love</h3>
                    <p className="mt-5  w-full md:w-[500px] xs:w-[300px] xs:text-center md:text-start  text-white text-opacity-70">
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                        Create connections with your users as you engage in genuine discussion.
                    </p>
                    <button className="m:w-36 m:h-10 xs:w-48 xs:h-10 bg-white text-violet text-sm rounded-3xl mt-4 shadow hover:bg-soft-magenta hover:text-white">Register</button>
                </div>
            </div>
            <div className="xs:flex xs:flex-row xs:justify-center xs:ml-5 xs:mt-12 xs:pb-5  md:absolute md:right-16 md:bottom-12">
                <FontAwesomeIcon className="border rounded-full p-2 m:w-5 m:h-5 xs:w-4 xs:h-4 text-white  mr-4 hover:text-soft-magenta hover:border-soft-magenta cursor-pointer" icon={faFacebookF} />
                <FontAwesomeIcon className="border rounded-full p-2 m:w-5 m:h-5 xs:w-4 xs:h-4 text-white  mr-4 hover:text-soft-magenta hover:border-soft-magenta cursor-pointer" icon={faTwitter} />
                <FontAwesomeIcon className="border rounded-full p-2 m:w-5 m:h-5 xs:w-4 xs:h-4  text-white  mr-4 hover:text-soft-magenta hover:border-soft-magenta cursor-pointer" icon={faInstagram} />
            </div>
        </div>)
}

export default App
