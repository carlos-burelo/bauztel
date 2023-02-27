import _ from './AboutUs.module.scss'
import Image from 'next/image'
import Button from '#/shared/components/elements/Button'

const AboutUs: FC = () => {
  return (
    <div className={_.aboutUs}>
      <Image
        className={_.img}
        alt="About Us"
        height={500}
        width={300}
        src="/machine.jpg"
        priority
      />
      <div className={_.box}>
        <h2 className={_.title}>About Us</h2>
        <p className={_.decription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore unde rerum, corrupti perspiciatis voluptas ipsam sapiente quam, facilis accusamus labore atque numquam dolorem a quis aut! Fugiat, officiis tenetur. Error a expedita qui porro non consectetur aperiam magni eius neque. Fugiat tempore adipisci dignissimos velit provident? Libero, necessitatibus qui.
        </p>
        <Button href="/wholesale" text="Join us now!" fit />
      </div>
    </div>
  )
}

export default AboutUs
