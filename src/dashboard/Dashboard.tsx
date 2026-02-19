import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainGrid from './components/MainGrid';
export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        backgroundColor: theme.vars
          ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
          : alpha(theme.palette.background.default, 1),
        overflow: 'auto',
        marginTop: { xs: 0, md: '24px' },
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Stack
        spacing={2}
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          mx: 3,
          pb: 1,
        }}
      >
        <MainGrid />
      </Stack>
    </Box>
  );
}
