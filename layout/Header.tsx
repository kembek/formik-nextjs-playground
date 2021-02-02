import Link from 'next/link';

export function Header() {
  return (
    <>
      <a href="#content" className="screenreader-text" title="Skip to content">
        Skip to content
      </a>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a title="Home page">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/form-page">
                <a title="Form page">Form</a>
              </Link>
            </li>
            <li>
              <Link href="/table-page">
                <a title="Table page">Table</a>
              </Link>
            </li>
            <li>
              <Link href="/media-page">
                <a title="Media page">Media</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
