import Link from 'next/link'
import styled from 'styled-components'
//import { createGlobalStyle } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tokens from './tokens'

interface ButtonProps {
  href: string,
  onClick?: any,
  color?: 'primary' | 'secondary' | 'blue',
  size?: 'small' | 'medium' | 'big' | 'huge',
  style?: 'fill' | 'outline' | 'transparent',
  text?: any,
  icon?: string | null,
  iconPosition?: 'before' | 'after' | 'arrow'
}

const Container = styled.div`
display:flex;
background: ${tokens.primaryColorNormal};
height: 40px;
text-align:center;
height:54px;
width:210px;
border-radius:8px;
font-family:${tokens.primaryFont};
font-size:18px;
transition:${tokens.$tr};
&:hover {
  background:${tokens.primaryColorHover}
}
&:active {
  background-color:${tokens.primaryColorPressed};
  border: 3px solid ${tokens.primaryColorBorder}
}
`

const Style = styled.a`
  color:white;
  height:100%;
  width:100%;
`
const StyleButton = styled.b`
  color:white;
  background:red;
  height:100%;
  width:100%;

`

export default function Button({
  onClick,
  href = '',
  color = 'primary',
  size = 'medium',
  style = 'fill',
  text,
  icon = null,
  iconPosition = 'before'
}: ButtonProps) {

  const hrefStart: string = href[0]

  let type: string = ''

  switch (hrefStart) {

    case 'h':
      type = 'external'
      break

    case '/':
      type = 'internal'
      break

    case '#':
      type = 'anchor'
      break

    case '':
      type = 'submit'
      break

    case 'p':
      type = 'popup'
      break

    default:
      break
  }




  return <>
    {type === 'internal'
      ? <Container>
        <Link
          href={href}
          passHref
        >
          <Style>{text}</Style>
        </Link>
      </Container>
      : type === 'external'
        ? <Container>
          <Style
            href={href}
            target='_blank'
          >
            {text}
          </Style>
        </Container>
        : type === 'anchor'
          ?
          <Container>
            <AnchorLink
              href={href}
              onClick={onClick}
            >
              <Style>
                {text}
              </Style>
            </AnchorLink>
          </Container>

          : type === 'popup'
            ? <Container>
              <StyleButton
                onClick={onClick}
              >
                {text}
              </StyleButton>
            </Container>
            : <Container>
              <StyleButton
                onClick={onClick}
              >
                {text} type=button
              </StyleButton>
            </Container>

    }
  </>
}