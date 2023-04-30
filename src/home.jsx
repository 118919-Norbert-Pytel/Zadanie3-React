import React from "react";
import './app.css'

const Home = () => {
  return (
    <>
    
    <div>
        <div id="main">
          <a className="menu active" href="">Strona główna</a>
          <a className="menu" href="">Galeria</a>
          <a className="menu" href="">O Tobie</a>
          <a className="menu" href="">Profil</a>
        </div>
        <div id="page">
          <p className="name">Cześć, jestem <span style={{color: 'crimson'}}>Norbert Pytel 118919</span>.<br /> Piszę strony internetowe w react.<br /></p>
          
          <div className="">
              <form action="" method="post">
                <input type="text" name="login" placeholder="Login" /> <br /><br />
                <input type="password" name="password" placeholder="Hasło" /> <br /><br />
                <br /><br />
                <input type="submit" name="submit" defaultValue="Zaloguj się" />
              </form>
            </div>
          </div>
      </div>

    </>


  );
};
  
export default Home;
