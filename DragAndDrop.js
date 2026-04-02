import { useRef } from "react";

export const useDragAndDrop = (onDrop) => {

    // reference object stores the card being dragged
    const dragCard = useRef(null);

    // reference object stores the card that is currently being hovered over
    const dragOverCard = useRef(null);

// this is called when the dragging the starts with onDragStart;
    const handleDragCard = (card) => dragCard.current = card;

// records where the card is being dragged
    const handleDragEnter = (card) => dragOverCard.current = card;

// called when the card is dragged over the vaid drop target
const handleDragOver = (e) => e.preventDefault(); // this is required to prevent the browser from disabling drop

// is called when the dragging ends or is dropped
const handleDragEnd = () => {
    const from = dragCard.current;
    const to  = dragOverCard.current;

 // call onDrop with the source & target items
 if (from !== null && to !== null && from !== to) {
    onDrop(from, to);
 }

 // reset for the next drag
 dragCard.current = null;
 dragOverCard.current = null;
};

// returns all the drag event handlers 
return {
    handleDragCard,
    handleDragEnter,
    handleDragOver,
    handleDragEnd
  };
};