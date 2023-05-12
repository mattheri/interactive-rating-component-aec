import Card from "./card/Card";
import RoundButton from "./round-button/RoundButton";
import SubmitButton from "./submit-button/SubmitButton";
import Text from "./text/Text";
import Title from "./title/Title";

function App() {
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
        <RoundButton>1</RoundButton>
        <RoundButton>2</RoundButton>
        <RoundButton>3</RoundButton>
        <RoundButton>4</RoundButton>
        <RoundButton>5</RoundButton>
        <SubmitButton>Submit</SubmitButton>
      </Card>
    </>
  );
}

export default App;
