import Button from "../Button/Button";
import { Card, ContentCard, ContentDetails, Details, Image, ImageContainer, Name } from "./CharacterStyled";
import image from '../../assets/darth-vader-background.png'


const Character = ( { character }) => {
  return (
    <Card>
      <ImageContainer >
      <Image src={image} alt={character.name} />
      </ImageContainer>
      <ContentCard>
        <Name>{character.name}</Name>
        <ContentDetails>
          <Details><b>Skin color:</b> {character.skin_color}</Details>
          <Details><b>Gender:</b> {character.gender}</Details>
          <Details><b>Height:</b> {character.height}cm</Details>
          <Details><b>Birth year:</b> {character.birth_year}</Details>
        </ContentDetails>
        <Button name={character.name}/>
      </ContentCard>
    </Card>
  );
}
 
export default Character;