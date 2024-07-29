import React from 'react';
import notFound from '../assets/404.svg';

export const NotFound = () => {
    return (
        <>
            <div className='flex h-screen flex-col justify-center items-center'>
                <h1 className='text-4xl'>OOPS!!!</h1>
                <p>404 not found</p>
            </div>
        </>
    );
};