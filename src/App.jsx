import Toper from './components/Toper'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PartnersPage from './pages/Partners'
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
