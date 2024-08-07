import Link from 'next/link';
import React from 'react';

export const metadata = {
    title : 'Next.js | 404',
    description : 'this is 404 page for my next.js app'
}

const NotFound = () => {
    return (
        <div className='flex mx-auto justify-center min-h-screen items-center'>
            <div className='font-serif space-y-3 text-center'>
                <h1 className='text-7xl text-red-600'>404</h1>
                <p className='text-2xl text-red-700'>Page Not Found !!!</p>
                <Link className='btn btn-sm' href="/">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;