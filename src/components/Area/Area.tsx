import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import { CoverImage } from "../CoverImage/CoverImage";

export interface AreaProps {
  name: string
  type: string
  description?: string
  image?: string
  did: string
}

export function Area(props: AreaProps) {
  const { name, description, type, image, did } = props
  return (
    <IonCard href={`/areas/${did}`}>
      {image && <CoverImage image={image} />}
      <IonCardHeader>
        <IonCardSubtitle>{type}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {description}
      </IonCardContent>
    </IonCard>
  )
}