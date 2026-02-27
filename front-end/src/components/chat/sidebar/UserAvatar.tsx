import { type User } from "@/types/user"

interface UserAvatarProps {
  user: User
  size?: number
}

export function UserAvatar({ user, size = 36 }: UserAvatarProps) {
  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt={user.username}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
    )
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--bg-dark)",
        fontWeight: 600
      }}
    >
      {user.username.charAt(0).toUpperCase()}
    </div>
  )
}