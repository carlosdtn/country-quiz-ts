const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeWidth="1.5"
      color="#FFF"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 12.5l3 3 7-7"
      ></path>
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
    </svg>
  )
}

export default Check
