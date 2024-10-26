/* eslint-disable react/prop-types */
const Header = ({ message }) => {
  return (
    <nav style={{ backgroundColor: "#c59771bd", padding: "16px 32px" }}>
      <h1>{message}</h1>
    </nav>
  )
}

export default Header