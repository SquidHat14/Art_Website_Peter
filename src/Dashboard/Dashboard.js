import './Dashboard.scss';
import React, { Component } from 'react'
import DraggableImage from './../Dashboard/DraggableImage/DraggableImage';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


class Dashboard extends Component {

    constructor(props)
    {
      super(props);
      this.images = this.props.images;
      this.createImageDictionary();
      this.state = 
      {
        images : this.images,
        column1 : this.images["1"],
        column2 : this.images["2"],
        column3 : this.images["3"],
      }
    }

    id2List = {
      1: 'column1',
      2: 'column2',
      3: 'column3',
  };

    getList = (id) => this.state[this.id2List[id]];

    onDragEnd = (result, images, ) => {
      const { source, destination } = result;

      // dropped outside the list
      if (!destination) {
          return;
      }

      if(destination.droppableId === "UPLOAD" || source.droppableId === "UPLOAD")
      {
        console.log("upload");
        return;
      }

      if (source.droppableId === destination.droppableId) {
          const items = reorder(
              this.getList(source.droppableId),
              source.index,
              destination.index
          );
            
          this.images[source.droppableId] = items;


          if(source.droppableId === "1")
          {
            this.setState({ column1 : items })
          }
          else if(source.droppableId === "2")
          {
            this.setState({ column2 : items })
          }
          else if(source.droppableId === "3")
          {
            this.setState({ column3 : items })
          }

      } else {
          const result = move(
              this.getList(source.droppableId),
              this.getList(destination.droppableId),
              source,
              destination
          );
          
          if(result["1"])
          {
            this.state.column1 = result["1"];
          }
          if(result["2"])
          {
            this.state.column2 = result["2"];
          }
          if(result["3"])
          {
            this.state.column3 = result["3"];
          }
      }
  }

    render ()
    {
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="IMAGEGRIDAREA">
                <div class="IMAGEGRIDCONTAINER">
                    <div class="IMAGEGRID">
                      <div class="COLUMN">
                          <Droppable droppableId='1'>
                          {provided => (
                            <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                                  {this.getList(1).map((src, index) => {
                                    return (<><DraggableImage name={src.name} key = {src.key} image={src} index={index}/></>);
                                  })}
                            {provided.placeholder}      
                            </div>
                          )}
                          </Droppable>
                        </div>


                        <div class="COLUMN">
                        <Droppable droppableId='2'>
                        {provided => (
                          <div 
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          >
                                {this.getList(2).map((src, index) => {
                                  return (<><DraggableImage name={src.name} key = {src.key} image={src} index={index}/></>);
                                })}
                          {provided.placeholder}
                          </div>
                        )}
                        </Droppable>
                        </div>
                        <div class="COLUMN">
                        <Droppable droppableId='3'>
                        {provided => (
                          <div 
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          >
                                {this.getList(3).map((src, index) => {
                                  return (<><DraggableImage name={src.name} key = {src.key} image={src} index={index}/></>);
                                })}
                          {provided.placeholder}
                          </div>
                        )}
                        </Droppable>
                        </div>
                    </div>
                    
                    
                    <div class="UPLOADAREA">
                    <div class="DROPTITLE">UPLOAD IMAGES AREA</div>
                    <button class="UPLOADBUTTON">Upload +</button>
                                <Droppable droppableId='UPLOAD'>
                                    {provided => (
                                      <div 
                                      ref={provided.innerRef}
                                      {...provided.droppableProps}
                                      >
                                      <><DraggableImage name={"TESTINGUPLOAD"} key = {100} image={this.images["1"][0]} index={100}/></>
                                      {provided.placeholder}
                                      </div>
                                    )}
                                </Droppable>
                    </div>
                
                </div>
            </div>

            
          </DragDropContext>
        );
    }

  createImageDictionary()
  {
    var sorted = {};
    for( var i = 0, max = this.images.length; i < max ; i++ ){
        if( sorted[this.images[i].column] === undefined ){
         sorted[this.images[i].column] = [];
        }
        sorted[this.images[i].column].push(this.images[i]);
    }

    this.images = sorted;
  }

  

  switchIndexes(source, destination)
  {
    
    //TO-DO - fix odd stuff happening after first swap
    var sourceImage = this.images[source.droppableId].splice(source.index, 1);
    this.images[destination.droppableId].splice(destination.index, 0, sourceImage[0]);
  }

  saveConfig()
  {
    //TO-DO - setup save button that writes to json file.
  }
}

export default Dashboard;