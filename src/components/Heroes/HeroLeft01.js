/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { ButtonGroup } from "@mui/joy";

export default function HeroLeft01({
  theme,
  title,
  subtitle,
  blurb,
  buttonText,
  img,
  maxWidth,
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  return (
    <TwoSidedLayout ratio={imgRatio} maxWidth={maxWidth} maxHeight={750} basis={"50%"} img={img} py={16} theme={theme}>
      <Typography level="h3" fontSize="lg" fontWeight="lg" textColor="text.secondary">
        {subtitle}
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="xl7"
      >
        {title}
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        {blurb}
      </Typography>
      <ButtonGroup spacing={2} variant="solid">
        <Button startDecorator={<OtherHousesIcon />} size={"lg"} color="primary">
          {buttonText || "Primary"}
        </Button>
        <Button startDecorator={<OtherHousesIcon />} size={"lg"} color="secondary">
          {buttonText || "Secondary"}
        </Button>
      </ButtonGroup>
      <OtherHousesIcon fontSize={"xl4"} />
    </TwoSidedLayout>
  );
}