export default function LinkedIn({
  color = "#598FF6",
  className,
}: {
  color?: string
  className?: string
}) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className={className} aria-hidden="true">
      <mask id="mask0_0_65" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="1" width="6" height="24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.25049H5.80088V24.2525H0V1.25049Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_65)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.88338 6.61375C4.68213 6.61375 5.80088 5.4225 5.80088 3.93125C5.76963 2.41 4.68213 1.25 2.91713 1.25C1.15213 1.25 -0.000366211 2.41 -0.000366211 3.93125C-0.000366211 5.4225 1.11838 6.61375 2.84963 6.61375H2.88338ZM0.305884 24.2525H5.46213V8.7325H0.305884V24.2525Z" fill={color} />
      </g>
      <mask id="mask1_0_65" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="8" y="8" width="17" height="17">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31787 8.36926H24.065V24.253H8.31787V8.36926Z" fill="white" />
      </mask>
      <g mask="url(#mask1_0_65)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31787 24.253H13.4766V15.5855C13.4766 15.1218 13.5079 14.658 13.6479 14.328C14.0191 13.3993 14.8679 12.4405 16.2916 12.4405C18.1591 12.4405 18.9066 13.863 18.9066 15.9493V24.253H24.0654V15.3543C24.0654 10.5855 21.5191 8.36926 18.1254 8.36926C15.3416 8.36926 14.1216 9.92426 13.4429 10.983H13.4766V8.73301H8.31787C8.38662 10.188 8.31787 24.253 8.31787 24.253" fill={color} />
      </g>
    </svg>

  )
}  