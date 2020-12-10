import React, { useState } from 'react';
import Header from './components/Header';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
const { v4: uuidv4 } = require('uuid');

function App() {
  const opcionesInicio = [
    { id: uuidv4(), content: 'Distribuciones de Fondos' },
    { id: uuidv4(), content: 'Evolución Histórica' },
    { id: uuidv4(), content: 'Otras Transferencias' },
    { id: uuidv4(), content: 'Préstamos' },
    { id: uuidv4(), content: 'Legislación' },
    { id: uuidv4(), content: 'Consenso Fiscal' },
    { id: uuidv4(), content: 'Contacto' }
  ] 

  const opcionesDistribucionesDeFondos = [
    {id: uuidv4(), content: 'coparticipacion'},
    {id: uuidv4(), content: 'fofindes'},
    {id: uuidv4(), content: 'fasamu'},
    {id: uuidv4(), content: 'fondoCompensadorConsenso'},
    {id: uuidv4(), content: 'bonoDelaNacion'},
    {id: uuidv4(), content: 'fodemeep'},
    {id: uuidv4(), content: 'fondofederalsolidario'}
  ]

  const opcionesEvolHistorica = [
    {id: uuidv4(), content: 'Cuadros de Evolución por fondo y año'},
    {id: uuidv4(), content: 'Gráficos anuales comparativos con cuadros'},
    {id: uuidv4(), content: 'Bases Históricas Anuales por fondo'},
    
  ]

  const columnsFromBackEnd = 
    {
      [uuidv4()] : {
        name: 'Inicio',
        items: opcionesInicio
      },
      [uuidv4()] : {
        name: 'Distribuciones de Fondos',
        items: opcionesDistribucionesDeFondos
      },
      [uuidv4()] : {
        name: 'Evolución Histórica',
        items: opcionesEvolHistorica
      }    
    }
  

  const [ columns, setColumns ] = useState(columnsFromBackEnd);
  
  const onDragEnd = (result, columns, setColumns) => {
    if(!result.destination) return; 
    const { source, destination } = result;
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId] : {
          ...column,
          items: copiedItems
        }
      })
    
    
  }

  const handleDisable = () => { 
      let copiedItems = columns
      console.log(columns)
    /*  copiedItems.filter()
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId] : {
          ...column,
          items: copiedItems
        }
      }) */
    
    
  }

  return (
    <div>
      {/* <Header /> */}
      <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([id, column]) =>{
            return (
              <div style={{display: 'flex', flexDirection:'column' , alignItems: 'center'}}>
                <h2>{column.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={id} key={id}>
                    { (provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref = {provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                            padding: 4,
                            margin:'0 100px 0 100px',
                            width: 250,
                            minHeight: 500
                          }}
                        >
                        {column.items.map((item, index) => {
                          return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot)=> {
                                  return(
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style= {{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                      <button onClick= {handleDisable}>Disable</button>
                                    </div>
                                  )
                                }}
                              </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
  
    </div>
    
  );
}

export default App;
