import React from 'react';
import {useGetUser} from "../../core/application/hooks/useGetUser.ts";
import {useLogout} from "../../core/application/hooks/useLogout.ts";

export const Navbar = () => {
    const user = useGetUser();
    const logout = useLogout();
    return (
        <>
            { user ? (
                <div className='w-full fixed flex justify-between px-20 py-8 border-b-2 items-center bg-blue-500'>
                    <h1 className='text-xl'>Task.MG</h1>
                    <div>
                        <h2 className='-mb-2 text-center'>{user?.firstname} {user?.lastname}</h2>
                        <span className='text-xs text-white'>#{user?.id}</span>
                    </div>
                    <button className='bg-red-700 px-2 rounded-lg' onClick={logout}>Deconnexion</button>
                </div>
            ) : (
                <div className='w-full fixed flex justify-between px-20 py-8 border-b-2 items-center bg-blue-500'>
                    <h1 className='text-xl'>Task.MG</h1>
                    <div className='flex gap-5'>
                        <a href='/sign-in'>Connexion</a>
                        <a href='/sign-up'>Inscription</a>
                    </div>
                </div>
            )}

        </>
    );
};