import { NavLink } from 'react-router-dom';
import MUI from 'components/MUI.js';

export default function AuthNav() {
    return (
        <>
            <NavLink to="/register">
                <MUI.Button>
                Register
                </MUI.Button>
            </NavLink>

            <NavLink to="/login">
                <MUI.Button>
                    LogIn
                </MUI.Button>
            </NavLink>
        </>      
    )
}