import stars from '../../assets/stars.png'
import '../style.css'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

function SignSelectionPage() {
  const navigate = useNavigate()
  const { firstSign } = useParams<{ firstSign: string }>()

  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

  const handleButtonClick = (sign: string) => {
    navigate(`/result/${firstSign}/${sign}`)
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

export default SignSelectionPage
