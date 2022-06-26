import "./Skill.scss";
import data from "../../dataPersonale.json";

export default function Skill() {



  return (
    <div className="skill" id="skill">
      <div className="container">
        <h2>Skills</h2>

        <div className="card">
          <h3>DevOps</h3>
          {data['skillDevOps'].map((d) => (
            
          <div className="barras">
            <div className="conteiner-progres-bar">
              <h4>{d.title}</h4>
              <div className="progress-bar blue stripes shine">
                <span className="barraProgres"  style={{ width: d.level+"%" }} ></span>
              </div>
            </div>
            <div className="imagenbarraskill">
              <img
                className="img"
                src={d.icon}
                alt="Imagen de  Tecnologias"
              />
            </div>
          </div>
          ))}
        </div>

        <div className="card featured">
          <h3>Tecnologie Development WEB</h3>
          {data['skillDevWeb'].map((d) => (
          <div className="barras">
            <div className="conteiner-progres-bar">
              <h4>{d.title}</h4>
              <div className="progress-bar blue stripes shine">
                <span style={{ width: d.level+"%" }}></span>
              </div>
            </div>
            <div className="imagenbarraskill">
              <img
                className="img"
                src={d.icon}
                alt="Stack Mearn"
              />
            </div>
          </div>
          ))}
        </div>
        <div className="card">
          <h3>I am competitive in</h3>
          {data['skillOther'].map((d) => (
          <div className="barras">
            <div className="conteiner-progres-bar">
              <h4>{d.title}</h4>
              <div className="progress-bar blue stripes shine">
                <span style={{ width: d.level+"%" }}></span>
              </div>
            </div>
            <div className="imagenbarraskill">
              <img
                className="img"
                src={d.icon}
                alt="Progamas dominados"
              />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
