import { FC, ReactNode } from "react";

import useTheme from "Shared/lib/hooks/useTheme";
import Button from "Shared/ui/Button";

import s from "./ToggleThemeButton.module.scss";

interface IToggleThemeButton {
    children: ReactNode,
}

const ToggleThemeButton: FC<IToggleThemeButton> = ({children}, ...otherProps) => {
    const { toggleTheme } = useTheme()

    return(
        <Button
            className={s.button}
            onClick={toggleTheme}
            {...otherProps}
        >{children}</Button>
    )
}


export default ToggleThemeButton