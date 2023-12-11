import Logo from "../../assets/images/logo.svg"
import UserAvatar from "../../components/UserAvatar"
import { useNavigate } from "react-router-dom";

function HomeFeedHeader () {
    const navigate = useNavigate();

    return (
        <header className="h-12 px-4 flex items-center justify-between border-neutral-700 flex-shrink-0 relative">
            <a href="" className="absolute" onClick={()=>{navigate('/profile')}}>
                <UserAvatar user='2' outline={false}/>
            </a>
            <div className="flex-grow flex justify-center items-center">
                <img alt="100x Logo" src={Logo} className="w-12" />
            </div>
        </header>
    )
}

export default HomeFeedHeader
