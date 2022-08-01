import Home from './components/Home'
import Breads from './components/Breads'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
// import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import BreadDetails from './components/BreadDetail'
import BreadCat from './components/BreadCat'
import './App.css'


const App = () => {
  const breads = [
    {name: 'Original Ciabatta Baguette', category:'Baguettes', id: '0', img: 'https://boulart.com/wp-content/uploads/baguette-ciabatta-original_01_CATEGORY-1.png'},
    {name: 'Olive Oil & Fine Herbs Focaccia', category:'Focaccias', id: '1', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Pull Apart Ciabatta Baguette', category:'Baguettes', id: '2', img:'https://boulart.com/wp-content/uploads/baguette-ciabatta-pull-apart-CATEGORY.png'},
    {name: 'Ciabatta', category:'Ciabattas', id: '3', img:'https://images.squarespace-cdn.com/content/v1/58a21d2ee3df281cfde6e815/1506536337547-RR6FYE2ZTERS37N911LB/whole+wheat+bagel.png?format=1000w'},
    {name: 'Olive Oil & Fine Herbs Focaccia Sandwich Bun', category:'Focaccias', id: '4', img: 'https://boulart.com/wp-content/uploads/sandwich-bun-focaccia-sandwich_01_CATEGORY_2col.png'}
    
    
  ]
  const categories = [
    {name: 'Artisan Rolls', id: '0', img: process.env.PUBLIC_URL + '/assets/categories/artisanrolls.png'},
    {name: 'Artisan Sandwich', id: '1', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Artisan Table Breads', id: '2', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Baguettes', id: '3', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Commercial D/Rolls', id: '4', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Crackers & Crisps', id: '5', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Deli Bread', id: '6', img: process.env.PUBLIC_URL + '/assets/categories/marblerye.png'},
    {name: 'Focaccia', id: '7', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Hambuns', id: '8', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Hoagie Rolls & Hot Dogs', id: '9', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Micros*', id: '10', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},
    {name: 'Pan Breads', id: '11', img: process.env.PUBLIC_URL + '/assets/categories/Challah.png'},
    {name: 'Pretzels', id: '12', img: 'https://boulart.com/wp-content/uploads/focaccia-olive-oil-fine-herbs_01_CATEGORY_2col_03.png'},


  ]

  return (
    <>
      <Router basename='/'>
        <Navigation categories={categories}/>
        <Routes>
          <Route path='/' element={<Home breads={breads}/>} />
          <Route path='/breads' element={<Breads categories={categories} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categories/:id/*' element={<BreadCat breads={breads}/>} />
          <Route path='/bread-details/:id/*' element={<BreadDetails breads={breads} />} />

          <Route path='*' element={<Home />} />

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
