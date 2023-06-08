import { useState } from "react";
import Card from "./card/Card";
import RatingButton from "./rating-button/RatingButton";
import SubmitButton from "./submit-button/SubmitButton";
import Text from "./text/Text";
import Title from "./title/Title";

function App() {
  const [currentlyClicked, setCurrentlyClicked] = useState(0);

  const onClick = (value) => {
    setCurrentlyClicked((previous) => {
      if (previous === value) return 0;
      return value;
    });
  };

  return (
    <>
      <Card>
        <Title as="h2">Hello World</Title>
        <Text className="blabla">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem blanditiis placeat ipsa incidunt sapiente delectus nemo
          repellat. Repudiandae, distinctio possimus explicabo, placeat non
          reprehenderit eveniet ducimus reiciendis veniam, quibusdam amet.
        </Text>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          1
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          2
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          3
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          4
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          5
        </RatingButton>
        <SubmitButton>Submit</SubmitButton>
      </Card>
    </>
  );
}

export default App;
