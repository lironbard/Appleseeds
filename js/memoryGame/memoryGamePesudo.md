1. flex container with cards
2. css for a card
3. function for generating an array of objects of rgb color in every card
   every time push one color to an array
4. create a state object with { last selected card; counter of wrong guesses,
   counter for right guesses  } 
5. add eventListeners to cards container
   same data attributes for the same background colors
6. animate cards. if there is not a match - delay returning the cards.
    disable other cards from clicking during  returning
    if there is a match- removing event listeners from that two cards
    update the state 1. last seleceted card in the state object
                     2. increment the counter of guesses
7. function for winnig: compare the number of right matches to the array.length
8. function for comparing where is current click and previous click
9. create html for the overlay in the end of the game
10. create a button for restarting the game with a timer