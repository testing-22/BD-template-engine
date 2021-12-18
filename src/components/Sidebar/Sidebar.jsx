import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'

const categories = [
    "Todos",
    "men's clothing",
    "Acessórios para Veículos",
    "Agro",
    "Alimentos e Bebidas",
    "Animais",
    "Antiguidades e Coleções",
    "Arte, Papelaria e Armarinho",
    "Bebês",
    "Beleza e Cuidado Pessoal",
    "Brinquedos e Hobbies",
    "Calçados, Roupas e Bolsas",
    "Câmeras e Acessórios",
    "Casa, Móveis e Decoração",
    "Celulares e Telefones",
    "Construção",
    "Eletrodomésticos",
    "Eletrônicos, Áudio e Vídeo",
    "Esportes e Fitness",
    "Ferramentas",
    "Festas e Lembrancinhas",
    "Games",
    "Indústria e Comércio",
    "Informática",
    "Instrumentos Musicais",
    "Joias e Relógios",
    "Livros, Revistas e Comics",
    "Mais Categorias",
    "Saúde"
]

function Sidebar({ onType, onSelect }) {
    const [selectedItem, setSelectedItem] = useState("Todos");
    function filterProducts(e){
        onType(e.target.value)
    }
    function selectOption(e) {
        const category = e.target.innerText 
        onSelect(category)
        setSelectedItem(category)
    }
    return (
        <div className={styles.sidebar}>
            <input type="search" placeholder="Filtrar resultados..."
                onInput={filterProducts} />

            <ol>
                {
                    categories.map((category, id) =>
                        <li style={{color: selectedItem === category ? "blue" : "rgb(0,0,0,.8)"}}
                            key={id}
                            onClick={selectOption}>
                            {category}
                        </li>)
                }
            </ol>
        </div>
    )
}

export default Sidebar
