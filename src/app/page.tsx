"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex>
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          {/* Delete this <Card /> in your own app */}
          <Card bg="black" border="1px" maxW="90vw" mx="auto">
            <CardHeader>
              <Heading size="md">🅰️TLanta’s D-Commerce Market</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {_latestUpdates.map((item) => (
                  <Box key={item.title}>
                    <Heading size="xs" textTransform="uppercase">
                      {item.title}
                    </Heading>
                    {item.bullet_points.map((pt, index) => (
                      <Text pt="2" fontSize="sm" key={index}>
                        {pt}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Stack>
            </CardBody>
          </Card>
          <Heading ml="20px" mt="40px">
            ❤️‍🔥 Trending collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                <Text fontSize="large" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

// Delete this in your own app
const _latestUpdates: Array<{ title: string; bullet_points: React.ReactNode[] }> = [
  {
    title: "$0 Middleman Fees",
    bullet_points: [
      <>ATL5D ended web2 slavery in Atlanta in 2024 by removing the middleman.</>,
    ],
  },
  {
    title: " IN $ATL WE TRUST",
    bullet_points: [
      <>
        Create a FREE ATL5D Coinbase wallet, aka{" "}
        <Link href="https://wallo.atl5d.com" isExternal>
          Wallo
        </Link>
        , for your $ATL money with no monthly or annual fees.
      </>,
    ],
  },
  {
    title: "Atlanta Loyalty Rewards",
    bullet_points: [
      <>
        We made is simple{" "}
        <Link href="https://wallo.atl5d.com" isExternal>
          <b>Subscribe</b>
        </Link>
        to ATL5D Discord to tip in $ATL money. Pay local Atlanta ATL5Dneurs to promote your Dmerch.
      </>,
    ],
  },
  {
    title: "ATLverse",
    bullet_points: [
      <>Schedule a D-commerce drop date as an event in ATL5D Discord and host a live after party in the ATLverse.</>,
    ],
  },
  {
    title: "ATL5D Portal",
    bullet_points: [
      <>Sell D-commerce out of your branded Discord and ATLverse channels with a link to your market page.</>,
    ],
  },
];
