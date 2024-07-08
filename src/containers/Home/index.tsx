import stars from '../../assets/stars.png'
import '../style.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

function Home() {
  const navigate = useNavigate()

  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  
  const handleButtonClick = (sign: string) => {
    navigate(`/sign-selection/${sign}`)
  }

  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <h1>Select a sign</h1>
      <div>
        {signs.map((sign) => (
          <Button key={sign} name={sign} onClick={() => handleButtonClick(sign)} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Home
