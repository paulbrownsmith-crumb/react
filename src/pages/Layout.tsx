import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { useAuth } from '@/lib/auth-context';

function Layout() {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <>
      <Header isAuthenticated={isAuthenticated} user={user} logout={logout} />
      <div className="min-h-screen bg-gray-50">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
