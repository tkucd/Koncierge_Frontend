import { useEffect } from 'react';

import LogIn from '../components/LogIn';

import Logo from '../assets/IMG_Logo.png';
import BackGroundImage from '../assets/BG_HomePage.png';

const HomePage = () => {
    const background_css = "flex flex-col items-center justify-center"
    const logo_css = "flex justify-center items-center h-screen w-screen "
    const section_css = "flex items-center justify-center w-screen min-h-screen py-20"
    const loginform_css = "rounded-lg bg-retro-bordeaux from-gray-600 to-white-300 border-r-gray-600 border-r-8 border-b-gray-600 border-b-8 p-10 pt-16 pb-16 mb-10 w-2/6"

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={background_css}
            style={{
                backgroundImage: `url(${BackGroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <section className='min-h-screen'>
                <div className={logo_css}>
                    <img src={Logo} />
                </div>
            </section>

            <section className={section_css}>
                <div className={loginform_css}>
                    <LogIn />
                </div>
            </section>
        </div>
    );
};

export default HomePage;