import React from 'react';
const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1> Contact</h1>
      <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
        Explore our services . We hope that you'll like it .   feel free to reach out. </p> <p> <strong>Phone:</strong>{" "} <a href="tel:+919876543210" style={{ color: "#0d6efd", textDecoration: "none" }}> +91 7009625353 </a> </p> <p> <strong>Email:</strong>{" "} <a href="mailto:vanshbehal654@example.com" style={{ color: "#0d6efd", textDecoration: "none" }}> vanshbehal654@example.com </a> </p> </div>);
}; export default NotFound;