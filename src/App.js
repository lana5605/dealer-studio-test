import './App.scss';
import Banner from './components/Banner';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [selectedCard, setSelectedCard] = useState(2);
  return (
    <div className="App">
      <Banner>
        <h1 className="BannerTitle">Welcome to G Automotive</h1>
        <p className="BannerSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button buttonText="Contact Us" />
      </Banner>
      <div className="Cards">
        <Card testid="card1" isSelected={selectedCard === 1} style={{ width: "100%", height: "370px", maxHeight: "370px" }}>
          <CardImage />
          <div className="CardContent">
            <CardHeader cardHeader="Heading 1" />
            <CardBody style={{ overflow: "scroll" }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </CardBody>
            <Button testid="card1-button" buttonText="Button 1" slim={true} onClick={() => setSelectedCard(1)} />
          </div>
        </Card>
        <Card testid="card2" isSelected={selectedCard === 2} style={{ width: "100%", height: "370px" }}>
          <CardImage />
          <div className="CardContent">
            <CardHeader cardHeader="Heading 2" />
            <CardBody style={{ overflow: "scroll" }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </CardBody>
            <Button testid="card2-button" buttonText="Button 2" slim={true} onClick={() => setSelectedCard(2)} />
          </div>
        </Card>
        <Card testid="card3" isSelected={selectedCard === 3} style={{ width: "100%", height: "370px" }}>
          <CardImage />
          <div className="CardContent">
            <CardHeader cardHeader="Heading 3" />
            <CardBody style={{ overflow: "scroll" }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </CardBody>
            <Button testid="card3-button" buttonText="Button 3" slim={true} onClick={() => setSelectedCard(3)} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;