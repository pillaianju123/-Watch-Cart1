import { useContext, useState } from "react";
import { Row,Col,Card,Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./Context";

export default function Hudolt() {
    const { product,wish,setWish,addcart,setAddCart,watch } = useContext(myContext);
    const nav = useNavigate();
    const HudlotWatch = watch.filter((data)=> data.Brand === "Hudlot");
    // console.log("patek",Watch);
    // const [filterData, setFilteredData] = useState(watch);
    function handleClick(){

    }
    function wishbtn(watches) {
      if (wish.includes(watches)) {
        setWish(wish.filter((item) => item !== watches));
      } else {
        setWish([...wish, watches]);
        nav("/wish");
      }
    }

    
      function cartbtn(watches) {
        if (addcart.includes(watches)) {
          setAddCart(addcart.filter((item) => item !== watches));
        } else {
          setAddCart([...addcart, watches]);
          nav("/cart");
        }
      }
    // function wishbtn(){

    // }
    // function cartbtn(){

    // }
    return(

<div>
    <h1 style={{textAlign:"center",backgroundColor:"grey"}}>Hudlot</h1>
    <Row xs={1} md={3} className=".fr">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col">
              <Row key={idx} className="row"></Row>
              {HudlotWatch.map((item) => (
                  <Card className="card">
                    <div className="img-cl">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="img"
                        onClick={() => handleClick(item.title)}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="txt">{item.title} </Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      <Button className="wish" onClick={() => wishbtn(item)}>
                        {wish.includes(item)
                          ? "Remove from wishlist"
                          : "Add to Wishlist"}
                      </Button>
                      <Button className="add" onClick={() => cartbtn(item)}>
                        {addcart.includes(item)
                          ? "Remove from Cart"
                          : "Add to cart"}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          ))}
        </Row>
      </div>
   
    
        );
        
}

// export default Carts;

