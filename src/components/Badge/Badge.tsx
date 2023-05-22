import "./styles.scss"

interface BadgeProps {
  count: number | string;
}

export default function Badge({count}: BadgeProps) {
  return(
    <div className="count">{count}</div>
  )
}