import linkedin from "../imgs/Linkedin.png"
import facebook from "../imgs/FaceBook.png"
import instagram from "../imgs/Instagram.png"

import { 
  DivFooter, 
  P2, 
  P1, 
  Caixa1, 
  Caixa2, 
  Caixinha1, 
  Caixinha2, 
  Imgs, 
  Foto
} from "../Styles/Footer"

const Footer = () => {
  return (
    <DivFooter>
      <Caixa1>
        <Caixinha1>
          <P2>about us:</P2>
          <P2>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </P2>
        </Caixinha1>
      </Caixa1>

      <Caixa2>
        <P2>Privacy Policy</P2>
        <P2>All Rights Reserved &copy; 2025</P2>
        <P2>Terms of Use</P2>
      </Caixa2>
    </DivFooter>
  )
}

export default Footer
