import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from '../theme/muiTheme';
import LoginHeader from '../components/Login/LoginHeader';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';
import useSEO from '../hooks/useSEO';

const Login = () => {
  useSEO({
    title: 'Login',
    description: 'Log in to your TrustGrid account to manage procurement, track orders, and connect with trusted suppliers.',
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="min-h-screen bg-black text-[#e5e2e1] flex flex-col selection:bg-[#22c55e]/30">
        {/* Fixed brand-only header */}
        <LoginHeader />

        {/* Centered form — grows to fill space between header & footer */}
        <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-8">
          <LoginForm />
        </main>

        {/* Footer */}
        <LoginFooter />
      </div>
    </ThemeProvider>
  );
};

export default Login;
