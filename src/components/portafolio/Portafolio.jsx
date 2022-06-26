import { useEffect, useState } from "react";
import PortafolioList from "../portafolioList/PortafolioList";
import "./portafolio.scss";
import {
  webPortfolio,
  mobilePortfolio,
  securityPortfolio,
  gamePortfolio,
} from "../../data";

export default function Portafolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "game",
      title: "Games Unity",
    },
    {
      id: "security",
      title: "Computer security",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      case "security":
        setData(securityPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);
  
  return (
    <div className="portafolio" id="portafolio">
      <h1>Portafolio</h1>
      <ul>
        {list.map((item) => (
          <PortafolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> 
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}