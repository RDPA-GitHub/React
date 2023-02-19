import React from "react";
import { Lista } from "./components/Lista";
import { frameworks, languages, users } from "./data";
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";
import CardImg from "./components/Card/CardImg";
import CardBody from "./components/Card/CardBody";
import CardFooter from "./components/Card/CardFooter";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Lista data={languages} />
          <Lista data={frameworks} />
        </div>
      </div>
      <div className="row">
       
          {
            users.map((Elemento) => {
              return (
                <div className="col-md-4 my-2" key={Elemento.id}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title">
                      User {Elemento.id}
                    </h4>
                  </CardHeader>
                  <CardImg src= {Elemento.avatar} />
                  <CardBody className = {"card-body"}>
                    <p className="card-text">{Elemento.name}</p>
                  </CardBody>
                  <CardFooter >
                    &copy; 2023 Derechos Reservados
                  </CardFooter>
                </Card>
              </div>
              )
            }) 
          }
      </div>
      <div className="row py-2">
        <div className="col-md-4">
          <Card>
            <CardImg src="https://picsum.photos/id/300/300/200" />
            <CardBody className = {"card-body"}>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </CardBody>
            <CardFooter >
              &copy; 2023 Derechos Reservados
            </CardFooter>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardImg src="https://picsum.photos/id/876/300/200" />
            <CardBody className = {"card-body"}>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </CardBody>
            <CardFooter>
              &copy; 2023 Derechos Reservados
            </CardFooter>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardImg src="https://picsum.photos/id/400/300/200" />
            <CardBody className = {"card-body"}>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </CardBody>
            <CardFooter>
              &copy; 2023 Derechos Reservados
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;