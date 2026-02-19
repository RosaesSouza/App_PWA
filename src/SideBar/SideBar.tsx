import * as React from 'react';
import { useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ColorModeContext } from '../shared-theme/AppTheme';

export type AppView = 'dashboard' | 'crud';

export type SideBarProps = {
  currentView: AppView;
  onSelectView: (view: AppView) => void;
};

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  flexShrink: 0,
  boxSizing: 'border-box',
});

const mainItems: { label: string; icon: React.ReactNode; view: AppView }[] = [
  { label: 'Início', icon: <HomeRoundedIcon />, view: 'dashboard' },
  { label: 'Exemplo Cadastro', icon: <AssignmentRoundedIcon />, view: 'crud' },
];

const secondaryItems = [
  { label: 'Settings', icon: <SettingsRoundedIcon /> },
];

export default function SideBar({ currentView, onSelectView }: SideBarProps) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(null);

  const computedWidth = collapsed ? 72 : drawerWidth;
  const isDarkMode = theme.palette.mode === 'dark';
  const isUserMenuOpen = Boolean(userMenuAnchorEl);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <>
      {/* Barra superior no mobile: hambúrguer à esquerda e logo Geofin à direita */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 0.5,
          px: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <IconButton size="small" onClick={() => setMobileOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Box
          component="img"
          src={isDarkMode ? '/geofin.svg' : '/geofin_l.svg'}
          alt="Geofin Logo"
          sx={{
            height: 28,
            width: 'auto',
            ml: 1,
          }}
        />
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          [`& .${drawerClasses.paper}`]: {
            width: computedWidth,
            backgroundColor: 'background.paper',
            overflowX: 'hidden',
            borderRight: `1px solid ${theme.palette.divider}`,
          },
          width: computedWidth,
          flexShrink: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={collapsed ? 'center' : 'space-between'}
          sx={{
            px: 1,
            py: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
            minHeight: 56,
          }}
        >
          {!collapsed && (
            <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
          )}
          <IconButton
            size="small"
            onClick={() => setCollapsed((prev) => !prev)}
            sx={{
              ml: collapsed ? 0 : 1,
            }}
          >
            {collapsed ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon />}
          </IconButton>
        </Stack>
        <Divider />
        <Box
          sx={{
            overflow: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
              {mainItems.map((item) => (
                <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    selected={currentView === item.view}
                    onClick={() => onSelectView(item.view)}
                    sx={{
                      px: collapsed ? 1.5 : 2,
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      minHeight: 40,
                      '&.Mui-selected': {
                        backgroundColor: theme.palette.action.selected,
                        '&:hover': {
                          backgroundColor: theme.palette.action.selected,
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? 0 : 40,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          noWrap: true,
                          sx: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List dense sx={{ mt: 1 }}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => colorMode.toggleColorMode()}
                  sx={{
                    px: collapsed ? 1.5 : 2,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    minHeight: 40,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed ? 0 : 40,
                      justifyContent: 'center',
                    }}
                  >
                    {isDarkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary="Tema"
                      primaryTypographyProps={{
                        noWrap: true,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
              {secondaryItems.map((item) => (
                <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      px: collapsed ? 1.5 : 2,
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      minHeight: 40,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? 0 : 40,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          noWrap: true,
                          sx: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar
            sizes="small"
            alt="User profile"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={handleUserMenuOpen}
          />
          {!collapsed && (
            <Box sx={{ mr: 'auto', minWidth: 0, maxWidth: '100%' }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                noWrap
              >
                Geofin
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
                noWrap
              >
                geofin@geofinamerica.com.br
              </Typography>
            </Box>
          )}
        </Stack>
      </Drawer>

      {/* Menu lateral em modo hambúrguer (mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          [`& .${drawerClasses.paper}`]: {
            width: drawerWidth,
            backgroundColor: 'background.paper',
            overflowX: 'hidden',
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 1,
            py: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
            minHeight: 56,
          }}
        >
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton size="small" onClick={() => setMobileOpen(false)}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />
        <Box
          sx={{
            overflow: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
              {mainItems.map((item) => (
                <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    selected={currentView === item.view}
                    onClick={() => {
                      onSelectView(item.view);
                      setMobileOpen(false);
                    }}
                    sx={{
                      px: 2,
                      justifyContent: 'flex-start',
                      minHeight: 40,
                      '&.Mui-selected': {
                        backgroundColor: theme.palette.action.selected,
                        '&:hover': {
                          backgroundColor: theme.palette.action.selected,
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        noWrap: true,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List dense sx={{ mt: 1 }}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    colorMode.toggleColorMode();
                    setMobileOpen(false);
                  }}
                  sx={{
                    px: 2,
                    justifyContent: 'flex-start',
                    minHeight: 40,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      justifyContent: 'center',
                    }}
                  >
                    {isDarkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary="Tema"
                    primaryTypographyProps={{
                      noWrap: true,
                      sx: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {secondaryItems.map((item) => (
                <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      px: 2,
                      justifyContent: 'flex-start',
                      minHeight: 40,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        noWrap: true,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar
            sizes="small"
            alt="User profile"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={handleUserMenuOpen}
          />
          <Box sx={{ mr: 'auto', minWidth: 0, maxWidth: '100%' }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis' }}
              noWrap
            >
              Geofin
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
              noWrap
            >
              geofin@geofinamerica.com.br
            </Typography>
          </Box>
        </Stack>
      </Drawer>

      {/* Menu de usuário acionado pelo avatar (desktop e mobile) */}
      <Menu
        anchorEl={userMenuAnchorEl}
        open={isUserMenuOpen}
        onClose={handleUserMenuClose}
        onClick={handleUserMenuClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <Divider />
        <MenuItem>Add another account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}
