import { useState, useEffect } from "react";

import SettingButton from '../components/SettingButton';

import Arrow from "../assets/IMG_Arrow.png";
import BackGroundImage from "../assets/BG_MakeCuisinePage.png";

const MakeCuisinePage = () => {
    const background_css = "flex flex-col items-center justify-center"
    const section_css = "flex flex-col items-center justify-center h-screen w-screen"
    const title1_css = "text-center text-6xl text-leather-beige mb-4 pb-2"
    const title2_css = "text-center text-2xl text-leather-beige mb-4 pb-2"
    const title3_css = "text-center text-6xl text-retro-bordeaux mb-4 pb-2"
    const ingredients_css = "border-2 border-yellow-400 rounded w-80 h-10 px-4"
    const kcal_css = "border-2 border-yellow-400 rounded w-80 h-10 px-4"
    const time_css = "border-2 border-yellow-400 rounded w-80 h-10 px-4"
    const submitbutton1_css = "bg-retro-bordeaux text-leather-beige px-4 py-2 rounded"
    const submitbutton2_css = "bg-retro-bordeaux text-leather-beige px-4 py-2 rounded"
    const arrow_css = "flex items-center pt-10"

    const [ingredients, setIngredients] = useState("");
    const [kcal, setKcal] = useState("");
    const [time, setTime] = useState("");
    const [menu, setMenu] = useState([]);
    const [showModal, setModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const doChangeIngredients = (event) => {
        setIngredients(event.target.value);
    }

    const doChangeKcal = (event) => {
        setKcal(event.target.value);
    }

    const doChangeTime = (event) => {
        setTime(event.target.value);
    }

    const submitIngredients = (event) => {
        fetch('https://konciergebackend-production.up.railway.app/make', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ingredients: ingredients,
                kcal: kcal,
                time: time,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((text) => {
            console.log(text);
            console.log(typeof(text));
            return JSON.parse(text);
        })
        .then((data) => {
            console.log(data);
            console.log(typeof(data));
            if (!data.menu) {
                throw new Error('No menu found');
            }
            setMenu(data.menu);
        })
        .catch((error) => {
            console.error(error);
        })
        event.preventDefault();
    }

    const handleModalOpen = (event) => {
        event.preventDefault();
        setModalOpen(true);
        console.log(showModal)
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <SettingButton />
            <div className={background_css}
                style={{
                    backgroundImage: `url(${BackGroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="text-center">
                    <section className={section_css}>
                        <form onSubmit={submitIngredients}>
                            <div>
                                <h1 className={title1_css}>料理の作成</h1>
                                <h2 className={title2_css}>使いたい食材を入力してください</h2>
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center">
                                        <label className="text-leather-beige text-xl pl-4 py-1 pr-5 pl-5" htmlFor="ingredients">食材</label>
                                        <input
                                            className={ingredients_css}
                                            type="text"
                                            id='ingredients'
                                            value={ingredients}
                                            autoComplete="off"
                                            placeholder="例) 鶏肉, じゃがいも, にんじん"
                                            onChange={doChangeIngredients}
                                            required
                                        />
                                        <label className="text-leather-beige text-xl pl-4 py-1 pr-5 pl-5" htmlFor="kcal">カロリー（kcal）</label>
                                        <input
                                            className={kcal_css}
                                            type="number"
                                            id='kcal'
                                            value={kcal}
                                            autoComplete="off"
                                            placeholder="例) 500"
                                            onChange={doChangeKcal}
                                            required
                                        />
                                        <label className="text-leather-beige text-xl pl-4 py-1 pr-5 pl-5" htmlFor="time">時間（分）</label>
                                        <input
                                            className={time_css}
                                            type="number"
                                            id='time'
                                            value={time}
                                            autoComplete="off"
                                            placeholder="例) 30"
                                            onChange={doChangeTime}
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button className={submitbutton1_css} type="submit">
                                            作成！
                                        </button>
                                    </div>
                                    {Object.keys(menu).length > 0 && (
                                        <div className={arrow_css}>
                                            <img src={Arrow} alt="arrow" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className={section_css}>
                        <h1 className={title3_css}>料理の候補</h1>
                        <div className="flex p-8 ">
                            {menu.map((value, index) =>
                                <div key={index} className="flex-col p-4 border rounded-md bg-retro-bordeaux text-leather-beige h-full max-w-full">
                                    <h2 className="text-xl font-bold">「{value.dish}」</h2>
                                    <div className="mt-2">
                                        <div className="flex font-bold">材料：</div>
                                        <ul className="list-disc pl-5">
                                            {value.ingredients.map((ingredient, index) => (
                                                <li key={index} className="flex">
                                                    { ingredient }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex font-bold">レシピ：</div>
                                        <ul className="list-decimal pl-5">
                                            {value.recipe.map((step, index) => (
                                                <li key={index} className="flex">
                                                    <div>{ step }</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-2 flex justify-between">
                                        <span><strong>カロリー：</strong>{ value.kcal }kcal</span>
                                        <span><strong>時間：</strong>{ value.time }分</span>
                                    </div>
                                    <div className="mt-2 flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>この料理を登録する</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className={submitbutton2_css} onClick={handleModalOpen}>
                            登録！
                        </button>
                        {showModal && (
                            <div className="bg-white bg-opacity-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center">
                                <div className="bg-retro-bordeaux text-leather-beige p-4 rounded border-2 border-yellow-400">
                                    <h3 className="text-xl mb-2">Confirmation Dialog</h3>
                                    <p>この料理を登録しますか？</p>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="mr-2 bg-black text-retro-bordeaux px-4 py-2 rounded"
                                            onClick={handleModalClose}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-black text-retro-bordeaux px-4 py-2 rounded"
                                            onClick={handleModalClose}
                                        >
                                            OK!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MakeCuisinePage;
