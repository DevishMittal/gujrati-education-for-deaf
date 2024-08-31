import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' role='button'>
            <Link to="/" >
            <MDBIcon fas icon="home" />
            </Link>
          
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' role='button'>
            <Link to="/courses">
            <MDBIcon fas icon="book-open" />
            </Link>
          
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' role='button'>
          <Link to="/assessment">
          <MDBIcon fas icon="question-circle" />
          </Link>
      
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' role='button'>
            <Link to="/Contact">
            <MDBIcon fas icon="phone-alt" />
            </Link>
          
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p className='text-white'>
          Learn Echo
        </p>
      </div>
    </MDBFooter>
  );
}