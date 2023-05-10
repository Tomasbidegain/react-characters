import Button from "../Button/Button";
import { Card, ContentCard, ContentDetails, Details, Name } from "./CharacterStyled";

const Character = ( { character }) => {
  return (
    <Card>
      <ContentCard>
        <Name>{character.name}</Name>
        <ContentDetails>
          <Details><b>Skin color:</b> {character.skin_color}</Details>
          <Details><b>Eyes color:</b> {character.eye_color}</Details>
          <Details><b>Hair color:</b> {character.hair_color}</Details>
          <Details><b>Gender:</b> {character.gender}</Details>
          <Details><b>Height:</b> {character.height}cm</Details>
          <Details><b>Mass:</b> {character.mass}</Details>
          <Details><b>Birth year:</b> {character.birth_year}</Details>
        </ContentDetails>
        <Button name={character.name}/>
      </ContentCard>
    </Card>
  );
}
 
export default Character;