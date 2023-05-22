import Logo from "../..//assets/logo.svg"

import "./styles.scss"

export default function Header() {
  return (
    <div>
      <header>
        <img src={Logo}/>
      </header>
    </div>
  )
}