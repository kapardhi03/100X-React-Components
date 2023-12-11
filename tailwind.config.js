/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'coverImage': "url('/src/assets/images/cover.png')",
        'profileImage': "url('/src/assets/images/user-avatars/user-avatar-2.png')",

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing:{
        '9.5':'2.375rem'
      },
      height:{
        "10.5":"2.625rem",
        "15":"3.75rem",
        "tweet":'13.75rem',
        '70': '4.375rem',
        '86':'22.25rem',
      },
      width:{
        '21':'5.375rem',
        '70':'17.875rem',
        '90':'20.875rem',
        '91':'21.75rem',
        '99':'26.625rem',
        '100':'27.625rem',
        'xxl':'30.125rem',
        'xxxl':'32rem',
        'tweet':'37.5rem',
        '17':'4.25rem',
      },
      colors:{
        "neutral-50":"#f9f9f9",
        "neutral-100":"#f4f4f4",
        "neutral-200":"#e4e4e4",
        "neutral-300":"#D3D3D3",
        "neutral-400":"#A2A2A2",
        "neutral-500":"#737373", 
        "neutral-600":"#525252",
        "neutral-700":"#404040",
        "neutral-800":"#262626",
        "neutral-900":"#171717",
        "neutral-950":"#0A0A0A",
        "neutral-1000":"#000000",
        "twitter-blue":"#1D9BF0",
        "twitter-blue-hover":"#1D9BF033",
        "twitter-blue-disabled":"#1E5D87",
        "blue-wash":"#75BEEF33",
        "button-stroke":"#546A7A",
        "search-bar-fill":"#212327",
        "card-fill":"#16181C",
        "success":"#00BE74",
        "error":"#F4212E",
        "sign-up-border":"rgba(29, 155, 240, 0.24)",
        "dob-text":"rgba(255, 255, 255, 0.60)",
        "red-like":"#F4245E",
        "red-like-hover":"#F4245E33",
        "green-success":"#00BE74",
        "green-success-hover":"#00BE7433",
      },
      boxShadow:{
        "md":"0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      fontSize:{
        'xs':['0.75rem', {
          'lineHeight':'0.9375rem',
        }],
        'sm':['0.875rem', {
          'lineHeight': '1.0625rem',
        }],
        'base':[
          '1rem', {
            'lineHeight': '1.2rem',
          }
        ],
        'xl':['1.25rem', {
          'lineHeight': '1.5rem',
        }],
        '15':[
          '0.9375rem', {
            'lineHeight': '1.125rem'
          }
        ],
      },
      
    },
  },
  plugins: [],
}

