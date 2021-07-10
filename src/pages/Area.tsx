import { IonHeader, IonText, IonPage, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonBadge } from "@ionic/react"
import { CoverImage } from "../components/CoverImage/CoverImage"
import { KpiCard } from "../components/KpiCard/KpiCard"
import { Area as AreaType } from "../types"
import { resize, cloudy, leaf, colorPalette } from 'ionicons/icons';
import './area.css'
import { UserInfo } from "../components/UserInfo/UserInfo";

export function Area(props: AreaType) {
  const {
    name,
    image,
    description,
    type,
    size,
    carbon,
    trees,
    owner
  } = props

  const KPIS = [
    {
      label: 'size',
      value: size,
      unit: 'sqm',
      icon: resize,
    },
    {
      label: 'CO2 Compensated',
      value: carbon,
      unit: 'tons',
      icon: cloudy,
    },
    {
      label: 'Number of Trees',
      value: trees ? trees.length : 'None',
      unit: '',
      icon: leaf,
    },
    {
      label: 'Diversity Score',
      value: trees ? trees.length : 'None',
      unit: 'Species',
      icon: colorPalette,
    },
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/areas"
              color="primary"
              mode="md"
            />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {image && <CoverImage image={image} />}
        <div className="content">
          <IonText>
            <h1>{name}</h1>
          </IonText>
          <IonText color="medium">
            <p>{description}</p>
          </IonText>
          <IonBadge color="medium">{type.name}</IonBadge>
          
        </div>
        <div className="content">
          <IonText color="medium">
            <h4 className="title">Statistics</h4>
          </IonText>
          {KPIS.map(kpi => (
            <KpiCard
              label={kpi.label}
              value={String(kpi.value)}
              unit={kpi.unit}
              icon={kpi.icon}
            />
          ))}
        </div>
        <div className="content">
          <IonText color="medium">
            <h4 className="title">About the Owner</h4>
          </IonText>
          <UserInfo {...owner} />
        </div>
      </IonContent>
    </IonPage>
  )
}