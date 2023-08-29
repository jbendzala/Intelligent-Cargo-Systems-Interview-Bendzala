import { Card, Stack, Typography } from "@mui/material";
import { getOwnerName } from "../../helpers/helpers";

export const StyledCard = ({
  name,
  teu,
  owner,
}: {
  name: string;
  teu: number;
  owner: string;
}) => {
  const country = getOwnerName(owner);

  return (
    <Card
      elevation={2}
      sx={{
        width: 340,
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: 3,
        mb: 4,
        mx: 1,
        p: 2,
        cursor: "pointer",
        ":hover": {
          boxShadow: 6,
          transition: "250ms",
          transitionDelay: "inherit",
        },
      }}
    >
      <Stack alignItems='start' justifyContent='center' spacing={2}>
        <Stack direction='row' spacing={1}>
          <Typography variant='h6' color='text.secondary'>
            Name:
          </Typography>
          <Typography variant='h6' color='text.primary'>
            {name}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography variant='h6' color='text.secondary'>
            Country of origin:
          </Typography>
          <Typography variant='h6' color='text.primary'>
            {country}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography variant='h6' color='text.secondary'>
            Max TEU:
          </Typography>
          <Typography variant='h6' color='text.primary'>
            {teu}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
