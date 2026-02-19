import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

type SignInCardProps = {
  onLoginSuccess?: () => void;
};

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '800px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      '0 8px 24px rgba(22, 40, 66, 0.85), 0 18px 45px rgba(22, 40, 66, 0.65)',
  }),
}));

export default function SignInCard({ onLoginSuccess }: SignInCardProps) {
  const theme = useTheme();
  const [usuarioError, setUsuarioError] = React.useState(false);
  const [usuarioErrorMessage, setUsuarioErrorMessage] = React.useState('');
  const [senhaError, setSenhaError] = React.useState(false);
  const [senhaErrorMessage, setSenhaErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const usuario = String(data.get('usuario') ?? '');
    const senha = String(data.get('senha') ?? '');

    const isValid = usuario === 'geofin' && senha === 'Nbr@102030';

    if (!isValid) {
      setUsuarioError(true);
      setSenhaError(true);
      setSenhaErrorMessage('Usuário ou senha inválidos.');
      return;
    }

    setUsuarioError(false);
    setSenhaError(false);
    setUsuarioErrorMessage('');
    setSenhaErrorMessage('');

    console.log('Login válido para usuário geofin');
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <Card>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="usuario">Usuário</FormLabel>
          <TextField
            error={usuarioError}
            helperText={usuarioErrorMessage}
            id="usuario"
            type="text"
            name="usuario"
            placeholder="Usuário"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={usuarioError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
            </Link>
          </Box>
          <TextField
            error={senhaError}
            helperText={senhaErrorMessage}
            name="senha"
            placeholder="••••••"
            type="password"
            id="senha"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={senhaError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={(
            <Checkbox
              value="remember"
              color="primary"
              sx={{
                '&.Mui-checked': {
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.grey[500]
                      : theme.palette.primary.main,
                },
              }}
            />
          )}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained">
          Sign in
        </Button>
      </Box>
    </Card>
  );
}
