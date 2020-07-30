import React from 'react';
import Button from '../../components/Menu/components/Button';
import { Link } from 'react-router-dom';

function Page404() {
    return (
      <div style={{color:"red", background: "#141414"}}> Error 404 - Page not found! :'( 
        <br></br>
        <Button as={Link} to="/" className="ButtonLink">
            Voltar pra home
        </Button>
      </div>
    )
  }

export default Page404;