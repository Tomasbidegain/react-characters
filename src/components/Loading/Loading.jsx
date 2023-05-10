import { LoadingSpinner, SwordIcon } from "./LoadingStyled";
import darthVader from  "../../assets/darth-vader.png"

const Loading = () => {
  return (
<>
  <LoadingSpinner>
      <SwordIcon src={darthVader} alt="Sword Icon" />
    </LoadingSpinner>
    Loading...
</>
  );
};

export default Loading;
