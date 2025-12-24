import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
