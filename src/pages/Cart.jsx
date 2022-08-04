import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount } from "./store";
import "../pages/css/cart.css";
export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div className="cart_container">
      <div className="cart_title">
        <h2>장바구니</h2>
      </div>
      <table className="cart_table">
        <thead>
          <tr>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>상품개수</th>
            <th>구매하신 총 가격</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((value, i) => {
            return (
              <tr key={i} className="cart_product">
                <td className="cart_img">
                  <img src={state.cart[i].image} alt="" />
                </td>
                <td>{state.cart[i].title}</td>
                <td className="cart_count">
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                  <div>{state.cart[i].count}</div>
                  <button
                    onClick={() => {
                      dispatch(minusCount(state.cart[i].id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{state.cart[i].price * state.cart[i].count}원</td>
                <td>
                  <button className="pur_btn">구매하기</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
