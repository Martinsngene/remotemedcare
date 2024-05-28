import Image from 'next/image'
import TheLogo from '@/images/professionals/logo.png'

export function Logo() {
  return <Image width={200} height={50} alt="" src={TheLogo} />
}
