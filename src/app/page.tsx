import Image from "next/image"

const Home = () => (
  <div>
    <Image
      className="object-contain max-w-[300px] w-full h-auto"
      src="/logo.png"
      alt="Darkerzard Super Effective!"
      fill
    />
  </div>
)

export default Home
