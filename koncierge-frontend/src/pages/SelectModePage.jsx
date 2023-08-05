import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GetCuisineCount from '../components/GetCuisineCount';
import SettingButton from '../components/SettingButton';

import BackGroundImage from '../assets/BG_SelectModePage.png';

const SelectModePage = () => {
    const background_css = "flex flex-col items-center justify-center w-screen h-screen"
    const title_css = "text-leather-beige flex flex-col w-3/5 justify-center items-center gap-5"
    const hundlemakecuisine_css = "w-3/5 m-6 border-2 border-Fuchsia-500 bg-retro-bordeaux text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"
    const hundleselectcuisine_css = "w-3/5 m-6 border-2 border-Fuchsia-500 bg-retro-bordeaux  text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"
    const hundleselectcuisine_null_css = "w-3/5 m-6 border-0 border-Fuchsia-500 bg-creamy-emerald bg-opacity-40 text-gray-400 text-opacity-50 py-2  transition duration-300"

    const navigate = useNavigate();
    const [getData, setGetData] = useState(null);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const data = await GetCuisineCount();
            setGetData(data);
            console.log("料理の数", data);
        }
        fetchDataAndSetData();
    }, []);

    const handleMakeCuisine = () => {
        navigate ("/");
    }

    const handleSelectCuisine = () => {
        navigate ("/");
    }

    if (getData == null) {
        return ( 
            <div className={background_css}
                style={{
                    backgroundImage: `url(${BackGroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
        );
    }

    return (
        <div>
            <SettingButton />
            <div
                className={background_css}
                style={{
                    backgroundImage: `url(${BackGroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className={title_css}>
                    <h2 className="text-7xl mb-2">Mode Select</h2>
                    <button
                        className={hundlemakecuisine_css}
                        onClick={handleMakeCuisine}
                    >
                        <h2 className="text-4xl m-2">料理を作成</h2>
                    </button>

                    { getData > 0 ? (
                        <button
                            className={hundleselectcuisine_css}
                            onClick={handleSelectCuisine}
                        >
                            <h2 className="text-4xl m-2">料理を選択</h2>
                        </button>
                    ) : (
                        <button
                            className={hundleselectcuisine_null_css}
                            onClick={null}
                        >
                            <h2 className="text-4xl m-2">料理を選択</h2>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectModePage;