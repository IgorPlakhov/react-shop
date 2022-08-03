import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order = [],
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;
    
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)


    return (
        <>
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            <li>
                <table className="striped centered">
                    <thead>
                        <tr className={order.length ? "" : "hidden"}>
                            <th>Название товара</th>
                            <th>Цена за ед., ₴</th>
                            <th>Количество</th>
                            <th>Отминусовать</th>
                            <th>Добавить</th>
                            <th>Всего, ₴</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                            order.length ? order.map(item => (
                                <BasketItem
                                    key={item.id}
                                    removeFromBasket={removeFromBasket}     
                                    incQuantity={incQuantity} 
                                    decQuantity={decQuantity}
                                    {...item}
                                />
                            )) : <li className="collection-item">Корзина пуста</li>
                        }       
                    </tbody>
                </table>
            </li>
            
            
            <li className="collection-item active">
                {order.length ? `Общая стоимость: ${totalPrice} ₴` : ""}
                               
            </li>
            <li className="collection-item active">                
                <button className="btn btn-small green darken-1">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
        </>
    )
}

export { BasketList };