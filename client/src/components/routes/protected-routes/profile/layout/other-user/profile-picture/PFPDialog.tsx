import Dialog from "@mui/material/Dialog"

type Props = {
  firstName: string
  profilePicture: string | undefined
  open: boolean
  onClose: () => void
}

const PFPDialog = ({ firstName, profilePicture, open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="py-16 px-32 space-y-16 flex flex-col items-center">
        <div className="text-3xl font-bold text-secondary text-center">
          <h1>Set Profile Picture</h1>
          <p className="text-sm font-light">Select or drag an image here</p>
        </div>
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          <h1 className="text-9xl text-gray-400 select-none capitalize">
            {firstName.charAt(0)}
          </h1>
        )}
      </div>
    </Dialog>
  )
}

export default PFPDialog