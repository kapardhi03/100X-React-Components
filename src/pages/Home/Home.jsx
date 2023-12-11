import {
    useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react"

import HomeFeedHeader from "../../components/Home/HomeFeedHeader"
import TabNavigator from "../../components/Home/TabsNavigator"
import Timeline from "../../components/Timeline"
import HomeFeedFooter from "../../components/Home/HomeFeedFooter";
import LoadingScreen from "../../components/LoadingScreen.jsx";
import Plus from "../../assets/images/home-screen/add.svg"

import {useTweetServices} from "../../hooks/tweetServiceHooks.js";
import Button from "../../components/Button.jsx";

export default function Home() {

    const tweetService = useTweetServices();
    const navigate = useNavigate();
    const tabs = ['For You', 'Following'];
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    const [feed, setFeed] = useState([[], []]);
    const loading = feed[activeTabIndex].length === 0;

    useEffect(()=> {
        fetchTweets()

        // nothing to ignore or interrupt as of now
        // later ignore the response of the request
        return ()=>{}
    }, [activeTabIndex])

    const fetchTweets = async () => {
        const fetchCachedData = async () => {
            const cachedTweets = await tweetService.getCachedTweets(activeTabIndex);
            setFeed(feed.map((tab, index)=>{
                if(index===activeTabIndex && cachedTweets?.length>0) return [...cachedTweets, ...feed[index]]
                return tab;
            }));
        }

        if(loading) fetchCachedData();

        const fetchNewTweets = async () => {
            const tweets = await tweetService.getTweets(activeTabIndex);
            setFeed(feed.map((tab, index)=> {
                if(index===activeTabIndex) return tweets
                return tab;
            }));
        }

        fetchNewTweets()
    }

    return (
        <div className='flex flex-col h-full'>
            <HomeFeedHeader />
            <TabNavigator tabs={tabs} activeTabIndex={activeTabIndex} setActiveTab={setActiveTabIndex}/>
            {
                loading ?
                    <LoadingScreen/> :
                    <div className="pb-16">
                        <Timeline tweets={feed[activeTabIndex]}/>
                    </div>

            }
            <Button circular={true} size="sm" width="fit" variant="primary" onClick={()=>navigate('/compose-tweet')}
                    position="mx-3 my-3 fixed bottom-16 right-0">
                <img alt="plus" src={Plus}/>
            </Button>
            <HomeFeedFooter />
        </div>
    )
}
