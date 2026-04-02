import Navbar from '../components/Navbar'
import HeroSection from '../components/sections/HeroSection'
import ProblemSection from '../components/sections/ProblemSection'
import SolutionSection from '../components/sections/SolutionSection'

const Home: React.FC = () => (
  <>
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  </>
)

export default Home
