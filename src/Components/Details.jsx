import { useContext } from "react";
import AuthContext from "./Context";
import {
  Box,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const Details = () => {
  const { data } = useContext(AuthContext);

  return (
    <Card w="60%" m="20px auto" boxShadow="lg" rounded="md" p="6">
      <CardHeader>
        <Heading size="md">
          {data.name}&nbsp;{data.sys.country}
        </Heading>
      </CardHeader>
      <hr />

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {data.weather[0].description}
            </Heading>
            <Text pt="2" fontSize="sm">
              Latitude : {data.coord.lat} & Longitude : {data.coord.lon}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Temperature
            </Heading>
            <Text pt="2" fontSize="sm">
              Temperature : {data.main.temp}
              <br />
              Lowest Temperature : {data.main.temp_min}
              <br />
              Highest temperature : {data.main.temp_max}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Wind
            </Heading>
            <Text pt="2" fontSize="sm">
              Wind : {data.wind.speed}m/s
              <br />
              Humidity : {data.main.humidity}%
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Details;
