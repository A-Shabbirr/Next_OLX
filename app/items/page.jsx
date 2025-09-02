import ItemsPage from './ItemsPage';
import React, { Suspense } from 'react';

function ItemsWrapper() {
    return (
        <Suspense fallback={<div>Loading items...</div>}>
            <ItemsPage />
        </Suspense>
    );
}

export default ItemsWrapper;
