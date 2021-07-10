import { IonText, IonIcon } from "@ionic/react";
import './kpiCard.css'

export interface KpiCardProps {
  label: string
  value: string
  unit?: string
  icon?: string
}

export function KpiCard(props: KpiCardProps) {
  const { label, value, icon, unit } = props
  
  return (
    <div className="kpi-card">
      {icon && <IonIcon
          className="icon"
          icon={icon}
          color="medium"
          size="large"
        />
      }
      <div className="content-wrapper">
        <IonText color="medium"><h6>{label}</h6></IonText>
        <div className="value-wrapper">
          <IonText><h5>{value}</h5></IonText>
          <IonText color="medium"><h5>{unit}</h5></IonText>
        </div>
      </div>
    </div>
  )
}