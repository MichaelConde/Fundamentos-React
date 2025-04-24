
import { Main } from '../../layout/Main/Main';
import { useState } from 'react';
import { Card } from '../../layout/Card/Card';
export const Home = () => {
  const [characters, setCharacters] = useState([])
const URL = 'https://rickandmortyapi.com/api/character'

  const handleGetCharacters = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setCharacters(data.results)
  }

  return (
    
      <Main style="w-full h-screen flex flex-col items-center">
 <button onClick={handleGetCharacters}>Traer personajes</button>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          characters.map(character => (
            <Card key={character.id} {...character} />
          ))
        }
      </section>
      </Main>
    
  );
}
