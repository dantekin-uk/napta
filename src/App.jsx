import Toper from './components/Toper'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PartnersPage from './pages/Partners'
import TeamPage from './pages/Team'
import StoryAndValuesPage from './pages/StoryAndValues'
import Footer from './components/Footer'
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Toper />
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'partners' && <PartnersPage />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'story' && <StoryAndValuesPage />}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}

export default App
