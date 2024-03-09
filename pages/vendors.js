import React, { useEffect, useState } from 'react';
import { getVendors } from '../api/userData';
import VendorCard from '../components/cards/VendorCard';

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const getAllVendors = () => {
    getVendors().then(setVendors);
  };
  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <div>
      {vendors.map((v) => (
        <VendorCard key={v.id} vendorObj={v} onUpdate={getAllVendors} />
      ))}
    </div>
  );
}
