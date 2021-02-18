import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currProducer: "Canon",
  currProduct: null,
  currProducts: {
    Canon: [],
    FujiFilm: [],
    Panasonic: [],
    Nikon: [],
    Olympus: [],
    Pentax: [],
    Sigma: [],
    Sony: [],
  },
};

const splitProducts = (state, action) => {
  let products = {
    Canon: [],
    FujiFilm: [],
    Panasonic: [],
    Nikon: [],
    Olympus: [],
    Pentax: [],
    Sigma: [],
    Sony: [],
  };
  for (let i = 0; i < action.products.length; i++) {
    if (action.products[i].producent === "Canon") {
      products.Canon.push(action.products[i]);
    } else if (action.products[i].producent === "Panasonic") {
      products.Panasonic.push(action.products[i]);
    } else if (action.products[i].producent === "FujiFilm") {
      products.FujiFilm.push(action.products[i]);
    } else if (action.products[i].producent === "Nikon") {
      products.Nikon.push(action.products[i]);
    } else if (action.products[i].producent === "Olympus") {
      products.Olympus.push(action.products[i]);
    } else if (action.products[i].producent === "Pentax") {
      products.Pentax.push(action.products[i]);
    } else if (action.products[i].producent === "Sigma") {
      products.Sigma.push(action.products[i]);
    } else if (action.products[i].producent === "Sony") {
      products.Sony.push(action.products[i]);
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

const setCurrProduct = (state, action) => {
  const updateProduct = action.product;
  return {
    ...state,
    currProduct: updateProduct,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    case actionTypes.SET_CURRENT_PRODUCT:
      return setCurrProduct(state, action);
    default:
      return state;
  }
};

export default reducer;
