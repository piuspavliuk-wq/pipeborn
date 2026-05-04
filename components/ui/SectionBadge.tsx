export default function SectionBadge({ label }: { label: string }) {
  return (
    <div className="badge-outer" style={{ display: 'inline-flex' }}>
      <div className="badge-inner">{label}</div>
    </div>
  )
}
