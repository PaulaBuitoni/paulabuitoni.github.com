export default function Header({ children }: any) {
  return (
    <div className="flex">
      <header className="flex-1">
        <h1 className="text-4xl">{children}</h1>
      </header>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#videos">Videos</a></li>

        </ul>
      </nav>
    </div>
  );
}
