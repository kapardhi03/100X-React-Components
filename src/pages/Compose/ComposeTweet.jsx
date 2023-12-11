import {useState} from "react";
import {
    useNavigate,
} from "react-router-dom";

import UserAvatar from "../../components/UserAvatar.jsx";
import ArrowLeft from "../../assets/images/arrow-left.svg"
import {useAuthUser} from "../../hooks/authHooks.js";
import {useTweetServices} from "../../hooks/tweetServiceHooks.js";
import Button from "../../components/Button.jsx";

function ComposeTweet() {
    const user = useAuthUser();
    const navigate = useNavigate();
    const tweetServices = useTweetServices();

    const [tweetContent, setTweetContent] = useState("");
    // console.log(tweetServices)

    const userImagePath = user.userAvatarPath;

    const postHandler = async (e) => {
        e.target.disabled=true;
        const {userName, userHandle, userAvatarPath} = user;
        await tweetServices.postTweet({
            user: {userName, userHandle, userAvatarPath},
            tweetContent,
        });
        setTweetContent("");
        navigate("/home", { replace: true });
    }

    return (
        <div className="flex flex-col h-full">
            <div className="py-3 px-4 w-full flex justify-between items-center">
                <button onClick={()=>navigate('/home')}>
                  <img alt="move-back" src={ArrowLeft}/>
                </button>
                <Button size="md" width="fit" variant="primary" disabled={!(0<tweetContent.length && tweetContent.length<=280)} onClick={postHandler}>
                    Post
                </Button>
            </div>
            <main className="flex-grow">
                <div className="flex items-start my-2 mx-4 h-full">
                  <UserAvatar user={userImagePath}/>
                  <textarea className="bg-inherit ml-3 w-full h-full mt-1.5 caret-twitter-blue focus:outline-none resize-none rounded-md placeholder-neutral-500"
                            placeholder="What's happening?" autoFocus={true} value={tweetContent} onChange={(e)=>setTweetContent(e.target.value)}/>
                </div>
            </main>
            <footer className="flex-shrink-0 py-3 px-4 flex border border-neutral-800 w-full text-neutral-500 text-sm">
              <span className={tweetContent.length>280 ? "text-error" : ""}>{tweetContent.length}</span>/280
            </footer>
        </div>
    )
}

ComposeTweet.propTypes = {}

export default ComposeTweet