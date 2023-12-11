import PropTypes from 'prop-types'
import UserAvatar1 from '../assets/images/user-avatars/user-avatar-1.png'
import UserAvatar2 from '../assets/images/user-avatars/user-avatar-2.png'
import UserAvatar3 from '../assets/images/user-avatars/user-avatar-3.png'
import UserAvatar4 from '../assets/images/user-avatars/user-avatar-4.jpeg'

export default function UserAvatar({user, size="default", outline="false"}) {

    const avatarSizes = {
        default: 9,
        md: 12,
        xxl: 20,
    }

    const outlineStyle = {
      false: "",
      true: "border-4 border-neutral-1000 box-content",
    }

    const image = {
        1: UserAvatar1,
        2: UserAvatar2,
        3: UserAvatar3,
        4: UserAvatar4,
    }

  return (
    <img src={image[user]} className={"w-"+avatarSizes[size]+" h-"+avatarSizes[size]+" rounded-full " + outlineStyle[outline]} />
  )

}

UserAvatar.propTypes = {
  user: PropTypes.string.isRequired,
  size : PropTypes.oneOf(['default', 'md', 'xxl']),
  outline: PropTypes.bool
}
