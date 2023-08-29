import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useGetShipInfo } from "../apiClient/apiClient";
import { useState } from "react";
import { StyledCard } from "../Components/UI/StyledCard";
import { ItemsSkeleton } from "../Components/UI/ItemsSkeleton";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { data: reqData, isLoading, isSuccess } = useGetShipInfo();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const shipInfoData = reqData?.data.ships;
  const paginationLength = Math.ceil(shipInfoData?.length / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = shipInfoData?.slice(firstItemIndex, lastItemIndex);

  if (isLoading) {
    return (
      <Grid
        container
        columnSpacing={1}
        columns={{ xs: 1, sm: 2, md: 3 }}
        justifyContent='center'
        sx={{ mt: 5 }}
      >
        <ItemsSkeleton n={12} />
      </Grid>
    );
  }

  return (
    <Stack spacing={2} sx={{ mb: 5, alignItems: "center", mt: 5 }}>
      <Typography variant='h4' color='text.secondary'>
        Ships
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          columnSpacing={1}
          columns={{ xs: 1, sm: 2, md: 3 }}
          justifyContent='center'
        >
          {isSuccess &&
            currentItems.map((item, index) => (
              <Link
                to={`/${item.id}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Grid item>
                  <StyledCard
                    name={item.name}
                    teu={item.maxTEU}
                    owner={item.owner}
                  />
                </Grid>
              </Link>
            ))}
        </Grid>
      </Box>
      {isSuccess && (
        <Pagination
          count={paginationLength}
          onChange={(event, value) => setCurrentPage(value)}
          size='medium'
        />
      )}
    </Stack>
  );
};
