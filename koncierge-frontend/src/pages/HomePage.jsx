import { useEffect } from 'react';

import LogIn from '../components/LogIn';

import Logo from '../assets/Logo.png';
import BackGroundImage from '../assets/BackGroundImage.jpg';

const HomePage = () => {
    const background_css = "flex flex-col items-center justify-center"
    const logo_css = "h-screen w-screen flex justify-center items-center"
    const section_css = "w-screen min-h-screen flex items-center justify-center py-20"
    const loginform_css = "border-r-gray-600 border-r-8 border-b-gray-600 border-b-8 bg-gray-400 p-10 pt-16 pb-16 mb-10 w-2/6"

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