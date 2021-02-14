import * as React from "react";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ article }: { article: any }) => {
  return (
    <Box mt={8} borderRadius="lg" p={4} boxShadow="lg" bg="blue.100">
      <Heading textAlign="center" mb={4}>
        {article.title}
      </Heading>
      <Flex justify="center">
        <Image mb={4} src="https://picsum.photos/200" />
      </Flex>
      <Text letterSpacing="wider" lineHeight="7">
        {article.excerpt}
      </Text>
      <Button mt={8} colorScheme="blue" variant="outline">
        <Link to="/">Mehr</Link>
      </Button>
    </Box>
  );
};

export default Card;
