import React from "react";

const Home = (props) => {
    console.warn("home",props.data)

    // let len = props.data.length[0];
    return (
        <>

            <h1>Home Component</h1>
            <div className="add-to-card">
      <span className="card-count">{props.data.length}</span>
                <img alt= "" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACSkpJ0dHTi4uJnZ2cuLi6Li4urq6v29vaFhYUQEBCamprX19e4uLiPj4/t7e2lpaUqKirl5eV8fHzQ0NBGRkbc3Nw0NDQLCwtfX19SUlLy8vK2trYfHx9ra2vDw8MXFxdKSkpaWlrIyMg+Pj4iIiIzMzOLBGCtAAAE3ElEQVR4nO2b6XbqMAyEoQtla9lL2ff2/d/w1sFSSWwHSOIj4zvfvxyrdKbFsS3JtRoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAObScLKWlVcTXrOOgLi2tIoZ1JxNpbdWQ47Arra0achyOpbVVQ47DXUtaXCXkOKzH7/BDWlwlrHMctqXFVULXZEAON9LivPFJFvvSSnzB/8SRtBJffJDDgbQSX/Tjn4gz7XARx4poYU7/xBdpJb7giRjJ8cLkSA7fpJX4Ykl7uYW0Em+ctMNTtK+acfQTcUsOt9JKfPFODp+llfiiRZvvhrQSb9Cav4v2eNGNfiJOyWFTWokvRuQw3jX/QBaTp377yQnt7D56+eOTN9cn9EQc8pp/PufXc9A/0b4y3nR+gMwxlPWcJ2Je0rG0Q5lUAp/zz9WLsVNeBQ5l3mZLOuefkseuU14FDoU2v5uUwJVPhyL+arUe/f6peuo75T2uQz5enCeiR4efIv4uPJ2rFw1/Dp9E7P3S0QKGyTm/59JX3qFYiYsXiGWuvvIOtxLuFIOUgqNLX2mHHbGk7IQkJBOx5c3hUMaegiSct43PTsjBxj5Mu86tY1wwJ/utHf4H5/xoqxe8U4v2nD9NT8QYoT6NeDMZe+1wFu1E5BXsXVqJL3gfk+yNuWxacMUf2EfF9t2KEa2Ie/U0sSssu6eRrW5R9eJLPbx07BJLOpSd45zJSP7Qe7vEcg47sl1JPPW26mlulVjSoXBDC5cRk3ZhlwUdXMyhcIGy/6V1fKsn16tGBxdzKN1q/ap1zNR3aWSVWNLhSsgZwaq3vw99R7dtNvYuh9Ltj/zFTI4XjleNji3mUPrsyYnguXp6rt7hUPruEXcsJDJX81cbOnZgH3096PGtbVymdHgJpxSjbY7iTEa053xeISK5BGXCadK9tBJvpDsWYuSJHMafyYh/IibVi3rDYEh1h97aHFSs9fhqZwztgrjQQQ6TdmE6a1S1pwnidhyf89UO0lon1YFFHErvShM4RTapOfJlOrCIQyFPabhjoX35EJPDVBnRWifVcQUczoUsZaAkYkNNmmodBrLZ5eOFWvNtGUUdV8ChdApDwylF9Wq3vWp0XAGHgdzm4EyGmoi24oWOu99hJ5RD5+UlKFtGUYfd73AnZMiAMhk7NREt+TYddr9DsYa2LHy8UNPG0t+mw+53GMzdP/5mqn3ywdBJDhyZuJz6YRC7UsWUVkR1zl++GOiwvjmSMNXj5k+G8qL5WwTjvQRF1Yt46/nN4CZO1XDrUDAvv6oZ0SL4La3EGzwRqyWgaZ13YyYOh9ajfVQO8+6TxOGwlXPbIg6HniZiSA5z7pNE4vD9utwHd1hrv2Vp7zJ6F71MRM84T43TAdKdJlcw+ofMbnDjWmYgubUbMY/0RhHCyHgcbB8ULOZO7piJMBPkP0FUYm6ktTD0Z4uBZh/cbGr9rDCJ3+FfXZExMthGxEm6x+suzE2AIf8nG/FYb5oiq8WDZUGye1XLHMtEfIaTPryJZVq+LYeTqeMEtUu7hdT31N6RnvqeBlJLu4f+X4rf1U+03VHE+jGbqo5jdXFo0c2ZYM1kWdk81pb0ktZyeW2R+w15sFcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIt/9EA6Zz7YuBsAAAAASUVORK5CYII=" />
            </div>
            <div className="cart-wrapper item">
                <div className="img-wrapper item">
                    <img className="img-wrapper item" alt ="" src="https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg" />
                </div>

                <div className="text-wrapper-item">
                    <span> i-phone </span><br />
                    <span>Price : $1000.00</span>
                </div>

                <div className="btn-wrapper-item">
                    <button
                        onClick={() => props.addToCardHandler({ price: 1000, name: 'Iphone' })}
                    >Add To Cart</button>
                </div>
            </div>


        </>
    )
};

export default Home;