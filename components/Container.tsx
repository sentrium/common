import s from './Container.module.sass'

interface Props {
  children: any,
  className?: 'container--big' | 'container--middle' | 'container--small'
}

export default function Container({ children, className='container--big' }: Props) {

  return <div className={className}>
    {children}
  </div>
}
