import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CreateVideo() {
  return (
    <PageDefault>
      <h1>Create video</h1>

      <Link to="/create/category">
        Create category
      </Link>
    </PageDefault>
  );
}

export default CreateVideo;
