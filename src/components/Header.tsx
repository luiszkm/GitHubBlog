import logo from '../assets/LogoHeader.svg'



export function Header () {


  return(
    <div className='flex items-center justify-center bg-hero-pattern w-full h-[298px] bg-cover'>
      <img src={logo} alt="logo escrita Github blog" />
    </div>
  )
}