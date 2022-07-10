import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
      <br></br>
      <Container>
        <h1>Bak Zhangs</h1>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <Card
            // bg={"Secondary".toLowerCase()}
            // key={"Secondary"}
            // text={"Secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            // className="mb-2"
          >
              <Card.Img variant="top" src="/Images/BakZhang.png" />
              <Card.Body>
                <Card.Title>Bak Zhang</Card.Title>
                <Card.Text>
                With mung beans, dried shrimps, chestnut, Chinese mushrooms, salted egg yolk and pork belly
                </Card.Text>
                <Button variant="primary">£4.1/Zhang</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/NyonyaZhang.png" />
              <Card.Body>
                <Card.Title>Nyonya Zhang</Card.Title>
                <Card.Text>
                  Diced pork, diced Chinese mushrooms and diced diced winter melon, with seasoning of white pepper and roasted grounded coriander seeds powder
                </Card.Text>
                <Button variant="primary">£3.9/Zhang</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <h1>Savoury</h1>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/PulutUdang.png" />
              <Card.Body>
                <Card.Title>Pulut Udang/Panggang</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£2.0/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/SiewBaoPork.png" />
              <Card.Body>
                <Card.Title>Pork Siew Bao</Card.Title>
                <Card.Text>
                  Baked roasted pork buns
                </Card.Text>
                <Button variant="primary">£1.8/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/CurryPuffs.png" />
              <Card.Body>
                <Card.Title>Curry Puffs</Card.Title>
                <Card.Text>
                Chicken sweet potatoes curry puffs <br></br>
                Beef Rendang potatoes curry puffs <br></br>
                Sardines and potatoes curry puffs <br></br>
                </Card.Text>
                <Button variant="primary">£2.0/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/PngKuih.png" />
              <Card.Body>
                <Card.Title>Png Kuih</Card.Title>
                <Card.Text>
                  Peach shaped steamed rice kuih with the fillings of glutinous rice, Chinese sausage, Chinese mushrooms, dried shrimps
                </Card.Text>
                <Button variant="primary">£10.50/10pcs<br></br>£5.5/5pcs</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/ChaiKuih.png" />
              <Card.Body>
                <Card.Title>Chai Kuih</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£6.80/5pcs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/TauYewBak.png" />
              <Card.Body>
                <Card.Title>Tau Yew Bak</Card.Title>
                <Card.Text>
                Braised belly, Chinese mushrooms and eggs in dark soya sauce, star anise and cinnamon
                </Card.Text>
                <Button variant="primary">£10.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/MeeRebus.png" />
              <Card.Body>
                <Card.Title>Mee Rebus</Card.Title>
                <Card.Text>
                  Egg noodles with fish cakes, prawns, bean sprouts and prawns fritters
                </Card.Text>
                <Button variant="primary">£8.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/Acar.png" />
              <Card.Body>
                <Card.Title>Nyonya Acar Awak</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£6.00/500g</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/WuTaoKo.png" />
              <Card.Body>
                <Card.Title>Wu Tao Ko</Card.Title>
                <Card.Text>
                  Savoury yam and dried shrimp dish
                </Card.Text>
                <Button variant="primary">£8.90/tray</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/HakkaYamAbacus.png" />
              <Card.Body>
                <Card.Title>Hakka Yam Abacus</Card.Title>
                <Card.Text>
                  Hakka Style Yam and Abacus
                </Card.Text>
                <Button variant="primary">£7.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/NasiLemakBungkus.png" />
              <Card.Body>
                <Card.Title>Nasi Lemak Bungkus</Card.Title>
                <Card.Text>
                  Fragrant coconut rice served with sambal, ikan bilis, egg, vegetables and peanuts wrapped in a banana leaf
                </Card.Text>
                <Button variant="primary">£4.00/bungkus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <h1>Curry</h1>
      <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/KapitanChickenCurry.png" />
              <Card.Body>
                <Card.Title>Nyonya Kapitan chicken curry</Card.Title>
                <Card.Text>
                  All curry served with Nasi Kunyit or Roti Jala, please specify
                </Card.Text>
                <Button variant="primary">£7.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/MalaysianMuttonCurry.png" />
              <Card.Body>
                <Card.Title>Malaysian mutton curry</Card.Title>
                <Card.Text>
                  All curry served with Nasi Kunyit or Roti Jala, please specify
                </Card.Text>
                <Button variant="primary">£8.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/BeefRendang.png" />
              <Card.Body>
                <Card.Title>Beef Rendang</Card.Title>
                <Card.Text>
                  All curry served with Nasi Kunyit or Roti Jala, please specify
                </Card.Text>
                <Button variant="primary">£8.50/portion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/CurrySides.png" />
              <Card.Body>
                <Card.Title>Served With Curry</Card.Title>
                <Card.Text>
                  Nasi Kunyit (TOP)<br></br>
                  Roti Jala (BOTTOM)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br></br>
        <h1>Nyonya Kuihs</h1>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Kuihs</Card.Title>
                <Card.Text>
                  £1.50/pc<br></br>or <br></br>£7.00/5pcs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/KuihKociPulutHitam.png" />
              <Card.Body>
                <Card.Title>Kuih Koci Pulut hitam</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£1.50/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/KuihTalam.png" />
              <Card.Body>
                <Card.Title>Kuih Talam</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£1.50/pc</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/Serimuka.png" />
              <Card.Body>
                <Card.Title>Serimuka</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£1.50/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/AngkuKuih.png" />
              <Card.Body>
                <Card.Title>Angku Kuih</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£1.50/pc</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/Images/BingkaUbiKayu.png" />
              <Card.Body>
                <Card.Title>BingkaUbiKayu</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">£1.50/pc</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default App;
