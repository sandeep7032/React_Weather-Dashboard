import { Text, Stack, Box } from "@chakra-ui/react";
import Search from "./Search";
import Details from "./Details";
import AuthContext from "./Context";
import { useContext } from "react";

const Home = () => {
  const { data } = useContext(AuthContext);
  return (
    <div style={{ marginTop: "50px" }}>
      <Box boxShadow="2xl" w="70%" m="10px auto">
        <Stack>
          <Text fontSize="4xl" m="10px">
            <b>Weather Dashboard</b>
          </Text>
        </Stack>
        <Search />
      </Box>
      {data ? <Details /> : null}
    </div>
  );
};

export default Home;
