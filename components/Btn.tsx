import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: any
  text?: string
  icon?: any
  iconPosition?: 'before' | 'after'
  className: string
  disabled?: any
}

export default function Button({
  onClick,
  href = '',
  text,
  className,
  icon = null,
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

      ? <Link
        {...{
          href,
          className
        }}
      >
        {buttonContent()}
      </Link>

      : type === 'external' && href

        ? <a
          rel='noreferrer'
          target='_blank'
          {...{
            href,
            className
          }}
        >
          {buttonContent()}
        </a>

        : type === 'anchor' && href

          ? <a
            {...{
              href,
              className
            }}
          >
            {buttonContent()}
          </a>

          : type === 'popup' && onClick

            ? <button
              {...{
                onClick,
                className
              }}
            >
              {buttonContent()}
            </button>

            : <button
              type='submit'
              {...{
                className
              }}
            >
              {buttonContent()}
            </button>

    }
  </>
}