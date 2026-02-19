import { paperClasses } from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import { menuItemClasses } from '@mui/material/MenuItem';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { iconButtonClasses } from '@mui/material/IconButton';
import { inputBaseClasses } from '@mui/material/InputBase';
import { checkboxClasses } from '@mui/material/Checkbox';
import { listClasses } from '@mui/material/List';
import { gridClasses } from '@mui/x-data-grid';
import { tablePaginationClasses } from '@mui/material/TablePagination';

export const dataGridCustomizations = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        '--DataGrid-overlayHeight': '300px',
        overflow: 'clip',
        borderColor: (theme.vars || theme).palette.divider,
        backgroundColor: (theme.vars || theme).palette.background.default,
        [`& .${gridClasses.columnHeader}`]: {
          backgroundColor: (theme.vars || theme).palette.background.paper,
        },
        [`& .${gridClasses.footerContainer}`]: {
          backgroundColor: (theme.vars || theme).palette.background.paper,
        },
        [`& .${checkboxClasses.root}`]: {
          padding: theme.spacing(0.5),
          '& > svg': {
            fontSize: '1rem',
          },
        },
        [`& .${tablePaginationClasses.root}`]: {
          marginRight: theme.spacing(1),
          '& .MuiIconButton-root': {
            maxHeight: 32,
            maxWidth: 32,
            '& > svg': {
              fontSize: '1rem',
            },
          },
        },
      }),
      cell: ({ theme }: any) => ({
        borderTopColor: (theme.vars || theme).palette.divider,
      }),
      menu: ({ theme }: any) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundImage: 'none',
        [`& .${paperClasses.root}`]: {
          border: `1px solid ${(theme.vars || theme).palette.divider}`,
        },
        [`& .${menuItemClasses.root}`]: {
          margin: '0 4px',
        },
        [`& .${listItemIconClasses.root}`]: {
          marginRight: 0,
        },
        [`& .${listClasses.root}`]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      }),
      row: ({ theme }: any) => ({
        '&:last-of-type': {
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
        },
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        '&.Mui-selected': {
          background: (theme.vars || theme).palette.action.selected,
          '&:hover': {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
        },
      }),
      iconButtonContainer: ({ theme }: any) => ({
        [`& .${iconButtonClasses.root}`]: {
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
          '&:active': {
            backgroundColor: grey[200],
          },
          ...(theme.applyStyles?.('dark', {
            color: grey[50],
            '&:hover': {
              backgroundColor: grey[800],
            },
            '&:active': {
              backgroundColor: grey[900],
            },
          }) || {}),
        },
      }),
      menuIconButton: ({ theme }: any) => ({
        border: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: grey[100],
        },
        '&:active': {
          backgroundColor: grey[200],
        },
        ...(theme.applyStyles?.('dark', {
          color: grey[50],
          '&:hover': {
            backgroundColor: grey[800],
          },
          '&:active': {
            backgroundColor: grey[900],
          },
        }) || {}),
      }),
      filterForm: ({ theme }: any) => ({
        gap: theme.spacing(1),
        alignItems: 'flex-end',
      }),
      columnsManagementHeader: ({ theme }: any) => ({
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      }),
      columnHeaderTitleContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      columnHeaderDraggableContainer: { paddingRight: 2 },
      toolbar: ({ theme }: any) => ({
        backgroundColor: (theme.vars || theme).palette.background.paper,
      }),
      toolbarQuickFilter: {
        [`& .${inputBaseClasses.root}`]: {
          marginLeft: 6,
          marginRight: 6,
        },
        [`& .${iconButtonClasses.root}`]: {
          height: '36px',
          width: '36px',
        },
        [`& .${iconButtonClasses.edgeEnd}`]: {
          border: 'none',
          height: '28px',
          width: '28px',
        },
      },
    },
  },
};
