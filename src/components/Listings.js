import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {Link, useParams } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete";

const Listings = (props) => {
    console.log("props being called here",props)

    let id = useParams();
	console.log("id being pulled",id);

  return (
    <Container maxWidth="lg" className="car-container">
      <h4>Welcome, {props.user.username}</h4>
      <div className="flex-container">
        {/* <AddCar carTotal={props.cars.length} /> */}
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Business</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Operating Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((store, idx) => (
            <TableRow key={store.id}>
              {/* <TableCell component="th" scope="row">
                {store.id}
              </TableCell> */}
              <TableCell > <Link to={`/Listings/${store.id}`}>{store.business}</Link></TableCell>
             
              <TableCell>{store["description"]}</TableCell>
              <TableCell>{store["address"]}</TableCell>
              <TableCell>{store["open"]}</TableCell>
              <TableCell>
                <DeleteIcon
                  // add onClick method here
                  onClick={() => props.removeListing(idx)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
