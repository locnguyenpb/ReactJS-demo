import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (loginState.isSignedIn) {
      product.userId = loginState.userId;
      dispatch(addCart(product));
    } else {
      navigate('/login');
    }
  };

  const { isLoading, data, error } = useQuery(["fetchProducts"], () =>
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      return res.data;
    }),
    {
      refetchOnWindowFocus: false
    }
  );

  if (error) return "An error has occurred: " + error.message;

  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     setProduct(await response.json());
  //     setLoading(false);
  //   };
  //   getProduct();
  // }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex">
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {isLoading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
