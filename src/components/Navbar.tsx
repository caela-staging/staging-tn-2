import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import truenorthLogo from '/Images/True North_text badge black (1).svg';
import { motion, AnimatePresence } from 'motion/react';
import { CompassButton } from '@/components/ui/compass-button';

const coachingLinks = [
  { label: 'Marketing Coaching', to: '/coaching/marketing' },
  { label: 'Sales Coaching', to: '/coaching/sales' },
  { label: 'Operations Coaching', to: '/coaching/operations' },
];

const whoWeServeLinks = [
  { label: 'HVAC', to: '/who-we-serve/hvac' },
  { label: 'Plumbing', to: '/who-we-serve/plumbing' },
  { label: 'Electrical', to: '/who-we-serve/electrical' },
  { label: 'Garage Doors', to: '/who-we-serve/garage-doors' },
  { label: 'Other Trades', to: '/who-we-serve/other-trades' },
];

function DropdownMenu({ links }: { links: { label: string; to: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3 z-50"
    >
      <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] overflow-hidden">
        <div className="py-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative flex items-center gap-3 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
            >
              {/* Left accent bar */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-primary rounded-r-full transition-all duration-200 group-hover:h-full" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NavDropdown({ label, to, links }: { label: string; to: string; links: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={to}
        className="relative flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-14px)]"
        aria-expanded={open}
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </Link>
      <AnimatePresence>
        {open && <DropdownMenu links={links} />}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  label,
  links,
  onClose,
}: {
  label: string;
  links: { label: string; to: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 text-2xl font-heading uppercase text-foreground hover:text-primary transition-colors w-full"
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 pt-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="text-lg font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinkClass = "relative text-sm font-semibold uppercase tracking-wider text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-border/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50">
          <img src={truenorthLogo} alt="True North Strategies" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav + Actions */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link to="/" className={navLinkClass}>Home</Link>
            <Link to="/about" className={navLinkClass}>About</Link>
            <NavDropdown label="Coaching" to="/coaching" links={coachingLinks} />
            <NavDropdown label="Who We Serve" to="/who-we-serve" links={whoWeServeLinks} />
            <Link to="/events" className={navLinkClass}>Events</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <CompassButton to="/connect" className="px-6 py-3 text-sm">Book Discovery Call</CompassButton>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-background flex flex-col justify-center items-center gap-6 lg:hidden z-[48] overflow-y-auto py-20 px-6"
            >
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading uppercase text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading uppercase text-foreground hover:text-primary transition-colors">About</Link>
              <MobileAccordion label="Coaching" links={coachingLinks} onClose={() => setMobileMenuOpen(false)} />
              <MobileAccordion label="Who We Serve" links={whoWeServeLinks} onClose={() => setMobileMenuOpen(false)} />
              <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading uppercase text-foreground hover:text-primary transition-colors">Events</Link>
              <CompassButton to="/connect" onClick={() => setMobileMenuOpen(false)} className="mt-4">Book Discovery Call</CompassButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
