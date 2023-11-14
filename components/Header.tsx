import Link from "next/link";

function Header() {
  return (
    <header className='py-8'>
      <nav className='flex justify-between'>
        <Link href='/shop'>Shop</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/'>Planteplaneter</Link>

        <Link href='/showspaces'>Showspaces</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
