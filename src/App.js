import './App.css';

const cardgame = {
  title: "Speed",  
  deck: "Standard 52 card deck",
  type: "shedding card game", 
  image: "http://allaboutfunandgames.com/wp-content/uploads/2011/12/Speed-Card-Game-Set-up.jpg", 
  width: "100", 
  height: "100"
};



const boardgame = {
  title: "Dixit", 
  creator: "Jean-Louis Roubira", 
  illustrator: "Marie Cardouat",
  publisher: "Libellud", 
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Dixitgame.jpg/200px-Dixitgame.jpg", 
  width: "500", 
  height: "500"
};

const videogames = [
  {id: "1", title: "Portal", genre: "puzzle/action", isOwned: true},
  {id: "2", title: "Jet Set Radio", genre: "skating/action", isOwned: false},
  {id: "3", title: "Skyrim", genre:"RPG action adventure", isOwned: true}
];

function GameShelf(){
  return (
    <>
      <h2>{boardgame.title} {boardgame.publisher}</h2>
      <p>{boardgame.creator} {boardgame.illustrator}</p>
      {boardgame.image &&
        <img 
          className='boxArt'
          src={boardgame.image}
          alt={boardgame.title + "box art"}
          style={{width: boardgame.width, height: boardgame.height}}
        />
      }

    </>

  )
}


function CardTable(){
  return (
    <>
      <h2>{cardgame.title} : {cardgame.type}</h2>
      <p>{cardgame.deck}</p>
      {cardgame.image &&
        <img 
          className='boxArt'
          src={cardgame.image}
          alt={cardgame.title + "box art"}
          style={{width: cardgame.width, height: cardgame.height}}
        />
      }

    </>

  )
}

function GameLibrary(){
  const listGames = videogames.map(videogames => 
    <li
      key={videogames.id}
      style={{
        color: videogames.isOwned ? 'green' : 'red'
      }}
    >
      {videogames.title}
    </li>  
  );
  return(
    <ul>{listGames}</ul>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameLibrary />
        <GameShelf />
        <CardTable />
      </header>
      
    </div>
  );
}

export default App;
