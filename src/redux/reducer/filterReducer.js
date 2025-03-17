const initialState = {
    genre: "",
    platform: "",
    priceRange: [0, 100], // Range di prezzo (es. da 0€ a 100€)
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_GENRE":
        return { ...state, genre: action.payload };
      case "SET_PLATFORM":
        return { ...state, platform: action.payload };
      case "SET_PRICE_RANGE":
        return { ...state, priceRange: action.payload };
      default:
        return state;
    }
  };
  
  export default filterReducer;