import {
  Button,
  Card,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetShipInfo } from "../apiClient/apiClient";
import { DoNotDisturb } from "@mui/icons-material";
import { useWindowSize } from "../hooks/useWindowSize";

const NARROW_SCREEN = 460;

export const DetailPage = () => {
  const { id } = useParams();
  const { data: reqData, isLoading, isSuccess } = useGetShipInfo();
  const shipInfoData = reqData?.data.ships;
  const shipInfo = shipInfoData?.find((item) => item.id === +id);

  const windowSize = useWindowSize();
  const isNarrow = windowSize.width && windowSize.width < NARROW_SCREEN;

  return (
    <Stack alignItems='center' spacing={2} sx={{ m: 5 }}>
      <Typography variant='h4' color='text.secondary'>
        Detail info
      </Typography>
      <Card
        variant='outlined'
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.light,
          borderRadius: "50px",
          borderWidth: "2px",
          borderColor: (theme) => theme.palette.primary.main,
          width: "100%",
          color: (theme) => theme.palette.primary.light,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading && (
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={2}
          >
            <CircularProgress size={32} />
          </Stack>
        )}
        {isSuccess && shipInfoData?.length && shipInfo ? (
          <Stack
            alignItems='start'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={2}
          >
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Name:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.name}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Owner:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.owner}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Max TEU:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.maxTEU}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                {"Length (meters):"}
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.lengthMeters}m
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Gross Tonnage:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.grossTonnage}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Built:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.built}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography
                variant={isNarrow ? "h6" : "h5"}
                color='text.secondary'
              >
                Beam Meters:
              </Typography>
              <Typography variant={isNarrow ? "h6" : "h5"} color='text.primary'>
                {shipInfo?.beamMeters}m
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={2}
          >
            <DoNotDisturb fontSize='large' />
            <Typography variant='h5' color='text.secondary'>
              No data available
            </Typography>
          </Stack>
        )}
      </Card>
      <Link to='/' style={{ textDecoration: "none" }}>
        <Button variant='outlined' sx={{ color: "text.secondary", mt: 1 }}>
          Go back
        </Button>
      </Link>
    </Stack>
  );
};
