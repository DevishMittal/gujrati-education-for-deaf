import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-3 pb-0'>
        <section className='mb-3'>
          <Link to="/" role='button'>
            <MDBBtn outline color="light" floating className='m-1'>
              <MDBIcon fas icon="home" />
            </MDBBtn>
          </Link>

          <Link to="/courses" role='button'>
            <MDBBtn outline color="light" floating className='m-1'>
              <MDBIcon fas icon="book-open" />
            </MDBBtn>
          </Link>

          <Link to="/assessment" role='button'>
            <MDBBtn outline color="light" floating className='m-1'>
              <MDBIcon fas icon="question-circle" />
            </MDBBtn>
          </Link>

          <Link to="/contact" role='button'>
            <MDBBtn outline color="light" floating className='m-1'>
              <MDBIcon fas icon="phone-alt" />
            </MDBBtn>
          </Link>
        </section>
      </MDBContainer>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        <p className='text-white'>
          SAHARO || સહારો
        </p>
      </div>
    </MDBFooter>
  );
}
