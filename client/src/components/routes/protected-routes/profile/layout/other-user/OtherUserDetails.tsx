import { useTypedSelector } from "../../../../../../lib/hooks/redux-hook/useTypedSelector"
import Card from "../../../../../ui/Card"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"

const OtherUserDetails = () => {
  const { username, email, firstName, lastName, followers, following } =
    useTypedSelector((state) => state.otherProfile)

  return (
    <Card twClasses="p-5 flex flex-col gap-2 w-full">
      <div className="pb-5 border-b border-secondary">
        <h1 className="font-bold text-xl">
          {firstName} {lastName}
        </h1>
        <h1 className="flex items-center gap-1">
          <span className="text-xs">@</span>
          <span className="underline">{username}</span>
        </h1>
        <h1 className="font-extralight text-sm pb-5">{email}</h1>
      </div>
      <div className="space-x-2">
        <PeopleAltOutlinedIcon />
        <span>
          <b>{followers.length}</b> followers
        </span>
        <span>
          <b>{following.length}</b> following
        </span>
      </div>
    </Card>
  )
}

export default OtherUserDetails
