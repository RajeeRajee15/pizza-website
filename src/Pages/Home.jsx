import React from 'react'
import '../assets/mystyle.css'
import tandoori from '../assets/img/tandoori.jpg'
import popcorn from '../assets/img/popcorn.jpg'
import spicy from '../assets/img/spicy.jpg'

import pizza1 from '../assets/img/pizza1.jpg'
import pizza2 from '../assets/img/pizza2.jpg'
import pizza3 from '../assets/img/pizza3.jpg'
import pizza4 from '../assets/img/pizza4.jpg'
import pizza5 from '../assets/img/pizza5.jpg'
import pizza6 from '../assets/img/pizza5.jpg'
function Home() {
  return (
    <>
      <section className='home'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <h1 className=' title text-white'>Fresh Baked <span className='span'>Pizza</span></h1>
              <p className='text-white mt-4'>Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.</p>
            </div>

          </div>
        </div>
      </section>

      {/* products section  start-------- */}
      <section>
        <div class="container py-4">
          <h1 className='text-center text-white'>Pizza Menu</h1>

          <div className='row row-cols-1 row-cols-md-3   py-5'>
            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={spicy} class="card-img-top w-100 bg-black" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Spicy Chicken</h5>
                  <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="button1 ">Buy</a>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark" >
                <img src={popcorn} class="card-img-top w-100 bg-black" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Popcorn Chicken</h5>
                  <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="button1 ">Buy</a>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={tandoori} class="card-img-top w-100 bg-black" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Tandoori Chicken</h5>
                  <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="button1 ">Buy</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </section>
      {/* products section  End-------- */}

      {/* Imge */}

      <section>
        <div class="container py-4">
          <h1 className='text-center text-white'>Pizza Menu</h1>

          <div className='row row-cols-1 row-cols-md-3   py-5'>
            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={pizza1} class="card-img-top w-100"alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Chilli Chicken Pizza</h5>
                  <p className="card-text text-secondary">A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzare.</p>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark" >
                <img src={pizza2} class="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Sausage Delight</h5>
                  <p className="card-text text-secondary">Chicken sausages & onions with a double layer of cheese.</p>
                 
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={pizza3} class="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Chicken Bacon</h5>
                  <p className="card-text text-secondary">A flavoursome duo of chicken bacon and spicy potatoes on a fiery.</p>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={pizza4} class="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Cheesy Onion</h5>
                  <p className="card-text text-secondary">SRich tomato sauce base topped with cream cheese, onions, green chil.</p>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={pizza5} class="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Cheesy Tomato</h5>
                  <p className="card-text text-secondary">Rich tomato sauce base topped with cream cheese, onions, tomato.</p>
                </div>
              </div>
            </div>

            <div className='col mb-4'>
            <div className="card bg-dark">
                <img src={pizza6} class="card-img-top w-100 " alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">Black Chicken</h5>
                  <p className="card-text text-secondary">Flavoursome pieces of black chicken and crunchy onion with a double.</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
        
      </section>
      {/*  */}
    </>
  )
}

export default Home