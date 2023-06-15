import useAuth  from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations.js';
import MUI from 'components/MUI.js';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <>
            <MUI.Box className={s.div}>
                <MUI.Box>
                    <p className={s.pashca}>Hi, {user.name}!</p>
                    <p className={s.pashca}>Email:{user.email}</p>
                </MUI.Box>
                <MUI.Button
                    onClick={() => dispatch(logOut())}>
                    Log Out
                </MUI.Button>
        </MUI.Box>
        </>
    )
}