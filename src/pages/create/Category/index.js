import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CreateCategory() {
    return (
        <PageDefault>
            <h1>Create category</h1>
            
            <Link to="/">
                    Back to home
            </Link>
        </PageDefault>
    )
}

export default CreateCategory;