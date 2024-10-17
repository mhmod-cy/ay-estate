import { ROUTES } from "@/routes/routes";
import Link from "next/link";
import navbarLinks from "../../public/data/navbar.json";
import { Container } from "../shared/container";
import { Logo } from "../shared/logo";
import { Button } from "../ui/button";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <Container className="flex justify-between items-center py-[22px]">
        <Link href={ROUTES.home.path}>
          <Logo />
        </Link>
        <div className="flex items-center gap-[50px]">
          {navbarLinks.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
        <Link href={ROUTES.contactUs.path}>
          <Button size={"xl"}>Contact us</Button>
        </Link>
      </Container>
    </header>
  );
};
