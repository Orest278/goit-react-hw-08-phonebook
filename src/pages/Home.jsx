import MUI from "components/MUI";
import s from './style.module.css'

export default function Home() {
    return (
        <>
            <MUI.Typography
                className={s.Home}
                variant="h2">
                Phonebook
            </MUI.Typography>
        </>
    )
}