import { FC } from "react"
import Container from "Shared/ui/Container";

import s from "./Footer.module.scss";

const Footer:FC = () => {
    return(
        <footer className={s.footer}>
            <Container>footer</Container>
        </footer>
    )
}

export default Footer