import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export default function DraggableImage(props) {


  return (
                <Draggable draggableId={props.name} index = {props.index}>
                  {provided => (
                    <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    class="IMAGECONTAINER"><img alt={props.image.description} class ="IMAGE"  src={'./../imageFiles/' + props.image.name}></img><div class="overlay">{props.image.title}<br />{props.image.description}</div>
                    {provided.placeholder}
                    </div>
                    )}
                  </Draggable>
        );
}