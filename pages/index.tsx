import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <div style={{
        backgroundImage: 'url("./background_homepage.jpg")',
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "blur(9px)"

      }}>
      </div>
      <div style={{
        top: "50%",
        left: "50%",
        zIndex: 2,
        position: "absolute"
      }}>
      </div>
    </div>

  )
}

export default Home
