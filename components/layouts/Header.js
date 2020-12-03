import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Navbar } from "react-bootstrap";
import Router from "next/router";
import Head from "next/head";

const handleClickIndex = () => Router.push({ pathname: "/" });
const routes = [
  // { href: "/", label: "Home" },
  { href: "/", label: "Technology" },
  { href: "/#about", label: "Design" },
  { href: "/#solution", label: "Solution" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];
export default function Header() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>AST</title>
      </Head>
      <Navbar sticky="top" bg="light" variant="light">
        <Nav className="container flex nav-fill flex-wrap flex-sm-row mr-auto">
          <Navbar.Brand>
            <a onClick={() => handleClickIndex()}>
              <img src="/logo-title.png" alt="AST" width="50" height="40" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar className="nav-right text-uppercase ">
            <Navbar.Collapse id="responsive-navbar-nav">
              {routes.map((route) => (
                <li key={route.label}>
                  <Link href={route.href}>
                    <a
                      className={`px-3 js-scroll-trigger${(router.pathname = route.href
                        ? "text-500"
                        : "")}`}
                    >
                      {route.label}
                    </a>
                  </Link>
                </li>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </Nav>
        
      </Navbar>
    </>
  );
}

Header;
