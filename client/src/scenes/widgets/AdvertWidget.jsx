import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Upcoming
        </Typography>
        <Typography color={medium}>Events</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/hackuta.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>HackUTA 2023</Typography>
        <Typography color={medium}>hackuta.org</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Join us next at HackUTA 2023 on the 7th and 8th of October at The University of Texas at Arlington!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
