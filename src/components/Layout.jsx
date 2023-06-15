import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import AppBar from "./AppBar/AppBar";

import MUI from 'components/MUI';

export default function Layout() {
    return (
        <>
            <AppBar />
            <MUI.Container>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet/>
                </Suspense>
            </MUI.Container>
        </>
    )
};