import Toper from './components/Toper'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PartnersPage from './pages/Partners'
import TeamPage from './pages/Team'
import StoryAndValuesPage from './pages/StoryAndValues'
import ProgramsPage from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import SummitPage from './pages/SummitPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import ResourcesPage from './pages/ResourcesPage'
import NewsPage from './pages/NewsPage'
import Footer from './components/Footer'
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'

function AppContent() {
  const { currentPage } = useNavigation();

  const isProgramDetail = currentPage.startsWith('programs/');
  const programId = isProgramDetail ? currentPage.replace('programs/', '') : null;

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Toper />
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'partners' && <PartnersPage />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'story' && <StoryAndValuesPage />}
      {currentPage === 'programs' && <ProgramsPage />}
      {currentPage === 'summit' && <SummitPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'faq' && <FAQPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'resources' && <ResourcesPage />}
      {currentPage === 'news' && <NewsPage />}
      {isProgramDetail && <ProgramDetail programId={programId} />}
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
