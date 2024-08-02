export function Squares({ children, isActive, checkClick, index }) {
  const className = `square ${isActive ? "is-selected" : ""}`;

  const handleClick = () => {
    checkClick(index)
  }

  return <div onClick={handleClick} className={className}>{children}</div>;
}
