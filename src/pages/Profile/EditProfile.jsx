import {
    useNavigate,
} from "react-router-dom";
import CameraIcon from "../../assets/images/photo.svg"
import SignUpXIcon from "../../assets/images/signup-screen/signup-x.svg"
import TextInputField from "../../components/TextInputField.jsx"
import PageHeader from "../../components/PageHeader.jsx";
import {useState} from "react";
import {useAuthService, useAuthUser} from "../../hooks/authHooks.js";
import Button from "../../components/Button.jsx";


function SaveButton({...rest}) {
    return (
        <button {...rest} className="
            bg-neutral-50 text-neutral-1000 h-8 py-3 px-6 rounded-full font-bold
            flex justify-center items-center text-center disabled:opacity-50">
            Save
        </button>
    )
}

export default function EditProfile() {

    const navigate = useNavigate();
    const user = useAuthUser();
    const authService = useAuthService();

    const {userHandle, userBio, meta} = user;
    const [handle, setUserHandle] = useState(userHandle);
    const [bio, setUserBio] = useState(userBio);
    const [link, setLink] = useState(meta.link);

    const buttonDisabled = (handle.length===0 || bio.length===0 || link.length===0);

    const saveButtonHandler = async (e) => {
        e.target.disabled=true;
        const updatedUser = JSON.parse(JSON.stringify(user));
        updatedUser.userHandle = handle;
        updatedUser.userBio = bio;
        updatedUser.meta.link = link;
        await authService.updateUser({user: updatedUser});
        navigate("/profile", {replace: true});
    }

    return (
        <>
            <div>
                <PageHeader callback={() => {
                    navigate(-1);
                }} title="Edit Profile">
                    <Button size="md" width="fit" variant="default" disabled={buttonDisabled} onClick={saveButtonHandler}>
                        Save
                    </Button>
                </PageHeader>
                <main className="mt-3 px-4">
                    <div className="relative mb-2.5">
                        <div className={"bg-coverImage w-full h-52 flex justify-center items-center gap-2"}>
                            <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                                <img src={CameraIcon}/>
                            </div>
                            <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                                <img src={SignUpXIcon}/>
                            </div>
                        </div>
                        <div
                            className={"bg-profileImage box-content bg-contain w-20 h-20 rounded-full absolute border-4 border-neutral-1000 -bottom-4 left-2.5 flex justify-center items-center"}>
                            <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                                <img src={CameraIcon}/>
                            </div>
                        </div>
                    </div>
                    <form className="my-4 caret-twitter-blue flex flex-col gap-5">
                        <TextInputField fieldName="Name" outline="dark" font="light" value={handle} onChange={(e)=>setUserHandle(e.target.value)}/>
                        <fieldset
                            className="w-full px-3 py-2 border border-neutral-700 rounded focus-within:border-twitter-blue group">
                            <legend
                                className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                                <div className="px-0.5  group-focus-within:px-1">
                                    Bio
                                </div>
                            </legend>
                            <div className="flex justify-around h-70">
                            <textarea className="bg-inherit w-full h-full text-base focus:outline-none resize-none
                                rounded-md placeholder-neutral-500" placeholder="Bio" value={bio} onChange={(e)=>setUserBio(e.target.value)}/>
                            </div>
                        </fieldset>
                        <TextInputField fieldName="Location" outline="dark" font="light" />
                        <TextInputField fieldName="Website" outline="dark" font="light" value={link} onChange={(e)=>setLink(e.target.value)}/>
                    </form>
                </main>
            </div>
        </>
    )
}
