import React, { useState, useEffect } from "react";
import Collapsible from "./Collapsible";
import db from "../../firebase";
import { toast } from "react-toastify";

function Meni() {
  const [novaVrsta, setNovaVrsta] = useState("");
  const [vrsteJedi, setVrsteJedi] = useState([]);

  useEffect(() => {
    db.collection("hrana")
      .orderBy("order_number", "desc")
      .onSnapshot((snapshot) => {
        setVrsteJedi(
          snapshot.docs.map((doc) => ({ id: doc.id, vrsta: doc.data() }))
        );
      });
  }, []);

  const addElement = (e) => {
    e.preventDefault();
    if (novaVrsta) {
      db.collection("hrana")
        .add({
          title: novaVrsta,
          order_number: 100,
        })
        .then(() => {
          toast.success("Nova vrsta hrane uspešno dodana.");
          setNovaVrsta("");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      toast.error("Polje je prazno.");
    }
  };

  return (
    <>
      <h2>Ustvari novo vrsto jedi:</h2>
      <div className='row'>
        <div className='col-12'>
          <form onSubmit={addElement} className='form__jedilnik'>
            <input
              type='text'
              value={novaVrsta}
              placeholder='Primer: Morska hrana, Testenine,...'
              onChange={(e) => setNovaVrsta(e.target.value)}
            />
            <button type='submit' className='btn btn-primary'>
              Dodaj
            </button>
          </form>
        </div>
      </div>
      <div className='row'>
        {vrsteJedi.map(({ id, vrsta }) => (
          <Collapsible key={id} title={vrsta.title} id={id} />
        ))}
        {/* Hrana: name, price1, price2, price3 (default=null), vrsta_id (***)
         *** tega polja uporabniku ni treba vnašati, saj bo že avtomatsko vnesen
         */}
      </div>
    </>
  );
}

export default Meni;
