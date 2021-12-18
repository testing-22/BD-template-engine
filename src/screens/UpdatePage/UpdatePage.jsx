import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './styles.module.scss'

const initialState = {
    "id": '',
    "title": '',
    "price": '',
    "description": "",
    "category": "",
    "image": " ",
    "rating": {
        "rate": '',
        "count": ''
    }
}
function UpdatePage(props) {
    const { state } = useLocation();
    const { id, title, price, description, category, image, rating } = state || initialState
    const [values, setValues] = useState({})
    function handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        setValues({
            [name]: target.value
        });
    }

    async function handleSendMessage() {

    }
    return (
        <>
            <Header />
            <div className={styles.product_info}>
                <form onSubmit={handleSendMessage} action="" className={styles.sendMessageForm}>
                    <label > Imagem
                        <input type="file" multiple accept="image/*" onChange={handleInputChange} />

                    </label>
                    <label > Título
                        <input defaultValue={title} type="text" onChange={handleInputChange} />

                    </label>
                    <label > Categoria
                        <input defaultValue={category} type="text" onChange={handleInputChange} />

                    </label>
                    <label > Quantidade
                        <input defaultValue={rating.count} type="text" onChange={handleInputChange} />

                    </label>
                    <label > Avaliação
                        <input defaultValue={rating.rate} type="number" min={0} max={5} step={0.1} onChange={handleInputChange} />

                    </label>
                    <label > Valor de venda (R$)
                        <input defaultValue={price} type="number" min={1} max={1000} step={0.1} onChange={handleInputChange} />

                    </label>
                    <label>
                        Descrição
                        <textarea onChange={handleInputChange} value={values["message"]}
                            name="message" id="message" cols={30} rows={10} maxLength={240}
                            placeholder="Descrição" />
                    </label>
                    <button type="submit">Enviar</button>
                </form>

                <img src={image} style={{}} width={200} height={"100%"}/>

            </div>
        </>
    )
}

export default UpdatePage
