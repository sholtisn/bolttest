import {Link, NavLink} from '@remix-run/react';
import {useAside} from './Aside';

export function Header() {
  const {open} = useAside();

  return (
    <header className="bg-brand-blue text-white">
      <div className="container-padded">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png"
              alt="The Good Coffee Company"
              className="h-12"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/collections/all"
              className={({isActive}) => 
                `hover:text-brand-brown-light transition-colors ${isActive ? 'text-brand-brown-light' : ''}`
              }
            >
              Shop All
            </NavLink>
            <NavLink 
              to="/collections/coffee"
              className={({isActive}) => 
                `hover:text-brand-brown-light transition-colors ${isActive ? 'text-brand-brown-light' : ''}`
              }
            >
              Coffee
            </NavLink>
            <NavLink 
              to="/collections/equipment"
              className={({isActive}) => 
                `hover:text-brand-brown-light transition-colors ${isActive ? 'text-brand-brown-light' : ''}`
              }
            >
              Equipment
            </NavLink>
            <NavLink 
              to="/collections/gifts"
              className={({isActive}) => 
                `hover:text-brand-brown-light transition-colors ${isActive ? 'text-brand-brown-light' : ''}`
              }
            >
              Gifts
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => open('search')}
              className="p-2 hover:text-brand-brown-light transition-colors"
            >
              Search
            </button>
            <button
              onClick={() => open('cart')}
              className="p-2 hover:text-brand-brown-light transition-colors"
            >
              Cart
            </button>
            <Link 
              to="/account"
              className="p-2 hover:text-brand-brown-light transition-colors hidden md:block"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}