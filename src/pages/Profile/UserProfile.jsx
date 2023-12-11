import {useEffect, useState} from "react";
import {
    useNavigate,
  } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader"
import Timeline from "../../components/Timeline"
import LoadingScreen from "../../components/LoadingScreen.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import {useAuthUser} from "../../hooks/authHooks.js";
import {useTweetServices} from "../../hooks/tweetServiceHooks.js";

export default function UserProfile() {

    const navigate = useNavigate();

    const user = useAuthUser();
    const tweetService = useTweetServices();

    // -1 indicates loading, empty list indicates no tweets from user
    const [tweets, setTweets] = useState(-1);

    useEffect(()=>{
        const fetchUserTweets = async () => {
            const userTweets = await tweetService.getUserTweets(user.userHandle);
            setTweets(userTweets);
        }
        fetchUserTweets();
    } ,[])

    let mainContent;
    if(tweets===-1){
        mainContent=<LoadingScreen/>
    }else if(tweets.length===0){
        mainContent = (
            <div className="w-full h-full flex items-center justify-center">
                No tweets found
            </div>
        )
    }else{
        mainContent = <Timeline tweets={tweets}/>
    }

    return (
    <>
        <div>
            <PageHeader callback={()=>navigate("/home")} title={user.userName}
                        subtitle={ (tweets!==-1 ? tweets.length : 0 )+ " posts"}/>
            <ProfileHeader user={user}/>
            { mainContent }
        </div>
    </>
    )
}
