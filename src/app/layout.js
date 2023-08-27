import './globals.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google'
import mobile from './mobile.module.css'
import { Auth } from './components/Auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className, mobile.container].join(' ')}>
        <div className={mobile.window}>
          <StyledEngineProvider injectFirst>
            <Auth>
              {children}
            </Auth>
          </StyledEngineProvider>
        </div>
      </body>
    </html>
  )
}
