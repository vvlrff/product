import Container from "Shared/ui/Container/ui/Container";
import { Link } from "react-router-dom";
import Button from "Shared/ui/Button";
import useTheme from "Shared/lib/hooks/useTheme";

import s from "./Header.module.scss";

const Header = () => {
    const { theme, toggleTheme } = useTheme()

    return(
        <header className={s.header}>
            <Container className={s.container}>
                <div className={s.links}>
                    <Link className={s.link} to={"/"}>Logo</Link>
                    <Link className={s.link} to={"/about"}>About</Link>
                </div>
                <div className={s.controls}>
                    <Button onClick={toggleTheme}>Change theme</Button>
                </div>
            </Container>
        </header>
    )
}

export default Header;