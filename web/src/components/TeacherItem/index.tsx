import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/8830095?s=460&u=ce5a57750c213ab620a6d26aa8022fd8486a4fc7&v=4" alt="Elcio Sato"/>
                <div>
                    <strong>Elcio Sato</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla
                <br /><br />
                gla gla gla gla gla gla gla gla gla gla gla gla 
            </p>
            <footer>
                <p>
                    Preço / hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;