function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <i
                        className="material-icons basket-quantity"
                        onClick={() => decQuantity(id)}
                    >
                        remove
                    </i>
                </td>
                <td>
                    <i
                        className="material-icons basket-quantity"
                        onClick={() => incQuantity(id)}
                    >
                        add
                    </i>
                </td>
                <td>{price * quantity}</td>
                <td>
                    <span
                        
                        onClick={() => removeFromBasket(id)}
                    >
                        <i className="material-icons basket-delete">close</i>
                    </span>
                </td>
            </tr>
        </>
    )


}

export { BasketItem };