import SignUp from '../components/SignUp';

import BackGroundImage from '../assets/BG_SignUpPage.png';

const SignUpPage = () => {
    const background_css = "flex flex-col items-center justify-center"
    const section_css = "flex flex-col items-center justify-center h-screen w-screen"
    const signupform_css = "rounded-lg bg-retro-bordeaux from-gray-600 to-white-300 border-r-gray-600 border-r-8 border-b-gray-600 border-b-8 p-10 pt-16 pb-16 mb-10 w-2/6"

    return (
        <div className={background_css}
            style={{
                backgroundImage: `url(${BackGroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className={section_css}>
                <div className={signupform_css}>
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;