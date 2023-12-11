import {
    useNavigate,
} from "react-router-dom";

import HomeIcon from "../../assets/images/home-screen/home-icon.svg"
import ProfileIcon from "../../assets/images/home-screen/profile.svg"

function HomeFeedFooter () {

    const navigate = useNavigate();

    return (
        <footer className="fixed bottom-0 py-4 px-6 bg-black w-full border-t border-neutral-800 flex-shrink-0 mt-4">
            <nav>
            <ul className="flex justify-center gap-10">
                <li>
                    <button onClick={()=>{navigate('/home')}}>
                        <img alt="Home Icon" src={HomeIcon} />
                    </button>
                </li>
                <li>
                    <button onClick={()=>{navigate('/profile')}}>
                        <img alt="Profile Icon" src={ProfileIcon} className="p-1" />
                    </button>
                </li>
            </ul>
            </nav>
        </footer>
    )
}

HomeFeedFooter.propTypes = {

}

export default HomeFeedFooter
