import localFont from '@next/font/local'

const jeko = localFont({
  src: [
    {
      path: '../../public/fonts/Jeko Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Extra Light.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Medium.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Semi Bold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  fallback: ['sans-serif'],
  display: 'swap'
})

export const fonts = { jeko }
