import { MainFooterLayout } from "../MainFooter";
import { MainNavLayout } from "../MainNav";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pageContainer">
      <header className="mainHeader">
        <MainNavLayout />
      </header>
      <main className="mainContainer">
        <div className="wrapper">
          <div className="main">{children}</div>
        </div>
      </main>

      <footer className="mainFooter">
        <MainFooterLayout />
      </footer>
    </div>
  );
};
