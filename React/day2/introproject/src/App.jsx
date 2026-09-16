const App = () =>{
  return(<> 
  
  <div>
   <h1>hello react</h1> 
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in, cumque perspiciatis reiciendis delectus maxime fuga mollitia magnam aliquam. Temporibus illum doloremque provident sint et sed voluptatum error fuga tempore?</p>
   <form >
    <label>username</label>
    <input type="text"  placeholder = "enter your name" />
    <label>password</label>
    <input type="password"  placeholder = "enter your password"  />
   </form>
      <Button/>
  </div>

  </>)
}

export default App

export const Button = ()=>{
  return(<> 
  
  <div>
    <button>click</button>
  </div>
  </>)
}

