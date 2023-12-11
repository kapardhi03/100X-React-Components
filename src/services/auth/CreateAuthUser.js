// create dummy auth user, simulating server
export default function createAuthUser({ id, username, email }) {
    return {
        id,
        userName: username,
        userHandle: username.replace(/\s+/g, '').toLowerCase(),
        userAvatarPath: '2',
        email,
        verified: true,
        userBio: 'All-Rounder',
        meta: {
            link: "https://github.com/kapardhi03",
            linkAbbr: 'github/kapardhi03',
            joined: 'october 2020',
        },
        followers: 118,
        following: 217,
    };
}