import { useContext, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { myContext } from "./Context";

export default function Product() {
  const { watch, setWatch } = useContext(myContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [Brand, setBrand] = useState("");
  const [edit, setEdit] = useState(null);

  const tableStyle = {
    width: "1300px",
    boxShadow: "2px 3px 4px 5px",
    marginLeft: "100px"
  };

  function Edit(index) {
    const editedProduct = watch[index];
    setTitle(editedProduct.title);
    setText(editedProduct.text);
    setBrand(editedProduct.Brand);
    setEdit(index);
  }

  function Delete(index) {
    const updatedProduct = watch.filter((item, i) => i !== index);
    setWatch(updatedProduct);
  }

  function submit() {
    if (edit !== null) {
      const updatedProducts = watch.map((item, index) =>
        index === edit ? { title: title, text: text, Brand: Brand } : item
      );
      setWatch(updatedProducts);
      setEdit(null);
    } else {
      setWatch([...watch, { title: title, text: text, Brand: Brand }]);
    }
    setTitle('');
    setText('');
    setBrand('');
  }

  return (
    <div>
      <div className="manage">
        <h1 style={{ textAlign: "center", fontStyle: "italic" }}>Manage Products</h1>
      </div>
      <div className="title">
        <label>Product Title :</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w" placeholder="Enter product title" />
        <div className="Price">
          <label>Product Text :</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="q" placeholder="Enter product text" />
          <div className="Brand">
            <label>Product Brand :</label>
            <input value={Brand} onChange={(e) => setBrand(e.target.value)} type="text" className="w" placeholder="Enter product brand" />
            <button onClick={submit} className="addbtn">
              {edit !== null ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Product Title</th>
            <th>Product Text</th>
            <th>Product Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {watch.map((data, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left" }}>{data.title}</td>
              <td>{data.text}</td>
              <td>{data.Brand}</td>
              <td>
                <button className="ebtn" onClick={() => Edit(index)}>Edit</button>
                <button className="dbtn" onClick={() => Delete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
