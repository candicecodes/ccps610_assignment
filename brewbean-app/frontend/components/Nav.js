import Link from 'next/link';

const Nav = () => (
    <div>
        {/* const Nav is equal to a stateless functional component */}
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
)

export default Nav;