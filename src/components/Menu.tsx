import { useState } from 'react'
import Settings from './Settings'
import MainPage from './MainPage'

const Menu = () => {
    const [showSection, setShowSection] = useState(<MainPage />)

    const setMainPage = () => { setShowSection(<MainPage />); }
    const setSettingsPage = () => { setShowSection(<Settings />); }

    return (
        <div >
            <h1>MENU</h1>
            <p>
                <button onClick={setMainPage}> Main page </button>

                <button onClick={setSettingsPage}> Settings </button>

            </p>
            {showSection}
        </div>
    )
}

export default Menu;