import './App.css';
import Celda from './Celda';

function App() {
  const mapaCeldas=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"]
  const celdas = mapaCeldas.map((valor,index) => 
    <div classNAme="col-auto p-0"><Celda valor={valor} key={index}/></div>
  );
  return (
  <div className="container text-center" style={{ width: 340 }}>
    {/*TABLERO*/}
    <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
      {/*MARCADOR*/}
      <div className="row bg-body-secondary borderInside ">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="lcdText text-danger pe-2 m-2 borderInsideS">10</div>
          <div className="align-self-center m-2 borderInsideS">
            <img src="acierto.png" style={{ width: 50 }} />
          </div>
          <div
            className="lcdText text-danger pe-2 m-2 borderInsideS"
            style={{ width: 54 }}
          >
            00
          </div>
        </div>
      </div>
      {/*FIN MARCADOR*/}
      {/*CELDAS*/}
      <div className="row borderInside bg-body-secondary text-center justify-content-center">
        <div className="col my-1 p-0">
          <div className="d-flex flex-wrap justify-content-center">
            {celdas}
          </div>
        </div>
      </div>
      {/*FIN CELDAS*/}
    </div>
    {/*FIN TABLERO*/}
  </div>
  );
}

export default App;
