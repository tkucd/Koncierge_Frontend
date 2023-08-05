import SignOut from './SignOut';

const SettingButton = () => {
    const settingbutton_css = "fixed top-24 right-24 z-50"
    
    return (
        <div>
            <div className = {settingbutton_css}>
                <SignOut />
            </div>
        </div>
    )
};

export default SettingButton;