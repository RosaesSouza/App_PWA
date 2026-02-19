import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const GeofinLogo = ({ isLightMode }: { isLightMode: boolean }) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Box
      component="img"
      src={isLightMode ? '/geofin_l.svg' : '/geofin.svg'}
      alt="Geofin Logo"
      sx={{
        width: { xs: 220, sm: 300, md: 400 },
        height: 'auto',
      }}
    />
  </Box>
);

const items = [
  {
    lightSrc: '/xnx_l.svg',
    darkSrc: '/xnx.svg',
    alt: 'XNX Logo',
    color: '#ff5a20',
  },
  {
    lightSrc: '/nstry_l.svg',
    darkSrc: '/nstry.svg',
    alt: 'N_stry Logo',
    color: '#1873a0',
  },
  {
    lightSrc: '/nbr_l.svg',
    darkSrc: '/nbr.svg',
    alt: 'Nebrax Logo',
    color: '#1896d5',
  },
  {
    lightSrc: '/felli_l.svg',
    darkSrc: '/felli.svg',
    alt: 'Felli Logo',
    color: '#ffffff',
  },
];

export default function Content() {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === 'light';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      sx={{
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        gap: { xs: 4, sm: 6, md: 8 },
        maxWidth: 480,
        width: '100%',
      }}
    >
      <GeofinLogo isLightMode={isLightMode} />
      <Stack
        sx={{
          gap: isMobile ? 2 : 4,
          alignItems: 'center',
          width: '100%',
        }}
      >
        {isMobile ? (
          <Stack
            direction="row"
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'nowrap',
              width: 'auto',
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={isLightMode ? item.lightSrc ?? item.darkSrc : item.darkSrc ?? item.lightSrc}
                  alt={item.alt}
                  sx={{
                    width: { xs: 60, sm: 72 },
                    height: 'auto',
                    transition: 'transform 400ms ease, filter 600ms ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      filter: `drop-shadow(0 0 18px ${item.color})`,
                    },
                  }}
                />
              </Box>
            ))}
          </Stack>
        ) : (
          items
            .reduce((rows, item, index) => {
              if (index % 2 === 0) rows.push([item]);
              else rows[rows.length - 1].push(item);
              return rows;
            }, [] as typeof items[][])
            .map((row, rowIndex) => (
              <Stack
                key={rowIndex}
                direction="row"
                sx={{
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                {row.map((item, colIndex) => (
                  <Box
                    key={`${rowIndex}-${colIndex}`}
                    sx={{
                      width: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={isLightMode ? item.lightSrc ?? item.darkSrc : item.darkSrc ?? item.lightSrc}
                      alt={item.alt}
                      sx={{
                        width: 150,
                        height: 'auto',
                        transition: 'transform 400ms ease, filter 600ms ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          filter: `drop-shadow(0 0 24px ${item.color})`,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            ))
        )}
      </Stack>
    </Stack>
  );
}
