import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

function VendorCard({ vendorObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vendorObj.image} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{vendorObj.username}</Card.Title>
        <Card.Text>
          {vendorObj.firstName} {vendorObj.lastName}
        </Card.Text>
        <Link href={`/vendors/${vendorObj.id}`} passHref>
          <Button variant="primary">View Store</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

VendorCard.propTypes = {
  vendorObj: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default VendorCard;
