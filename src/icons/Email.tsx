export default function Email({
  color = "#598FF6",
  className,
}: {
  color?: string
  className?: string
}) {
  return (
    <svg width="29" height="21" viewBox="0 0 29 21" fill="none" className={className} aria-hidden="true">
      <mask id="mask0_0_77" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="3" width="29" height="18">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.000244141 3.79907H28.6936V21H0.000244141V3.79907Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_77)">
        <path fillRule="evenodd" clipRule="evenodd" d="M27.8869 3.79907C27.7318 3.79907 27.5868 3.84615 27.4645 3.932C27.4645 3.932 15.4749 14.2668 15.3728 14.3429C15.0802 14.5631 14.7259 14.6918 14.3477 14.6918C13.9631 14.6918 13.605 14.5603 13.3125 14.336C13.2142 14.2626 1.22833 3.93061 1.22833 3.93061C1.10729 3.84615 0.962288 3.79907 0.80594 3.79907C0.360853 3.79907 0.000244141 4.19646 0.000244141 4.68523V19.0049C0.000244141 20.1057 0.812244 21.0001 1.8159 21.0001H26.8782C27.8806 21.0001 28.6939 20.1057 28.6939 19.0049V4.68523C28.6939 4.19646 28.3332 3.79907 27.8869 3.79907" fill={color} />
      </g>
      <mask id="mask1_0_77" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1" y="0" width="26" height="12">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.20837 0.297363H26.5762V11.551H1.20837V0.297363Z" fill="white" />
      </mask>
      <g mask="url(#mask1_0_77)">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.0566 11.2616C13.2898 11.4429 13.5792 11.5509 13.891 11.5509C14.2054 11.5509 14.4947 11.4416 14.7305 11.2563L26.1908 1.88026L26.3754 1.71493C26.5001 1.5656 26.5762 1.36693 26.5762 1.1496C26.5762 0.678931 26.2182 0.296265 25.7767 0.296265H2.00665C1.56511 0.296265 1.20837 0.678931 1.20837 1.1496C1.20837 1.39093 1.29943 1.60693 1.44911 1.7616L13.0566 11.2616Z" fill={color} />
      </g>
    </svg>
  )
}  