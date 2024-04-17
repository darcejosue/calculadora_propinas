import { useState } from "react";
import type { TOrderItem, TMenuItem } from '../types';

export default function useOrder() {

    const [order, setOrder] = useState<TOrderItem[]>([]);
    const [tip, setTip] = useState(0);
    const addItem = (item: TMenuItem) => {
        const isExist = order.find(orderItem => orderItem.id === item.id);
        if (!isExist) {
            const newItem: TOrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem]);
        }
        else {
            const updateOrder = order.map(
                orderItem => orderItem.id === item.id 
                ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                : orderItem);
            setOrder(updateOrder);
        }
    }

    const removeItem = (id:TOrderItem['id']) => {
        const deleteOrder = order.filter(item => item.id !== id);
        setOrder(deleteOrder)
    }

    return {
        order,
        setOrder,
        tip,
        setTip,
        addItem,
        removeItem,
    }
}