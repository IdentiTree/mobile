import './coverImage.css'

export interface CoverImageProps {
  image: string
}

export function CoverImage(props: CoverImageProps) {
  const { image } = props
  return (
    <div className="cover" style={{ backgroundImage: `url(${image})`}}/>
  )
}