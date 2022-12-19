import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface ButtonProps {
  href?: string
  onClick?: any
  text?: string
  icon?: any
  iconPosition?: 'before' | 'after'
  disabled?: boolean
  className: string
}

export default function Button({
  onClick,
  href = '',
  text,
  className,
  icon = null,
  disabled = false,
  iconPosition = 'before',
}: ButtonProps) {

  const buttonContent = () => <>
    {iconPosition === 'before' && icon &&
      <span className='spanImg icon-before'>
        {icon}
      </span>
    }
    {text}
    {iconPosition === 'after' && icon &&
      <span className='spanImg icon-after'>
        {icon}
      </span>
    }
  </>

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
      break;

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
    {type === 'internal' && href
      ? <Link {...{ href }}>
        <a {...{ disabled, className }}>
          {buttonContent()}
        </a>
      </Link>
      : type === 'external' && href
        ? <a
          rel='noreferrer'
          target='_blank'
          {...{ href, disabled, className }}
        >
          {buttonContent()}
        </a>
        : type === 'anchor' && href
          ? <AnchorLink {...{ href, disabled, className }}>
            {buttonContent()}
          </AnchorLink>
          : type === 'popup' && onClick
            ? <button {...{ onClick, disabled, className }}>
              {buttonContent()}
            </button>
            :
            <button
              type='submit'
              {...{ disabled, className }}
            >
              {buttonContent()}
            </button>
    }
  </>
}