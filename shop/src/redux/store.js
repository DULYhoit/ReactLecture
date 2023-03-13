import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "서성완", age: 20 },
  reducers: {
    setUser(state) {
      state.name = "김석수";
    },
    setAge(state, a) {
      state.age += a.payload;
    },
  },
});

export let { setUser, setAge } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    gocart(prams, item) {
        var stop = 1;
       var checking = prams.findIndex(x=>{
            return x.id == item.payload.id;
        })
      console.log(checking);
      console.log(item.payload);
      if(checking != -1){
        prams[checking].count +=1;
      }else{
        prams.push(item.payload)
        
      }
    },
    plusNum(prams, item) {
      //기존오브젝트의 id가 가져온 item값이랑 같으면 count +1

      prams.map((x) => {
        if (x.id == item.payload) {
          x.count += 1;
        }
      });
    },
  },
});
export let { gocart, plusNum } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
