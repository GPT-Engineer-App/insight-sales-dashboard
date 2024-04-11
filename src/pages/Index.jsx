import React from "react";
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  const metrics = [
    {
      label: "Total Sales",
      value: "$120,500",
      change: "12%",
      changeType: "increase",
      icon: FaChartLine,
    },
    {
      label: "Revenue",
      value: "$45,200",
      change: "8%",
      changeType: "increase",
      icon: FaChartPie,
    },
    {
      label: "Customers",
      value: "1,258",
      change: "5%",
      changeType: "decrease",
      icon: FaUsers,
    },
    {
      label: "Orders",
      value: "4,512",
      change: "20%",
      changeType: "increase",
      icon: FaChartBar,
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {metrics.map((metric, index) => (
          <Stat key={index} borderWidth={1} borderRadius="md" p={4} boxShadow="md">
            <Flex alignItems="center" mb={4}>
              <Box as={metric.icon} size="32px" mr={4} color="blue.500" />
              <StatLabel fontSize="xl">{metric.label}</StatLabel>
            </Flex>
            <StatNumber fontSize="4xl" mb={2}>
              {metric.value}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={metric.changeType === "increase" ? "increase" : "decrease"} />
              {metric.change}
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>

      <Flex mt={12} flexDirection={{ base: "column", lg: "row" }}>
        <Box flex={2} mr={{ lg: 8 }} mb={{ base: 8, lg: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Sales Overview
          </Heading>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxMjc3ODMyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" mb={4} />
          <Text>The sales performance has been strong this quarter, with a 12% increase compared to the previous quarter. The growth is attributed to the successful launch of new products and effective marketing campaigns.</Text>
        </Box>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4}>
            Top Products
          </Heading>
          <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGllJTIwY2hhcnR8ZW58MHx8fHwxNzEyODI1NjYwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Top Products" mb={4} />
          <Text>Our top-selling products this quarter include the XYZ gadget, ABC software, and DEF service. These products account for 60% of the total revenue.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
