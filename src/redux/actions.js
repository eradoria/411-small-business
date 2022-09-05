const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addListing = (listing) => {
  return {
    type: "ADD_Listing",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_Listing",
    value: index,
  };
};

// export const fetchMakes = () => {
//   return (dispatch) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const action = {
//           type: "FETCH_MAKES",
//           value: data.Results,
//         };

//         dispatch(action);
//       });

      
//   };
// };

// export const deleteMake = (index) => {
//     return {
//       type: "DELETE_MAKE",
//       value: index,
//     };
//   };
