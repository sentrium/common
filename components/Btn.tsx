import Link from 'next/link'
import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface ButtonProps {
  href: string,
  onClick?: any,
  text?: string,
  icon?: string | null,
  iconPosition?: 'before' | 'after'
  className: string
}

// color?: 'primary' | 'secondary' | 'blue'|navigation,
// size?: 'small' | 'medium' | 'big' | 'huge',
// style?: 'fill' | 'outline' | 'transparent',

export default function Button({
  onClick,
  href = '',
  text,
  className,
  icon = null,
  iconPosition = 'before'
}: ButtonProps) {

  const buttonContent = () => (
    iconPosition === 'after'
      ? <>
        {text}
        {icon &&
          <Image
            src={icon}
            alt={text}
            title={text} />
        }
      </>
      : iconPosition === 'before'
        ? <>
          {icon &&
            <Image
              src={icon}
              alt={text}
              title={text} />
          }
          {text}
        </>
        : <>
          {text}
        </>
  )

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

      ? <Link href={href}>
        <a className={className}>
          {buttonContent()}
        </a>
      </Link>

      : type === 'external'

        ? <a
          href={href}
          rel='noreferrer'
          target='_blank'
          className={className}
          onClick={onClick}
        >
          {buttonContent()}
        </a>

        : type === 'anchor'

          ? <AnchorLink
            href={href}
            className={className}
            onClick={onClick}
          >
            {buttonContent()}
          </AnchorLink>

          : type === 'popup'

            ? <button
              className={className}
              onClick={onClick}
            >
              {buttonContent()}
            </button>

            : <button
              type='submit'
              onClick={onClick}
              className={className}
            >
              {buttonContent()}
            </button>

    }


  </>
}