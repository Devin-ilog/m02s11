import { useState } from "react";
import Button from "./components/Button/Button";
import { ThemeProvider } from "styled-components";
import { temaUm, temaDois } from "./styles";

import ButtonBoostrap from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? temaDois : temaUm}>
      <div className="App">
        <h1>m02s11 - bootstrap</h1>

        <div className="d-flex justify-content-between">
          <Button>StyledComponent</Button>

          <ButtonBoostrap variant="primary">Botão do Bootstrap</ButtonBoostrap>

          <Alert>Alerta bootstrap!</Alert>
        </div>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://programadoresdepre.com.br/wp-content/uploads/2022/03/linux.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ASNDJKASNDJK</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://programadoresdepre.com.br/wp-content/uploads/2022/03/linux.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ASNDJKASNDJK</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </ThemeProvider>
  );
}

export default App;
