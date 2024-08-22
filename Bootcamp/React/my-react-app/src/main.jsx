import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const date = new Date()
const hour = date.getHours()
let h1 = ''
let color

if (0 <= hour & hour < 12){
  h1='Good morning'
  color = {color: 'red'}
} else if (hour >= 12 & hour < 18){
  h1='Good Afternoon'
  color = {color: 'green'}
} else {
  h1='Good evening'
  color = {color: 'blue'}
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='heading' style={color}>{h1} {hour}</h1>
    
  </StrictMode>
)

