import { useState, useContext } from "react";
import { Input, Button } from "@chakra-ui/react";
import getData from "./Service";
import AuthContext from "./Context";

const Search = () => {
  const [input, setInput] = useState("");

  const { addData } = useContext(AuthContext);

  const weatherInfo = () => {
    if (input === "") {
      alert("Please Enter City Name");
    } else {
      getData(input, addData);
    }
  };

  return (
    <div style={{ margin: "20px auto" }}>
      <Input
        placeholder="Enter City"
        variant="outline"
        w="20%"
        m="10px"
        size="lg"
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <Button
        colorScheme="teal"
        variant="solid"
        m="10px"
        size="lg"
        marginTop="1px"
        onClick={weatherInfo}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
