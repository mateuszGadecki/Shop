import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currProducer: "Canon",
  currProducts: {
    canon: [],
    fujifilm: [],
    panasonic: [],
    nikon: [],
    olympus: [],
    pentax: [],
    sigma: [],
    sony: [],
  },
};

const splitProducts = (state, action) => {
  let products = {
    canon: [],
    fujifilm: [],
    panasonic: [],
    nikon: [],
    olympus: [],
    pentax: [],
    sigma: [],
    sony: [],
  };
  for (let i = 0; i < action.products.length; i++) {
    if (action.products[i].producent === "Canon") {
      products.canon.push(action.products[i]);
    } else if (action.products[i].producent === "Panasonic") {
      products.panasonic.push(action.products[i]);
    } else if (action.products[i].producent === "FujiFilm") {
      products.fujifilm.push(action.products[i]);
    } else if (action.products[i].producent === "Nikon") {
      products.nikon.push(action.products[i]);
    } else if (action.products[i].producent === "Olympus") {
      products.olympus.push(action.products[i]);
    } else if (action.products[i].producent === "Pentax") {
      products.pentax.push(action.products[i]);
    } else if (action.products[i].producent === "Sigma") {
      products.sigma.push(action.products[i]);
    } else if (action.products[i].producent === "Sony") {
      products.sony.push(action.products[i]);
    }
  }
  return products;
};

const setProducts = (state, action) => {
  let products = splitProducts(state, action);
  return {
    ...state,
    currProducts: products,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    default:
      return state;
  }
};

export default reducer;
