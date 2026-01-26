import Sidebar from './Sidebar';
import Header from './Header';

export default function AppLayout({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-4">
        <aside className="col-12 col-md-3 col-lg-2 mb-4">
          <Sidebar />
        </aside>
        <main className="col-12 col-md-9 col-lg-10">
          {children}
        </main>
      </div>
    </div>
  );
}
