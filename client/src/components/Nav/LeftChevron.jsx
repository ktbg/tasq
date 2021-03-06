export default function LeftChevron(props) {
  return (
    <div className="flex items-center">
      <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 1.5L1.5 4.5L4.5 7.5" stroke="#9E8CD1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="text-darkPurple purple-hover text-sm ml-2">{props.name}</p>
    </div>
  )
}
