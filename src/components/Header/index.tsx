import imgLogo from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imgLogo} alt="" />
    </HeaderContainer>
  )
}
