import './App.css';

function App() {
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
        <div className="col my-1 p-0"></div>
      </div>
      {/*FIN CELDAS*/}
    </div>
    {/*FIN TABLERO*/}
  </div>
  );
}

export default App;
