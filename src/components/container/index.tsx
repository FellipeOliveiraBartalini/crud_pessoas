import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Container.module.scss';

export default function Container() {
    return (
        <div className={style.container}>
            <Outlet />
        </div>
    );
}
