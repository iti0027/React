import React from "react";

//Importando as imagens do dado
import dado1 from "../assets/dado1.png";
import dado2 from "../assets/dado2.png";
import dado3 from "../assets/dado3.png";
import dado4 from "../assets/dado4.png";
import dado5 from "../assets/dado5.png";
import dado6 from "../assets/dado6.png";

const imagens = {1:dado1, 2:dado2, 3:dado3, 4:dado4, 5:dado5, 6:dado6 };

const Dado = ({valor}) =>{
    return (
        <img src= {imagens[valor]} alt={`Dado mostrando ${valor}`} style={{width: "100px"}}/>
    );
};

export default Dado;