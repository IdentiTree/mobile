import { IonAvatar, IonText } from "@ionic/react";
import './userInfo.css'

export interface UserInfoProps {
  name: string,
  avatar: string,
  did: string,
  bio?: string,
}

export function UserInfo(props: UserInfoProps) {
  const {
    name,
    avatar,
    bio,
    // did, - TODO: Replace div with Ionic Link and link to profile page
  } = props
  return (
    <div className="user-info">
      <div className="info">
        <IonText>
          <h5>{name}</h5>
        </IonText>
        <IonText color="medium">
          <p>{bio}</p>
        </IonText>
      </div>
      <IonAvatar className="avatar" style={{ marginLeft: 16 }}>
        <img src={avatar} alt={name} />
      </IonAvatar>
    </div>
  )
}