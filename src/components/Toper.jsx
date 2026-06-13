import { useNavigation } from '../contexts/NavigationContext';

function Toper() {
  const { navigateTo } = useNavigation();
  
  return (
    <div className="bg-napta-green py-1">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Contact Info (Hidden on Mobile) */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 text-white text-xs md:text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +254 719 282 866 / +254 741 024 622
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: info@napta.or.ke
            </span>
          </div>

          {/* Links (Visible on All Screens) */}
          <div className="flex items-center justify-around w-full sm:w-auto gap-2 sm:gap-6 py-0.5">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('blog');
              }}
              className="text-white text-[11px] sm:text-xs md:text-sm hover:text-napta-navy transition-colors font-medium"
            >
              Blogs
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('news');
              }}
              className="text-white text-[11px] sm:text-xs md:text-sm hover:text-napta-navy transition-colors font-medium"
            >
              News
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('faq');
              }}
              className="text-white text-[11px] sm:text-xs md:text-sm hover:text-napta-navy transition-colors font-medium"
            >
              FAQs
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('contact');
              }}
              className="text-white text-[11px] sm:text-xs md:text-sm hover:text-napta-navy transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toper