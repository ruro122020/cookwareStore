// import { connectToDatabase } from "../lib/mongodb";
const db = require("../lib/mongodb");
const cartCollection = "carts";
/*Make changes to database */
const addCartDAL = async (cart) => {
  // return new Promise(async (resolve, reject) => {
  //   await db.collection(collection).insert({ cart }, (err, results) => {
  //     if (err) console.log("err", err);
  //     console.log("results", results);
  //   });
  // });
};
const addProductDAL = async () => {};
const addQuantityDAL = async () => {};

/*Checks before making changes to database*/
const checkIfCartExist = async (userId) => {
  return new Promise(async (resolve, reject) => {
    const dbState = await db.getDB();
    console.log("dbState", dbState);
    const cart = await dbState.collection(cartCollection);
    const DBCart = await cart.findOne({ userId });
    if (DBCart) {
      resolve(DBCart);
    } else {
      reject(false);
    }
  });
};

const checkIfProductExistInCart = async (productId) => {};
const checkQuantityOfProductInCart = async (quantity) => {};
export {
  addCartDAL,
  addProductDAL,
  addQuantityDAL,
  checkIfCartExist,
  checkIfProductExistInCart,
  checkQuantityOfProductInCart,
};
