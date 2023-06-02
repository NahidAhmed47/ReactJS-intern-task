import React from "react";
import { getUserData } from "../../utils/localStorage";
import Table from "react-bootstrap/Table";

const AllBookings = () => {
  const bookings = getUserData();
  console.log(bookings);
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
      {
        bookings.length > 0 ? <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No.</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Ticket No.</th>
            <th>Show Id</th>
          </tr>
        </thead>
        <tbody>
            {
              bookings?.map((booking, index)=> <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.user_name}</td>
                <td>{booking.email}</td>
                <td>{booking.ticketSL}</td>
                <td>{booking.showId}</td>
              </tr>)
            }
          
        </tbody>
      </Table> : <p><i>No bookings found!</i></p>
      }
    </div>
  );
};

export default AllBookings;
